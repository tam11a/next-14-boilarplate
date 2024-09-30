import { Button } from 'antd';
import { MdOutlineFileUpload } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';

export default function CreateToolbar() {
  return (
    <div className='flex w-full flex-row items-center justify-end gap-2'>
      <Button type='dashed' icon={<MdOutlineFileUpload />}>
        Import
      </Button>
      <Button type='dashed' icon={<IoIosAdd />}>
        Create
      </Button>
    </div>
  );
}
