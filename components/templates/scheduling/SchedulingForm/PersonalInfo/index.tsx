import * as S from "./styles";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import { Registry, container } from "@/@core/infrastructure/inversify.config";
import { GetCitiesUsecase } from "@/@core/use-case";

import { type FormInfoProps } from "@/pages/scheduling";
import { type FormData } from "..";

import { formatToJson } from "@/utils";
import { Input } from "@/components/atoms";

export const PersonalInfo = ({ formInfo }: { formInfo: FormInfoProps }) => {
  const {
    register,
    watch,
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
      try {
        const regionSelected = watch("region");

        if (regionSelected) {
          const getCitiesListUseCase = container.get<GetCitiesUsecase>(
            Registry.GetCitiesUsecase
          );

          const response = await getCitiesListUseCase.execute(regionSelected);
          const citiesListFormatted = formatToJson(response);

          setCityList(citiesListFormatted);
        }
      } catch (error) {
        console.log(error);
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
          <Input.FieldSelect {...register("region")}>
            <option value="" disabled>
              Selecione sua Região
            </option>

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
          >
            <option value="" disabled>
              {regionWasSelected
                ? "Selecione sua cidade"
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
