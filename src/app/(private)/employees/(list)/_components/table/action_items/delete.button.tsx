'use client';

import { Popconfirm } from 'antd';
import { AiTwotoneDelete } from 'react-icons/ai';

interface DeleteButtonProps {
  id: string | number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const confirm = async () => {
    // Perform delete action here
    console.log('Delete', id);
  };

  return (
    <Popconfirm
      title='Delete the employee'
      description='Are you sure to delete this employee?'
      onConfirm={confirm}
      okText='Yes'
      cancelText='No'
    >
      <AiTwotoneDelete className='text-lg' />
    </Popconfirm>
  );
}
