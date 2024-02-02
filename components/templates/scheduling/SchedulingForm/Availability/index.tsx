import * as S from "./styles";

import { useFormContext } from "react-hook-form";
import { type FormInfoProps } from "@/pages/scheduling";
import { type FormData } from "..";

import { Input } from "@/components/atoms";

export const Availability = ({ formInfo }: { formInfo: FormInfoProps }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  const handleOptionsInSelect = (optionList: string[]) => {
    return optionList.map((option) => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      );
    });
  };

  return (
    <S.Fieldset>
      <Input.Root sharedProps={{ error: errors?.scheduledDate?.message }}>
        <Input.Label htmlFor="scheduledDate">Data para Atendimento</Input.Label>

        <Input.Wrapper>
          <Input.FieldSelect {...register("scheduledDate")} defaultValue="">
            <option value="" disabled>
              Selecione uma data
            </option>

            {handleOptionsInSelect(formInfo.availabilityScheduling.date)}
          </Input.FieldSelect>
        </Input.Wrapper>

        <Input.ErrorText />
      </Input.Root>

      <Input.Root sharedProps={{ error: errors?.scheduledHours?.message }}>
        <Input.Label htmlFor="scheduledHours">
          Data para Atendimento
        </Input.Label>

        <Input.Wrapper>
          <Input.FieldSelect {...register("scheduledHours")} defaultValue="">
            <option value="" disabled>
              Selecione uma hora
            </option>

            {handleOptionsInSelect(formInfo.availabilityScheduling.time)}
          </Input.FieldSelect>
        </Input.Wrapper>

        <Input.ErrorText />
      </Input.Root>
    </S.Fieldset>
  );
};

Availability.displayName = "Availability";
