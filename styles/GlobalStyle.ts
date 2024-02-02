import { createGlobalStyle } from "styled-components";
import { ResetStyle } from "./ResetStyle";

export const GlobalStyle = createGlobalStyle`
  ${ResetStyle}  

  :root {
    --content-width:clamp( 85vw,85vw,1440px);
  }

  body {
    font-family: "Inter", sans-serif;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  #__next {
    min-height: 100dvh;
    min-height: 100vh;

    display: flex;
    justify-content: stretch;
    flex-direction: column;


  }

  h2 {
    color: #FFF;
    font-size: 2rem;
    font-weight: 700;
  }
  h3 {
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
  }

  input,select{
     box-sizing: border-box;
  width: 100%;
  }
`;
