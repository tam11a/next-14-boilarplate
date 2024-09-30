import Image from 'next/image';
import { stringAvatar } from '@/lib/string-avatar';
import Menu from './menu.component';
import Link from 'next/link';
import { Button } from 'antd';
import { LuSettings } from 'react-icons/lu';
import { ListItemText } from '@mui/material';
// import Link from 'next/link';
// import { Button } from 'antd';

export default function AppDrawer() {
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
          <Image
            src='/dummyprofile.jpg'
            alt='user profile picture'
            width={56}
            height={56}
            className='rounded-lg'
          />
          <div>
            <h1 className='text-base font-bold'>Abdus Satter</h1>
            <p className='text-sm font-medium leading-tight'>Frontend Dev</p>
          </div>
        </div>

        {/* <ListItemText
          primary={`${'first_name'} ${'last_name'}`}
          secondary={
            role ?
           ( <>
              {role?.name} <br />
                {role?.id}
                {role?.name?.[0]}-{id}
            </>)
            : (
              'No Role Assigned'
            )
          }
          primaryTypographyProps={{
            noWrap: true,
            className: 'font-bold text-sm',
          }}
          secondaryTypographyProps={{
            noWrap: true,
            className: 'text-xs leading-tight font-semibold',
          }}
        /> */}
        <Link href={'/settings'}>
          <Button>
            <LuSettings />
          </Button>
        </Link>
      </div>
    </>
  );
}
