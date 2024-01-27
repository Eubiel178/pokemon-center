import styled from "styled-components";

export const Container = styled.footer`
  height: 4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Text = styled.p`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 400;
`;
