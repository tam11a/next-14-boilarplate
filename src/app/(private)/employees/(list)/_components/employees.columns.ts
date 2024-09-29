import { GridColDef } from '@mui/x-data-grid';

interface columnsInterface {
  all: GridColDef[];
  trash: GridColDef[];
}

const columns: columnsInterface = {
  all: [
    {
      field: 'col1',
      headerName: 'Column 1',
    },
    {
      field: 'col2',
      headerName: 'Column 2',
    },
  ],
  trash: [
    {
      field: 'col1',
      headerName: 'Column 1',
    },
    {
      field: 'col2',
      headerName: 'Column 2',
    },
  ],
};

export default columns;
