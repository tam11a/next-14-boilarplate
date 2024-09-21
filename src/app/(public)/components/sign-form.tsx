'use client';

import { Button, Card, Checkbox, Form, Input } from 'antd';
import React from 'react';

export function SignForm() {
  return (
    <>
      <div className='pb-10 text-center'>
        <h1 className='pb-1 text-2xl font-bold'>Welcome</h1>
        <p className='font-medium'>
          Sign in with your organization credentials.
        </p>
      </div>
      <Card className='shadow-md'>
        <Form layout='vertical' className='font-semibold' requiredMark={false}>
          <Form.Item<SignTypes>
            label='Username'
            name='username'
            style={{ marginBottom: '12px' }}
            rules={[{ required: true }]}
          >
            <Input placeholder='JhonDoe12' size='large' />
          </Form.Item>

          <Form.Item<SignTypes>
            label='Password'
            name='password'
            style={{ marginBottom: '12px' }}
            rules={[{ required: true }]}
          >
            <Input.Password placeholder='******' size='large' />
          </Form.Item>

          <Form.Item<SignTypes>
            name='remember'
            valuePropName='checked'
            style={{ marginBottom: '12px' }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Button
            size='large'
            type='primary'
            htmlType='submit'
            className='w-full'
          >
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
}
