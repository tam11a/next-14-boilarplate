'use client';

import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
import { useLayout } from '../layout.store';
import columns from './employees.columns';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

export default function EmployeesTable() {
  const { tab } = useLayout();
  return (
    <div className='m-4'>
      <DataGrid
        columns={tab === 'trash' ? columns.trash : columns.all}
        rows={rows}
        density='compact'
        rowSelection={false}
        showCellVerticalBorder={true}
        showColumnVerticalBorder={true}
      />
    </div>
  );
}
