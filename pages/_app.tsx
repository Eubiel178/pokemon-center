import type { AppProps } from "next/app";

import { GlobalStyle } from "../styles/GlobalStyle";
import { Layout } from "@/components";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
