import * as S from "./styles";
import { useRouter } from "next/router";

export const InfoBoxCurrentRoute = () => {
  const routeNames: Record<string, string> = {
    home: "Home",
    aboutUs: "Home > Quem Somos",
    scheduling: "Home > Agendar Consulta",
  };

  const router = useRouter();
  const currentRoute = router.pathname.split("/")[1];
  const currentRouteName = routeNames[currentRoute];

  return <S.Text>{currentRouteName}</S.Text>;
};
