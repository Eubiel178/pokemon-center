import "reflect-metadata";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";

import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles/Theme";

import { Layout } from "@/components/templates/layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
