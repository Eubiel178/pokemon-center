import { InfoBox } from "@/@core/components/InfoBox";
import { Form } from "./Form";

export const ScheduleAppointmentPresentation = () => {
  return (
    <section>
      <InfoBox.Root>
        <InfoBox.CurrentRoute />

        <InfoBox.Title>Agendar Consulta</InfoBox.Title>

        <InfoBox.Text>Recupere seus pokémons em 5 segundos</InfoBox.Text>
      </InfoBox.Root>

      <Form />
    </section>
  );
};
