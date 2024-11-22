interface IForm {
  nome: string;
  descricao: string;
  tipo: string;
  ordem: number;
  questao: IQuestion[];
}