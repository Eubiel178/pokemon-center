import * as S from "./styles";

import { useFieldArray, useFormContext } from "react-hook-form";

import { type FormInfoProps } from "@/pages/scheduling";
import { type FormData } from "..";

import { Button, Input } from "@/components/atoms";

export const TeamRegistration = ({ formInfo }: { formInfo: FormInfoProps }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray<FormData>({
    name: "team",
    control: control,
  });

  const teamLimit = 6;
  const teamSize = fields.length;

  const addTeam = () => {
    if (teamSize < teamLimit) {
      append({
        pokemon: "",
      });
    }
  };

  const removeTeam = (index: number) => {
    if (teamSize > 1) {
      remove(index);
    }
  };

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

  return (
    <S.Fieldset>
      <S.Header>
        <S.Title>Cadastre seu time</S.Title>

        <S.Text>Atendemos até 06 pokémons por vez</S.Text>
      </S.Header>

      <S.Fields>
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
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione seu Pokemon
                </option>

                {handleOptionsInSelect(formInfo.pokemons)}
              </Input.FieldSelect>

              {index > 0 && (
                <Button type="button" onClick={() => removeTeam(index)}>
                  Deletar
                </Button>
              )}
            </Input.Wrapper>

            <Input.ErrorText />
          </Input.Root>
        ))}

        {teamSize < 6 && (
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
      </S.Fields>
    </S.Fieldset>
  );
};

TeamRegistration.displayName = "TeamRegistration";
