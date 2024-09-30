'use client';

import { Popconfirm } from 'antd';
import { AiFillDelete } from 'react-icons/ai';

interface PermanentDeleteButtonProps {
  id: string | number;
}

export default function PermanentDeleteButton({
  id,
}: PermanentDeleteButtonProps) {
  const confirm = async () => {
    // Perform delete action here
    console.log('Permanently Delete', id);
  };

  return (
    <Popconfirm
      title='Delete the employee permanently'
      description='Are you sure to delete this employee permanenetly?'
      onConfirm={confirm}
      okText='Yes'
      cancelText='No'
    >
      <AiFillDelete className='text-lg' />
    </Popconfirm>
  );
}
