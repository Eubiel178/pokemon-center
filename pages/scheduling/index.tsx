import "reflect-metadata";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import { Registry, container } from "@/@core/Infrastructure/inversify.config";

import {
  AvailableSchedulingUseCase,
  ListPokemonsUseCase,
  ListRegionUseCase,
} from "@/@core/use case";

import { InfoBox } from "@/components/atoms/InfoBox";
import { SchedulingForm } from "@/components/templates/scheduling/SchedulingForm";

type FormItem = {
  name: string;
  id: string;
};

export interface FormInfoProps {
  availabilityScheduling: {
    date: string[];
    time: string[];
  };
  pokemons: FormItem[];
  regions: FormItem[];
}

const Scheduling = ({
  formInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <InfoBox.Root>
        <InfoBox.CurrentRoute />
        <InfoBox.Title>Agendar Consulta</InfoBox.Title>
        <InfoBox.Text>Recupere seus pokémons em 5 segundos</InfoBox.Text>
      </InfoBox.Root>

      <SchedulingForm formInfo={formInfo} />
    </>
  );
};

export const getServerSideProps = (async () => {
  const availabilitySchedulingUseCase =
    container.get<AvailableSchedulingUseCase>(
      Registry.AvailableSchedulingUseCase
    );
  const listPokemonsUseCase = container.get<ListPokemonsUseCase>(
    Registry.ListPokemonsUseCase
  );
  const listRegionUseCase = container.get<ListRegionUseCase>(
    Registry.ListRegionUseCase
  );

  const [availabilityScheduling, listPokemons, listRegion] = await Promise.all([
    availabilitySchedulingUseCase.execute(),
    listPokemonsUseCase.execute(),
    listRegionUseCase.execute(),
  ]);
  console.log(availabilityScheduling);

  const formInfo: FormInfoProps = {
    availabilityScheduling: availabilityScheduling.props,
    pokemons: listPokemons,
    regions: listRegion,
  };

  return {
    props: {
      formInfo: formInfo,
    },
  };
}) satisfies GetServerSideProps<{ formInfo: FormInfoProps }>;

export default Scheduling;
