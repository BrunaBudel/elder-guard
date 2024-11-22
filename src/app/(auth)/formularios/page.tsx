'use client'

import DataTableComponent from "@/components/DataTableComponent";
import { api } from "@/lib/axios";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

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
        <button className='btn btn-sm btn-primary'>
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

useEffect(() => {
  api.get('/formularios')
}, []);

  return (
    <div className="bg-gray-200 p-8 ">
      <div className='mb-4 flex justify-between items-center'>
        <p className="text-xl mb-2">
          Listando Formulários
        </p>
        <a href="formularios/criar" className='btn btn-primary'>
          <FontAwesomeIcon icon={faPlus} />
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
