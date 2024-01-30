import * as S from "./styles";

import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { schedulingSchema } from "@/validation/appointment/schedulingSchema";

import {
  SchedulingFormInterface,
  SelectOptionInterface,
  SchedulingRepository,
  SchedulingService,
} from "@/@core/domain";

import { Button, Input } from "@/components/atoms";

type FormData = InferType<typeof schedulingSchema>;

export const SchedulingForm = ({
  formInfo,
}: {
  formInfo: SchedulingFormInterface;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schedulingSchema),
    defaultValues: {
      name: "",
      surname: "",
      region: "",
      city: "",
      team: [{ pokemon: "" }],
      appointmentDate: "",
      appointmentHours: "",
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "team",
    control,
  });

  const schedulingRepository = new SchedulingRepository();
  const schedulingService = new SchedulingService();

  const [cityList, setCityList] = useState<SelectOptionInterface[]>([]);
  const teamLimit = 6;

  const addTeam = () => {
    if (fields.length < teamLimit) {
      append({
        pokemon: "",
      });
    }
  };

  const removeTeam = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const regionSelected = watch("region");

        if (regionSelected) {
          const response = await schedulingRepository.region(regionSelected);
          const cityListFormat = schedulingService.formatCitys(
            response?.data.locations
          );

          setCityList(cityListFormat);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [watch("region")]);

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          Preencha o formulário abaixo para agendar sua consulta
        </S.Title>

        <S.Form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <S.PersonalInfo>
            <Input.Root sharedProps={{ error: errors?.name?.message }}>
              <Input.Label htmlFor="name">Nome</Input.Label>

              <Input.Wrapper>
                <Input.Field
                  {...register("name")}
                  placeholder="Digite seu nome"
                />
              </Input.Wrapper>

              <Input.ErrorText />
            </Input.Root>

            <Input.Root sharedProps={{ error: errors?.surname?.message }}>
              <Input.Label htmlFor="surname">Sobrenome</Input.Label>

              <Input.Wrapper>
                <Input.Field
                  {...register("surname")}
                  placeholder="Digite seu sobrenome"
                />
              </Input.Wrapper>

              <Input.ErrorText />
            </Input.Root>

            <Input.Root sharedProps={{ error: errors?.region?.message }}>
              <Input.Label htmlFor="region">Região</Input.Label>

              <Input.Wrapper>
                <Input.FieldSelect
                  {...register("region")}
                  helperText="Selecione sua região"
                  optionsList={formInfo.regionsList}
                />
              </Input.Wrapper>

              <Input.ErrorText />
            </Input.Root>

            <Input.Root sharedProps={{ error: errors?.city?.message }}>
              <Input.Label htmlFor="city">Cidade</Input.Label>

              <Input.Wrapper>
                <Input.FieldSelect
                  {...register("city")}
                  optionsList={cityList}
                  helperText={
                    cityList.length === 0
                      ? "Selecione sua Região primeiro"
                      : "Selecione sua cidade"
                  }
                  title={
                    cityList.length === 0
                      ? "Selecione sua Região primeiro"
                      : "Selecione sua cidade"
                  }
                  disabled={cityList.length === 0}
                />
              </Input.Wrapper>

              <Input.ErrorText />
            </Input.Root>
          </S.PersonalInfo>

          <S.TeamRegistration>
            <S.TeamRegistrationHeader>
              <S.TeamRegistrationTitle>
                Cadastre seu time
              </S.TeamRegistrationTitle>

              <S.TeamRegistrationText>
                Atendemos até 06 pokémons por vez
              </S.TeamRegistrationText>
            </S.TeamRegistrationHeader>

            <S.TeamRegistrationFields>
              {fields.map((team, index) => (
                <Input.Root
                  key={team.id}
                  sharedProps={{
                    error: errors.team?.[index]?.pokemon?.message,
                  }}
                >
                  <Input.Wrapper direction="row" align="center" gap={2}>
                    <Input.Label htmlFor="pokemonList">
                      Pokemon 0{index + 1}
                    </Input.Label>

                    <Input.FieldSelect
                      {...register(`team.${index}.pokemon`)}
                      helperText="Selecione seu pokémon"
                      optionsList={formInfo.pokemonList}
                    />

                    {index > 0 && (
                      <Button type="button" onClick={() => removeTeam(index)}>
                        Deletar
                      </Button>
                    )}
                  </Input.Wrapper>

                  <Input.ErrorText />
                </Input.Root>
              ))}

              {fields.length < 6 && (
                <Button
                  type="button"
                  onClick={addTeam}
                  background="white"
                  font={{
                    color: "#1D1D1D",
                    size: 0.75,
                    weight: 700,
                  }}
                  border={{
                    width: 0.0625,
                    type: "solid",
                    color: "#1D1D1D",
                    rounded: 1.875,
                  }}
                >
                  Adicionar novo pokémon ao time... {"\u00A0"}+
                </Button>
              )}
            </S.TeamRegistrationFields>
          </S.TeamRegistration>

          <S.AppointmentDate>
            <Input.Root
              sharedProps={{ error: errors?.appointmentDate?.message }}
            >
              <Input.Label htmlFor="appointmentDate">
                Data para Atendimento
              </Input.Label>

              <Input.Wrapper>
                <Input.FieldSelect
                  {...register("appointmentDate")}
                  helperText="Selecione uma data"
                  optionsList={formInfo.avaliableDates}
                />
              </Input.Wrapper>

              <Input.ErrorText />
            </Input.Root>

            <Input.Root
              sharedProps={{ error: errors?.appointmentHours?.message }}
            >
              <Input.Label htmlFor="appointmentHours">
                Data para Atendimento
              </Input.Label>
              <Input.Wrapper>
                <Input.FieldSelect
                  {...register("appointmentHours")}
                  helperText="Selecione um horário"
                  optionsList={formInfo.avaliableTimes}
                />
              </Input.Wrapper>
              <Input.ErrorText />
            </Input.Root>
          </S.AppointmentDate>

          <S.Info>
            <S.InfoItem>
              <S.InfoText>Número de pokémons a serem atendidos:</S.InfoText>

              <S.InfoText>01</S.InfoText>
            </S.InfoItem>

            <S.InfoItem>
              <S.InfoText>Atendimento unitário por pokémon:</S.InfoText>

              <S.InfoText>R$ 70,00</S.InfoText>
            </S.InfoItem>

            <S.InfoItem>
              <S.InfoText>Subtotal:</S.InfoText>

              <S.InfoText>R$ 70,00</S.InfoText>
            </S.InfoItem>

            <S.InfoItem>
              <S.InfoText>Taxa geracional*: </S.InfoText>

              <S.InfoText>R$ 2,10</S.InfoText>
            </S.InfoItem>

            <S.InfoFee>
              *adicionamos uma taxa de 3%, multiplicado pelo número da geração
              mais alta do time, com limite de até 30%
            </S.InfoFee>
          </S.Info>

          <S.ButtonSubmitContainer>
            <S.TotalPrice>Valor Total: R$ 72,10</S.TotalPrice>

            <Button>Concluir Agendamento</Button>
          </S.ButtonSubmitContainer>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};
