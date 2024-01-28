import { useRouter } from "next/router";
import { Text } from "./styles";

export const InfoBoxCurrentRoute = () => {
  const routeNames: Record<string, string> = {
    home: "Home",
    aboutUs: "Home > Quem Somos",
    scheduleAppointment: "Home > Agendar Consulta",
  };

  const router = useRouter();
  const currentRoute = router.pathname.split("/")[1];
  const currentRouteName = routeNames[currentRoute];

  return <Text>{currentRouteName}</Text>;
};
