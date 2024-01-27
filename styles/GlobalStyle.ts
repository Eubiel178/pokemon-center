import { createGlobalStyle } from "styled-components";
import { ResetStyle } from "./ResetStyle";

export const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  :root {
    --content-width:clamp( 85vw,85vw,1440px);
  }

  #__next{
    height: 100dvh;
    height: 100vh;

    display: flex;
    flex-direction: column;
  }
`;
