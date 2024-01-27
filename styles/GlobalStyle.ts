import { createGlobalStyle } from "styled-components";
import { ResetStyle } from "./ResetStyle";

export const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  #__next{
    height: 100dvh;
    height: 100vh;

    display: flex;
    flex-direction: column;
  }
`;
