interface Opcao {
  descricao: string;
  valor: number;
}

interface Questao {
  id: number;
  titulo: string;
  descricao: string;
  tipo: string;
  opcoes: Opcao[];
}

interface GetFormulario {
  id: number;
  nome: string;
  descricao: string;
  questao: Questao;
}