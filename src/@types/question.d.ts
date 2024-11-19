interface IQuestion {
  titulo: string;
  descricao: string;
  tipo: 'texto' | 'opcoes' | 'upload';
  opcoes?: IOption[];
}

interface IOption {
  descricao: string;
  pontuacao: number;
}