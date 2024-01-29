import { object, InferType, string, array } from "yup";

export const schedulingSchema = object({
  name: string().required("Nome obrigatório"),
  surname: string().required("Sobrenome obrigatório"),
  region: string().required("Região obrigatória"),
  city: string().required("Cidade obrigatória"),
  team: array().required("Equipe obrigatória"),
  schedulingDate: string().required("Data de agendamento obrigatória"),
  schedulingHours: string().required("Hora de agendamento obrigatória"),
});
