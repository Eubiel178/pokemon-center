import { InfoBox } from "@/components/atoms/infoBox";
import { CardList } from "./cardList";

export const AboutUsTemplate = () => {
  return (
    <>
      <InfoBox.Root>
        <InfoBox.CurrentRoute />

        <InfoBox.Title>Quem Somos</InfoBox.Title>

        <InfoBox.Text>A maior rede de tratamento pokémon</InfoBox.Text>
      </InfoBox.Root>

      <CardList />
    </>
  );
};
