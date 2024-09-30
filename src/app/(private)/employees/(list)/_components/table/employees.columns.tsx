'use client';

import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { Button } from 'antd';
import { FiEdit2 } from 'react-icons/fi';
import { LuShieldCheck, LuShieldOff, LuArchiveRestore } from 'react-icons/lu';
import { AiTwotoneDelete, AiFillDelete } from 'react-icons/ai';

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
      minWidth: 160,
      getActions: (params) => [
        <GridActionsCellItem
          key={params.id}
          disableRipple
          disableTouchRipple
          disableFocusRipple
          className='hover: bg-transparent'
          icon={
            <Button type='dashed' size={'small'}>
              View
            </Button>
          }
          label='Details'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<FiEdit2 className='text-lg' />}
          label='Edit'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={
            params.row.is_active ? (
              <LuShieldOff className='text-lg' />
            ) : (
              <LuShieldCheck className='text-lg' />
            )
          }
          showInMenu
          label={
            params.row.is_active ? 'Suspend Employee' : 'Activate Employee'
          }
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<AiTwotoneDelete className='text-lg' />}
          showInMenu
          label='Delete'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<AiFillDelete className='text-lg' />}
          showInMenu
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
      minWidth: 160,
      getActions: (params) => [
        <GridActionsCellItem
          key={params.id}
          disableRipple
          disableTouchRipple
          disableFocusRipple
          className='hover: bg-transparent'
          icon={
            <Button type='dashed' size={'small'}>
              View
            </Button>
          }
          label='Details'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<LuArchiveRestore className='text-lg' />}
          label='Restore'
        />,
        <GridActionsCellItem
          key={params.id}
          showInMenu
          icon={<FiEdit2 className='text-lg' />}
          label='Edit'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={
            params.row.is_active ? (
              <LuShieldOff className='text-lg' />
            ) : (
              <LuShieldCheck className='text-lg' />
            )
          }
          showInMenu
          label={
            params.row.is_active ? 'Suspend Employee' : 'Activate Employee'
          }
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<AiFillDelete className='text-lg' />}
          showInMenu
          label='Permanently Delete'
        />,
      ],
    },
  ],
};

export default columns;
