import * as S from "./styles";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { schedulingSchema } from "@/validation/scheduling/schedulingSchema";

import { type FormInfoProps } from "@/pages/scheduling";

import { PersonalInfo } from "./PersonalInfo";
import { TeamRegistration } from "./TeamRegistration";
import { Information } from "./Information";

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

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          Preencha o formulário abaixo para agendar sua consulta
        </S.Title>

        <FormProvider {...methods}>
          <S.Form
            onSubmit={methods.handleSubmit((data) => {
              console.log(data);
            })}
          >
            <PersonalInfo formInfo={formInfo} />

            <TeamRegistration formInfo={formInfo} />

            <Information />
          </S.Form>
        </FormProvider>
      </S.Content>
    </S.Container>
  );
};
