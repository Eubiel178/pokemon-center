import { Header } from "@/@core/components/Header";
import { MainContainer } from "./styles";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <MainContainer>{children}</MainContainer>
    </>
  );
};
