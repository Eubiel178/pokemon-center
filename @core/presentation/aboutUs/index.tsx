import { InfoBox } from "@/@core/components/InfoBox";
import { CardList } from "./CardList";

export const AboutUsPresentation = () => {
  return (
    <section>
      <InfoBox.Root>
        <InfoBox.CurrentRoute />

        <InfoBox.Title>Quem Somos</InfoBox.Title>

        <InfoBox.Text>A maior rede de tratamento pokémon</InfoBox.Text>
      </InfoBox.Root>

      <CardList />
    </section>
  );
};
