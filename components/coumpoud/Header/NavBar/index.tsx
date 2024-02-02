import Link from "next/link";
import * as S from "./styles";

export const NavBar = () => {
  return (
    <S.NavBar>
      <S.NavList>
        <S.NavItem>
          <Link href="/aboutUs">Quem Somos</Link>
        </S.NavItem>

        <S.NavItemHighlight>
          <Link href="/scheduling">Agendar Consulta</Link>
        </S.NavItemHighlight>
      </S.NavList>
    </S.NavBar>
  );
};

NavBar.displayName = "NavBar";
