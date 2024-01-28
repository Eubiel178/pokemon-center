import styled from "styled-components";

export const NavBar = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #000;
  }
`;

export const NavItemHighlight = styled(NavItem)`
  border-radius: 30px;
  padding: 7px 13px;

  background-color: ${(props) => props.theme.colors.primary};

  a {
    color: #fff;
  }
`;
