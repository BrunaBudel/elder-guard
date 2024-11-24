import { z } from "zod";
import createQuestionSchema from "./createQuestion";

const createFormSchema = z.object({
  nome: z.string({
    required_error: "Campo obrigatório!",
  }).min(1, "Campo obrigatório!"),
  descricao: z.string({
    required_error: "Campo obrigatório!",
  }).min(1, "Campo obrigatório!"),
  tipo: z.string({
    required_error: "Campo obrigatório!",
  }).min(1, "Campo obrigatório!"),
  questao: z.array(createQuestionSchema)
})