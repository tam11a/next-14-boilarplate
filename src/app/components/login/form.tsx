'use client';

import { Button, Input } from 'antd';

const { Password } = Input;

export default function LoginForm() {
  return (
    <div className='m-4 max-w-sm space-y-3'>
      <Input placeholder='Username' size='large' />
      <Password placeholder='Password' size='large' />
      <Button type='primary' block>
        Submit
      </Button>
    </div>
  );
}
