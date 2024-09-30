import { Button } from 'antd';
import { MdOutlineFileUpload } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';
import Link from 'next/link';

export default function CreateToolbar() {
  return (
    <div className='flex w-full flex-row items-center justify-end gap-2'>
      <Button type='dashed' disabled icon={<MdOutlineFileUpload />}>
        Import
      </Button>
      <Link href='/employees/create'>
        <Button type='dashed' icon={<IoIosAdd />}>
          Create
        </Button>
      </Link>
    </div>
  );
}
