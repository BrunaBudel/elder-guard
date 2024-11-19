import DataTable from 'react-data-table-component';

interface IDataTableProps {
  columns: any;
  data: any;
}

const customStyles = {
	headCells: {
		style: {
			backgroundColor: '#749D1C',
      color: '#fff',
		},
	},
};

const DataTableComponent: React.FC<IDataTableProps> = ({
  columns,
  data,
}) => {
  return (
    <DataTable
			columns={columns}
			data={data}
      customStyles={customStyles}
		  />
  )
}

export default DataTableComponent;