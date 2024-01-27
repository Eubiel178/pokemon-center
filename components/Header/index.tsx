import Image from "next/image";
import * as S from "./styles";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderContent>
        <S.TitleContainer>
          <Image
            src="/images/white-pokeball.svg"
            alt="logo"
            width={37}
            height={34}
          />

          <S.Title>Centro Pokémon</S.Title>
        </S.TitleContainer>

        <NavBar />
      </S.HeaderContent>
    </S.Header>
  );
};
