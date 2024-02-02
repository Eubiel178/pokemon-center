import * as S from "./styles";
import Link from "next/link";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>
          <Link href="/">
            <S.Logo
              src="/images/white-pokeball.svg"
              alt="logo"
              width={37}
              height={34}
            />
            <S.TilteText>Centro Pokémon</S.TilteText>
          </Link>
        </S.Title>

        <NavBar />
      </S.Content>
    </S.Container>
  );
};

Header.displayName = "Header";
