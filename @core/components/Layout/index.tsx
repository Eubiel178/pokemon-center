import { Header, Footer } from "@/@core/components";
import { MainContainer } from "./styles";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};
