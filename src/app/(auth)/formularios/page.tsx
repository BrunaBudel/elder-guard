'use client'

import DataTableComponent from "@/components/DataTableComponent";

const columns = [
	{
		name: 'Nome',
		selector: (row: { nome: any; }) => row.nome,
    sortable: true,
	},
	{
		name: 'Descrição',
		selector: (row: { descricao: any; }) => row.descricao,
	},
  {
		name: '',
    width: '150px',
    cell: (row: { id: any; }) => (
      <div className='flex justify-end gap-2'>
        <button className='btn btn-sm btn-accent'>
          Iniciar
        </button>
        <button className='btn btn-sm btn-secondary'>
          Editar
        </button>
        <button className='btn btn-sm btn-error'>
          Excluir
        </button>
      </div>
      )
	},
];

const data = [
  {
		id: 1,
		nome: 'Formulário 1',
		descricao: 'Descrição do Formulário 1',
	},
	{
		id: 2,
		nome: 'Formulário 2',
		descricao: 'Descrição do Formulário 2',
	},
]

export default function Formularios() {
  return (
    <div className=" h-screen text-primary-content p-8 mt-2">
      <p className="text-xl mb-2">
        Listando Formulários
      </p>
      <div className='mb-4 flex justify-between items-center'>
        <label className="input input-bordered flex items-center gap-2 ">
          <input type="text" className="grow" placeholder="Pesquisar" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
        <a href="formularios/criar" className='btn btn-accent'>
          Adicionar Formulários
        </a>
      </div>
      <DataTableComponent
      columns={columns}
      data={data}
      />
    </div>
  );
}
