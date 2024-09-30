'use client';

import { stringAvatar } from '@/lib/string-avatar';
import Menu from './menu.component';
import Link from 'next/link';
import { Button } from 'antd';
import { LuSettings } from 'react-icons/lu';
import { Avatar, ListItemText } from '@mui/material';
import useUser from '@/hooks/use-user';

export default function AppDrawer() {
  const {
    user: { first_name, last_name, job_title },
  } = useUser();

  return (
    <>
      <div className='flex-1 overflow-y-auto'>
        <Menu />
      </div>
      <div
        className={
          'mb-2 flex flex-row items-center justify-between gap-3 px-3 py-2'
        }
      >
        {/* Dummy Profile UI.*/}
        <div className='flex flex-row items-center gap-4'>
          <Avatar {...stringAvatar(`${first_name} ${last_name}`)} />
          <ListItemText
            primary={`${first_name} ${last_name}`}
            secondary={job_title || 'No Role Assigned'}
            primaryTypographyProps={{
              noWrap: true,
              className: 'font-bold text-sm',
            }}
            secondaryTypographyProps={{
              noWrap: true,
              className: 'text-xs leading-tight font-semibold',
            }}
          />
        </div>

        <Link href={'/settings'}>
          <Button icon={<LuSettings />} />
        </Link>
      </div>
    </>
  );
}
