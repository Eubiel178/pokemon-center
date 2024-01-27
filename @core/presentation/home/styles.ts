import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
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

export const Text = styled.p`
  max-width: 27.625rem;
  width: 100%;
  padding: 0 25px;

  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;