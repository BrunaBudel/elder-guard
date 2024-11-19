import { z } from "zod";

const createFormSchema = z.object({
  nome: z.string({
    required_error: "Campo obrigatório!",
  }).min(1, "Campo obrigatório!"),
  descricao: z.string({
    required_error: "Campo obrigatório!",
  }).min(1, "Campo obrigatório!"),
})