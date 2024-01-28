import * as S from "./styles";
import { cardsData } from "@/data/aboutUsContent";

export const CardList = () => {
  return (
    <S.List>
      {cardsData.map((element, index) => (
        <S.Card key={element.key}>
          <h4>{element.title}</h4>

          <p>{element.description}</p>
        </S.Card>
      ))}
    </S.List>
  );
};
