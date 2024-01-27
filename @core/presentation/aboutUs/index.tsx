import { InfoBox } from "@/@core/components/InfoBox";

export const ContentPresentation = () => {
  return (
    <section>
      <InfoBox.Root>
        <InfoBox.CurrentRoute />

        <InfoBox.Title></InfoBox.Title>

        <InfoBox.Text></InfoBox.Text>
      </InfoBox.Root>
    </section>
  );
};
