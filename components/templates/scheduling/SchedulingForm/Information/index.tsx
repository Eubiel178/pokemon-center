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
        subtotal: formatValue(pokemonList.length * unitaryValue),
        rateFormatted: formatValue(pokemonList.length * unitaryValue * 0.03),
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
          <S.InfoText>
            Taxa geracional*: {information.rateFormatted}{" "}
          </S.InfoText>

          <S.InfoText>R$</S.InfoText>
        </S.InfoItem>

        <S.InfoFee>
          *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
          alta do time, com limite de até 30%
        </S.InfoFee>
      </S.Info>

      <S.ButtonSubmitContainer>
        <S.TotalPrice>
          Valor Total:{"\u00A0"}
          {parseFloat(information.subtotal)
            ? parseFloat(information.subtotal) +
                parseFloat(information.rateFormatted) || 0
            : "R$ 0,00"}
        </S.TotalPrice>

        <Button loading={isSubmitting}>Concluir Agendamento</Button>
      </S.ButtonSubmitContainer>
    </>
  );
};
