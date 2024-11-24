import { z } from "zod";

const createOptionSchema = z.object({
  descricao: z.string({
    required_error: "Campo obrigatório!",
  }).min(1, "Campo obrigatório!"),
  pontuacao: z.number({
    required_error: "Campo obrigatório!",
  }).min(1, "Campo obrigatório!"),
})

const createQuestionSchema = z.object({
  titulo: z.string({
    required_error: "Campo obrigatório!",
  }).min(1, "Campo obrigatório!"),
  descricao: z.string({
    required_error: "Campo obrigatório!",
  }).min(1, "Campo obrigatório!"),
  tipo: z.string({
    required_error: "Campo obrigatório!",
  }).min(1, "Campo obrigatório!"),
  opcoes:z.array(createOptionSchema),
})

export default createQuestionSchema;