import * as S from "./styles";
import { Header, Footer } from "@/components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <S.MainContainer>{children}</S.MainContainer>
      <Footer />
    </>
  );
};
