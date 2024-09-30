'use client';

import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
import { useLayout } from '../context/layout.store';
import columns from './employees.columns';
import { useGetEmployeeList } from '@/lib/actions/employee/list.get';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function EmployeesTable() {
  const router = useRouter();
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
        loading={isLoading}
        disableColumnSorting
        disableColumnMenu
        disableRowSelectionOnClick
        hideFooterSelectedRowCount
        autoHeight
        paginationMode='server'
        scrollbarSize={10}
        rowCount={pagination.count}
        onRowDoubleClick={(row) => router.push(`/employees/${row.id}`)}
        classes={{
          'row--borderBottom': '!hidden',
        }}
        getRowClassName={(params) =>
          cn(
            params.indexRelativeToCurrentPage % 2 !== 0
              ? 'bg-white'
              : 'bg-slate-100',
            'hover:bg-slate-50'
          )
        }
      />
    </div>
  );
}
