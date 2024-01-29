import styled from "styled-components";

export const Container = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url("/images/pokemon-hero.jpg") lightgray 0px 0px / 100% 100% no-repeat;
`;

export const Title = styled.h2`
  text-align: center;
  max-width: 27.625rem;
  width: 100%;
  padding: 0 1.5625rem;
`;
