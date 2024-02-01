import { useFormContext, useWatch } from "react-hook-form";
import * as S from "./styles";

import { useEffect, useState } from "react";
import { Button } from "@/components/atoms";

export const Information = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();
  const team = useWatch({
    control,
    name: "team",
  });

  const unitaryValue = 70;
  const [information, setInformation] = useState({
    numberOfPokemons: "",
    unitaryValueFormatted: "",
    totalValueFormatted: "",
  });

  const formatValue = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  useEffect(() => {
    if (team.length > 0) {
      const pokemonList = team.filter((element: { pokemon: string }) => {
        return element.pokemon !== "";
      });

      setInformation({
        numberOfPokemons: pokemonList.length.toLocaleString().padStart(2, "0"),
        unitaryValueFormatted: formatValue(unitaryValue),
        totalValueFormatted: formatValue(pokemonList.length * unitaryValue),
      });
    }
  }, [team]);

  return (
    <>
      <S.Info>
        <S.InfoItem>
          <S.InfoText>Número de pokémons a serem atendidos:</S.InfoText>

          <S.InfoText>{information.numberOfPokemons}</S.InfoText>
        </S.InfoItem>

        <S.InfoItem>
          <S.InfoText>Atendimento unitário por pokémon:</S.InfoText>

          <S.InfoText>{information.unitaryValueFormatted}</S.InfoText>
        </S.InfoItem>

        <S.InfoItem>
          <S.InfoText>Subtotal:</S.InfoText>

          <S.InfoText>{information.totalValueFormatted}</S.InfoText>
        </S.InfoItem>

        <S.InfoItem>
          <S.InfoText>Taxa geracional*: </S.InfoText>

          <S.InfoText>R$ 2,10</S.InfoText>
        </S.InfoItem>

        <S.InfoFee>
          *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
          alta do time, com limite de até 30%
        </S.InfoFee>
      </S.Info>

      <S.ButtonSubmitContainer>
        <S.TotalPrice>Valor Total: R$ 72,10</S.TotalPrice>

        <Button loading={isSubmitting}>Concluir Agendamento</Button>
      </S.ButtonSubmitContainer>
    </>
  );
};
