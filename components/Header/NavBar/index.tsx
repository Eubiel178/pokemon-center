import Link from "next/link";
import * as S from "./styles";

export const NavBar = () => {
  return (
    <S.NavBar>
      <S.NavList>
        <S.NavItem>
          <Link href="/schedule-appointment">Quem Somos</Link>
        </S.NavItem>

        <S.NavItemHighlight>
          <Link href="/about-us">Agendar Consulta</Link>
        </S.NavItemHighlight>
      </S.NavList>
    </S.NavBar>
  );
};
