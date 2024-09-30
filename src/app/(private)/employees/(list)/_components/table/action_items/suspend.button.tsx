'use client';

import { Popconfirm } from 'antd';
import { LuShieldCheck, LuShieldOff } from 'react-icons/lu';

interface SuspendButtonProps {
  id: string | number;
  is_active: boolean;
}

export default function SuspendButton({ id, is_active }: SuspendButtonProps) {
  const confirm = async () => {
    // Perform delete action here
    console.log(is_active ? 'Suspend:' : 'Activate:', id, {
      is_active: !is_active,
    });
  };

  return (
    <Popconfirm
      title={is_active ? 'Suspend the employee' : 'Activate the employee'}
      description={
        is_active
          ? 'Are you sure to suspend this employee?'
          : 'Are you sure to activate this employee?'
      }
      onConfirm={confirm}
      okText='Yes'
      cancelText='No'
    >
      {is_active ? (
        <LuShieldOff className='text-lg' />
      ) : (
        <LuShieldCheck className='text-lg' />
      )}
    </Popconfirm>
  );
}
