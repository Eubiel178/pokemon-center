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
    subtotal: "",
    rateFormatted: "",
    totalPayable: "",
  });

  const formatValue = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const calculateRate = (quantity: number) => {
    return quantity * unitaryValue * 0.03;
  };

  useEffect(() => {
    if (team.length > 0) {
      const pokemonList = team.filter((element: { pokemon: string }) => {
        return element.pokemon !== "";
      });

      setInformation({
        numberOfPokemons: pokemonList.length.toLocaleString().padStart(2, "0"),
        unitaryValueFormatted: formatValue(unitaryValue),
        subtotal: formatValue(pokemonList.length * unitaryValue),
        rateFormatted: formatValue(calculateRate(pokemonList.length)),
        totalPayable: formatValue(
          calculateRate(pokemonList.length) + pokemonList.length * unitaryValue
        ),
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

          <S.InfoText>{information.subtotal}</S.InfoText>
        </S.InfoItem>

        <S.InfoItem>
          <S.InfoText>Taxa geracional*: </S.InfoText>

          <S.InfoText>{information.rateFormatted}</S.InfoText>
        </S.InfoItem>

        <S.InfoFee>
          *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
          alta do time, com limite de até 30%
        </S.InfoFee>
      </S.Info>

      <S.ButtonSubmitContainer>
        <S.TotalPrice>Valor Total: {information.totalPayable}</S.TotalPrice>

        <Button loading={isSubmitting}>Concluir Agendamento</Button>
      </S.ButtonSubmitContainer>
    </>
  );
};
