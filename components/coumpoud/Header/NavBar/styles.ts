import styled from "styled-components";

export const NavBar = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.875rem;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #000;
  }
`;

export const NavItemHighlight = styled(NavItem)`
  border-radius: 1.875rem;
  padding: 0.4375rem 0.8125rem;

  background-color: ${(props) => props.theme.colors.primary};

  a {
    color: #fff;
  }
`;
