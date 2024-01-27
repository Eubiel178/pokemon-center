import styled from "styled-components";

export const NavBar = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  font-size: 0.875rem;
  font-weight: 400;
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
