import Image from "next/image";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Header>
      <S.TitleContainer>
        <Image
          src="/images/white-pokeball.svg"
          alt="logo"
          width={37}
          height={34}
        />

        <S.Title>Centro Pokémon</S.Title>
      </S.TitleContainer>
    </S.Header>
  );
};
