import { createGlobalStyle } from "styled-components";
import { ResetStyle } from "./ResetStyle";

export const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  :root {
    --content-width:clamp( 85vw,85vw,1440px);
  }

  #__next{
    min-height: 100dvh;
    min-height: 100vh;

    display: flex;
    justify-content: stretch;
    flex-direction: column;
  }

  h2{
    color: #FFF;
    font-size: 2rem;
    font-weight: 700;
  }
`;
