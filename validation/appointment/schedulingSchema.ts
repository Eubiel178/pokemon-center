import * as yup from "yup";

export const schedulingSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  surname: yup.string().required("Sobrenome obrigatório"),
  region: yup.string().required("Região obrigatória"),
  city: yup.string().required("Cidade obrigatória"),
  team: yup.array().required("Equipe obrigatória"),
  schedulingDate: yup.string().required("Data de agendamento obrigatória"),
  schedulingHours: yup.string().required("Hora de agendamento obrigatória"),
});
