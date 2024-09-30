'use client';

import { Popconfirm } from 'antd';
import { LuArchiveRestore } from 'react-icons/lu';

interface RestoreButtonProps {
  id: string | number;
}

export default function RestoreButton({ id }: RestoreButtonProps) {
  const confirm = async () => {
    // Perform delete action here
    console.log('Restore', id);
  };

  return (
    <Popconfirm
      title='Restore the employee'
      description='Are you sure to retore this employee?'
      onConfirm={confirm}
      okText='Yes'
      cancelText='No'
    >
      <LuArchiveRestore className='text-lg' />
    </Popconfirm>
  );
}
