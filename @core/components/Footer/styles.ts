import styled from "styled-components";

export const Container = styled.footer`
  height: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Text = styled.p`
  color: #fff;
`;
