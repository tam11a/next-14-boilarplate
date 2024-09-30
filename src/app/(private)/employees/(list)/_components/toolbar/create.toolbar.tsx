import { Button } from 'antd';
import { MdOutlineFileUpload } from 'react-icons/md';
import { IoIosAdd } from 'react-icons/io';

export default function CreateToolbar() {
  return (
    <div className='flex flex-row items-center justify-center gap-2'>
      <Button type='dashed' icon={<MdOutlineFileUpload />}>
        Import from CSV
      </Button>
      <Button type='dashed' icon={<IoIosAdd />}>
        Create Employee
      </Button>
    </div>
  );
}
