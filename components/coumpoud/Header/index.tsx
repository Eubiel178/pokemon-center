import * as S from "./styles";
import { NavBar } from "./NavBar";
import Link from "next/link";

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.TitleContainer>
          <S.Logo
            src="/images/white-pokeball.svg"
            alt="logo"
            width={37}
            height={34}
          />

          <S.Title>
            <Link href="/">Centro Pokémon</Link>
          </S.Title>
        </S.TitleContainer>

        <NavBar />
      </S.Content>
    </S.Container>
  );
};
