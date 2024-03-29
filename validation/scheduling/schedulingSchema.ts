import * as yup from "yup";

export const schedulingSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  surname: yup.string().required("Sobrenome obrigatório"),
  region: yup.string().required("Região obrigatória"),
  city: yup.string().required("Cidade obrigatória"),
  scheduledDate: yup.string().required("Data de agendamento obrigatória"),
  scheduledHours: yup.string().required("Hora de agendamento obrigatória"),
  team: yup.array().of(
    yup.object({
      pokemon: yup.string().required("Preencha o campo"),
    })
  ),
});
