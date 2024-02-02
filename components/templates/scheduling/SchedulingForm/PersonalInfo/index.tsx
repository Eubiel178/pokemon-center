import * as S from "./styles";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

import { Registry, container } from "@/@core/infrastructure/inversify.config";
import { GetCitiesUsecase } from "@/@core/use-case";

import { type FormInfoProps } from "@/pages/scheduling";
import { type FormData } from "..";

import { formatToJson } from "@/utils";

import { Button, Input, ModalToast } from "@/components/atoms";

export const PersonalInfo = ({ formInfo }: { formInfo: FormInfoProps }) => {
  const {
    register,
    watch,
    resetField,
    formState: { errors },
  } = useFormContext<FormData>();

  const [cityList, setCityList] = useState<{ id: string; name: string }[]>([]);
  const regionWasSelected = cityList.length > 0;

  const handleOptionsInSelect = (
    optionList: { id: string; name: string }[]
  ) => {
    return optionList.map((option) => {
      return (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      );
    });
  };

  useEffect(() => {
    (async () => {
      const regionSelected = watch("region");

      if (regionSelected) {
        try {
          const getCitiesListUseCase = container.get<GetCitiesUsecase>(
            Registry.GetCitiesUsecase
          );

          const response = await getCitiesListUseCase.execute(regionSelected);
          const citiesListFormatted = formatToJson(response);

          setCityList(citiesListFormatted);
        } catch (error: any) {
          const toastStyles = {
            borderColor: "#DF8686",
            borderWidth: "0.0625rem",
            borderStyle: "solid",
            width: "25.5rem",
            height: "15.9375rem",
            padding: ".625rem",
          };

          toast(
            <ModalToast.Root>
              <ModalToast.Title>
                Ocorreu um erro ao buscar cidades da região
                <strong> {regionSelected}</strong>
              </ModalToast.Title>

              <ModalToast.Wrapper>
                <Image src="/warning.svg" alt="error" width={41} height={41} />

                <ModalToast.Text>
                  Por favor, tente selecionar região novamente e caso o erro
                  persista entre em contato com a equipe.
                  <br />
                </ModalToast.Text>

                <Button onClick={() => resetField("region")}>
                  <Link
                    href={`mailto:dev123gabriel@gmail.com?subject=Erro%20ao%20buscar%20cidades%20da%20região%20${encodeURIComponent(
                      regionSelected
                    )}&body=Erro:%20${encodeURIComponent(error)}`}
                    target="_blank"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Enviar erro ao suporte
                  </Link>
                </Button>
              </ModalToast.Wrapper>
            </ModalToast.Root>,

            {
              position: "top-center",
              style: toastStyles,
              autoClose: false,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      }
    })();
  }, [watch("region")]);

  return (
    <S.Fieldset>
      <Input.Root sharedProps={{ error: errors?.name?.message }}>
        <Input.Label htmlFor="name">Nome</Input.Label>

        <Input.Wrapper>
          <Input.Field {...register("name")} placeholder="Digite seu nome" />
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
          <Input.FieldSelect {...register("region")} defaultValue="">
            <option value="">Selecione sua Região</option>

            {handleOptionsInSelect(formInfo.regions)}
          </Input.FieldSelect>
        </Input.Wrapper>

        <Input.ErrorText />
      </Input.Root>

      <Input.Root sharedProps={{ error: errors?.city?.message }}>
        <Input.Label htmlFor="city">Cidade</Input.Label>

        <Input.Wrapper>
          <Input.FieldSelect
            {...register("city")}
            disabled={!regionWasSelected}
            defaultValue=""
          >
            <option value="" disabled>
              {regionWasSelected
                ? "Selecione sua Cidade"
                : "Selecione sua Região primeiro"}
            </option>

            {regionWasSelected && handleOptionsInSelect(cityList)}
          </Input.FieldSelect>
        </Input.Wrapper>

        <Input.ErrorText />
      </Input.Root>
    </S.Fieldset>
  );
};
