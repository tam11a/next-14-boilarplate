'use client';

import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { Button } from 'antd';
import { FiEdit2 } from 'react-icons/fi';
import Link from 'next/link';
import DeleteButton from './action_items/delete.button';
import RestoreButton from './action_items/restore.button';
import PermanentDeleteButton from './action_items/permanent_delete.button';
import SuspendButton from './action_items/suspend.button';

interface columnsInterface {
  all: GridColDef[];
  trash: GridColDef[];
}

const commonColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    description: "Employee's ID",
    headerAlign: 'center',
    align: 'center',
    width: 50,
    flex: 1,
  },
  {
    headerName: 'Full Name',
    headerAlign: 'center',
    field: 'first_name',
    align: 'center',
    minWidth: 200,
    flex: 1,
    valueGetter(params, row) {
      return [params, row?.last_name].join(' ') || '-';
    },
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    description: "Employee's Mobile Number",
    headerAlign: 'center',
    align: 'center',
    minWidth: 200,
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'Email',
    description: "Employee's Email",
    headerAlign: 'center',
    align: 'center',
    minWidth: 200,
    flex: 1,
  },
  {
    field: 'placement',
    headerName: 'Placement',
    description: "Employee's Placement",
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'job_title',
    headerName: 'Job Title',
    description: "Employee's Job Title",
    headerAlign: 'center',
    align: 'center',
    minWidth: 150,
  },
  {
    field: 'address',
    headerName: 'Address',
    description: "Employee's Address",
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'district',
    headerName: 'District',
    description: "Employee's District",
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'joining_date',
    headerName: 'Joining Date',
    description: "Employee's Joining Date",
    headerAlign: 'center',
    align: 'center',
    minWidth: 150,
  },
];

const columns: columnsInterface = {
  all: [
    ...commonColumns,
    {
      field: 'actions',
      type: 'actions',
      flex: 1,
      minWidth: 250,
      getActions: (params) => [
        <GridActionsCellItem
          key={params.id}
          disableRipple
          disableTouchRipple
          disableFocusRipple
          className='hover: bg-transparent'
          icon={
            <Link href={`/employees/i/${params.id}`}>
              <Button type='dashed' size={'small'}>
                View
              </Button>
            </Link>
          }
          label='Details'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={
            <Link href={`/employees/i/${params.id}/edit`}>
              <FiEdit2 className='text-lg' />
            </Link>
          }
          label='Edit'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<DeleteButton id={params.id} />}
          label='Delete'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={
            <SuspendButton id={params.id} is_active={params.row.is_active} />
          }
          label={
            params.row.is_active ? 'Suspend Employee' : 'Activate Employee'
          }
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<PermanentDeleteButton id={params.id} />}
          label='Permanently Delete'
        />,
      ],
    },
  ],
  trash: [
    ...commonColumns,
    {
      field: 'actions',
      type: 'actions',
      flex: 1,
      minWidth: 250,
      getActions: (params) => [
        <GridActionsCellItem
          key={params.id}
          disableRipple
          disableTouchRipple
          disableFocusRipple
          className='hover: bg-transparent'
          icon={
            <Link href={`/employees/i/${params.id}`}>
              <Button type='dashed' size={'small'}>
                View
              </Button>
            </Link>
          }
          label='Details'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={
            <Link href={`/employees/i/${params.id}/edit`}>
              <FiEdit2 className='text-lg' />
            </Link>
          }
          label='Edit'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<RestoreButton id={params.id} />}
          label='Restore'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={
            <SuspendButton id={params.id} is_active={params.row.is_active} />
          }
          label={
            params.row.is_active ? 'Suspend Employee' : 'Activate Employee'
          }
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<PermanentDeleteButton id={params.id} />}
          label='Permanently Delete'
        />,
      ],
    },
  ],
};

export default columns;
