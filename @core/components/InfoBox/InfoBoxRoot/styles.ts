import styled from "styled-components";

export const Container = styled.div`
  height: 11.6875rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Content = styled.div`
  width: var(--content-width);

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
