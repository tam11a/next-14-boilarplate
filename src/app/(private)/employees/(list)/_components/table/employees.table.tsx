'use client';

import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
import { useLayout } from '../context/layout.store';
import columns from './employees.columns';
import { useGetEmployeeList } from '@/lib/actions/employee/list.get';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';

export default function EmployeesTable() {
  const { tab } = useLayout();
  const { data, isLoading } = useGetEmployeeList({
    // trash: tab === 'trash',
    paginate: true,
  });

  const rows: GridRowsProp = useMemo(() => data?.data?.results || [], [data]);
  const pagination: {
    count: number;
    next: string | null;
    previous: string | null;
  } = useMemo(
    () => ({
      count: data?.data?.count || 0,
      next: data?.data?.next,
      previous: data?.data?.previous,
    }),
    [data]
  );

  return (
    <div className='min-h-96 w-full'>
      <DataGrid
        className='!min-h-96 !border-slate-200'
        columns={tab === 'trash' ? columns.trash : columns.all}
        rows={rows}
        density='compact'
        rowSelection={false}
        // showCellVerticalBorder
        // showColumnVerticalBorder
        loading={isLoading}
        disableColumnSorting
        disableColumnMenu
        hideFooterSelectedRowCount
        autoHeight
        paginationMode='server'
        scrollbarSize={10}
        rowCount={pagination.count}
        classes={{
          'row--borderBottom': '!hidden',
        }}
        getRowClassName={(params) =>
          cn(
            params.indexRelativeToCurrentPage % 2 === 0
              ? 'bg-white'
              : 'bg-slate-50',
            'hover:bg-slate-100 !border-slate-100'
          )
        }
      />
    </div>
  );
}
