import type { AppProps } from "next/app";

import { GlobalStyle } from "../styles/GlobalStyle";
import { Layout } from "@/components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles/Theme";

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
