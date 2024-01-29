import { InfoBox } from "@/components/atoms/InfoBox";
import { FormPresentation } from "./Form";

export const ScheduleAppointmentPresentation = () => {
  return (
    <>
      <InfoBox.Root>
        <InfoBox.CurrentRoute />

        <InfoBox.Title>Agendar Consulta</InfoBox.Title>

        <InfoBox.Text>Recupere seus pokémons em 5 segundos</InfoBox.Text>
      </InfoBox.Root>

      <FormPresentation />
    </>
  );
};
