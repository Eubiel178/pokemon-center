import * as S from "./styles";

import Image from "next/image";
import { toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { schedulingSchema } from "@/validation/scheduling/schedulingSchema";

import { PersonalInfo } from "./PersonalInfo";
import { TeamRegistration } from "./TeamRegistration";
import { Availability } from "./Availability";
import { Information } from "./Information";

import { type FormInfoProps } from "@/pages/scheduling";
import { Button, ModalToast } from "@/components/atoms";

export type FormData = InferType<typeof schedulingSchema>;

export const SchedulingForm = ({ formInfo }: { formInfo: FormInfoProps }) => {
  const methods = useForm<FormData>({
    resolver: yupResolver(schedulingSchema),
    defaultValues: {
      name: "",
      surname: "",
      region: "",
      city: "",
      team: [{ pokemon: "" }],
      scheduledDate: "",
      scheduledHours: "",
    },
  });

  const handleOnSubmit = (data: FormData) => {
    try {
      methods.reset();

      toast(
        <ModalToast.Root>
          <ModalToast.Title>Agendamento concluído</ModalToast.Title>

          <ModalToast.Text>
            Seu agendamento para dia {data.scheduledDate} às{" "}
            {data.scheduledHours}, para {data.team?.length} pokémon foi
            realizado com sucesso!
          </ModalToast.Text>

          <Image src="/check.svg" alt="success" width={41} height={41} />

          <Button>Fazer Novo Agendamento</Button>
        </ModalToast.Root>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } catch (error: any) {
      toast(
        <ModalToast.Root>
          <ModalToast.Title>Houve um problema no agendamento</ModalToast.Title>

          <ModalToast.Text>{error?.message}</ModalToast.Text>

          <Image src="/warning.svg" alt="warning" width={41} height={41} />

          <Button
            onClick={() => {
              methods.reset();
              toast.dismiss();
            }}
          >
            Fazer Novo Agendamento
          </Button>
        </ModalToast.Root>,
        {
          position: "top-center",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          Preencha o formulário abaixo para agendar sua consulta
        </S.Title>

        <FormProvider {...methods}>
          <S.Form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <PersonalInfo formInfo={formInfo} />

            <TeamRegistration formInfo={formInfo} />

            <Availability formInfo={formInfo} />

            <Information />
          </S.Form>
        </FormProvider>
      </S.Content>
    </S.Container>
  );
};

SchedulingForm.displayName = "SchedulingForm";
