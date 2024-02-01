import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Registry, container } from "@/@core/infrastructure/inversify.config";

import {
  AvailableSchedulingUseCase,
  ListPokemonsUseCase,
  ListRegionsUseCase,
} from "@/@core/use-case";

import { formatToJson } from "@/utils";

import { InfoBox } from "@/components/atoms/InfoBox";
import { SchedulingForm } from "@/components/templates/scheduling/SchedulingForm";
import { Button, ModalToast } from "@/components/atoms";
import Image from "next/image";

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
  error?: string;
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

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export const getServerSideProps = (async () => {
  try {
    const availableSchedulingUseCase =
      container.get<AvailableSchedulingUseCase>(
        Registry.AvailableSchedulingUseCase
      );
    const listPokemonsUseCase = container.get<ListPokemonsUseCase>(
      Registry.ListPokemonsUseCase
    );
    const listRegionsInfo = container.get<ListRegionsUseCase>(
      Registry.ListRegionsUseCase
    );

    const [availabilityScheduling, listPokemons, listRegions] =
      await Promise.all([
        availableSchedulingUseCase.execute(),
        listPokemonsUseCase.execute(),
        listRegionsInfo.execute(),
      ]);

    const formInfo: FormInfoProps = {
      availabilityScheduling: availabilityScheduling.toJson(),
      pokemons: formatToJson(listPokemons),
      regions: formatToJson(listRegions),
    };

    return {
      props: {
        formInfo: formInfo,
      },
    };
  } catch (error: any) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
}) satisfies GetServerSideProps<{ formInfo: FormInfoProps }>;

export default Scheduling;
