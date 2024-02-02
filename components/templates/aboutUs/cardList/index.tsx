import * as S from "./styles";
import { cardsData } from "@/data/aboutUsContent";

export const CardList = () => {
  return (
    <S.Container>
      <S.Title>O Centro Pokémon</S.Title>

      <S.List>
        {cardsData.map((element, index) => (
          <S.Card key={element.key}>
            <S.CardTitle>{element.title}</S.CardTitle>

            <S.CardText>{element.description}</S.CardText>
          </S.Card>
        ))}
      </S.List>
    </S.Container>
  );
};

CardList.displayName = "CardList";
