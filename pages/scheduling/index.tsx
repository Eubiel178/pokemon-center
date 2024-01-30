import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import {
  SchedulingFormInterface,
  SchedulingRepository,
  SchedulingService,
} from "@/@core/domain";

import { InfoBox } from "@/components/atoms/InfoBox";
import { SchedulingForm } from "@/components/templates/scheduling/SchedulingForm";

const Scheduling = ({
  formInfo = {
    avaliableDates: [],
    avaliableTimes: [],
    regionsList: [],
    pokemonList: [],
  },
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
  const schedulingRepository = new SchedulingRepository();
  const schedulingService = new SchedulingService();

  const [avaliableDates, avaliableTimes, regionsList, pokemonList] =
    await Promise.all([
      schedulingRepository.availableDates(),
      schedulingRepository.availableTimes(),
      schedulingRepository.regionsList(),
      schedulingRepository.pokemonList(),
    ]);

  const avaliableDatesFormat = schedulingService.formatDates(
    avaliableDates?.data
  );
  const avliableTimesFormat = schedulingService.formatTimes(
    avaliableTimes?.data
  );
  const regionsListFormat = schedulingService.formatRegions(
    regionsList?.data.results
  );

  const pokemonsListFormat = schedulingService.formatPokemons(
    pokemonList.data.results
  );

  const formInfo: SchedulingFormInterface = {
    avaliableDates: avaliableDatesFormat,
    avaliableTimes: avliableTimesFormat,
    regionsList: regionsListFormat,
    pokemonList: pokemonsListFormat,
  };

  return {
    props: {
      formInfo,
    },
  };
}) satisfies GetServerSideProps<{ formInfo: SchedulingFormInterface }>;

export default Scheduling;
