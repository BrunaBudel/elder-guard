'use client'

import DataTableComponent from "@/components/DataTableComponent";
import { useLoader } from "@/context/LoaderContext";
import { api } from "@/lib/axios";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
    name: 'Tipo',
    selector: (row: { tipo: any; }) => row.tipo,
  },
  {
		name: '',
    width: '150px',
    cell: (row: { id: any; }) => (
      <div className='flex justify-end gap-2'>
        <a className='btn btn-sm btn-primary' href={`formularios/${row.id}`}>
          Iniciar
        </a>
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


export default function Formularios() {
  const {setIsLoading} = useLoader();

  const [ forms, setForms ] = useState<IForm[]>();

useEffect(() => {
  setIsLoading(true);
  api.get('/formularios').then((response) => {
    setForms(response.data);
  }).catch((error) => {
    toast.error(error.response.data.error);
  }).finally(() => {
    setIsLoading(false);
  })
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
      data={forms}
      />
    </div>
  );
}
