'use client';

import React from 'react';
import { Button, Card, Form, Input, message } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCookies } from 'next-client-cookies';
import { useLogin } from '@/lib/actions/auth/sign-in';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth.service';
import handleResponse from '@/lib/handle-response';
const { Item, ErrorList } = Form;
// Form Schema
import schema, { FormValues } from './signin.schema';

export function SignForm() {
  // Cookies Hook
  const cookies = useCookies();

  // Router Hook
  const router = useRouter();

  // Login Hook
  const { mutateAsync: login, isPending } = useLogin();

  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  console.log(errors);
  // Form Hook

  async function onSubmit(values: FormValues) {
    // Clearing errors
    message.open({
      type: 'loading',
      content: 'Logging in..',
      duration: 0,
    });

    // Making the request
    const res = await handleResponse(() => login(values));

    if (res.status) {
      // Setting cookies

      authService.setToken(res.data.access);
      cookies.set('refresh_token', res.data.access);

      // Generating Toast
      message.destroy();
      if (res.status) {
        reset();
        message.success(res.message);
      } else {
        message.error(res.message);
      }
      // Redirect to dashboard
      router.refresh();
    }
  }
  return (
    <>
      <div className='pb-10 text-center'>
        <h1 className='pb-1 text-2xl font-bold'>Welcome</h1>
        <p className='font-medium'>
          Sign in with your organization credentials.
        </p>
      </div>
      <Card className='shadow-md'>
        <Form
          layout='vertical'
          className='font-semibold'
          requiredMark={false}
          onSubmitCapture={handleSubmit(onSubmit)}
        >
          <Controller
            control={control}
            name={'username'}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label='Username'
                  style={{ marginBottom: '12px' }}
                >
                  <Item name='username' noStyle>
                    <Input
                      placeholder='JhonDoe12'
                      size='large'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? 'error' : ''}
                    />
                  </Item>
                  <ErrorList
                    className='text-red-500'
                    fieldId='username'
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />
          <Controller
            control={control}
            name={'password'}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Item<FormValues>
                  label='Password'
                  style={{ marginBottom: '12px' }}
                >
                  <Item name='password' noStyle>
                    <Input.Password
                      placeholder='******'
                      size='large'
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      status={error ? 'error' : ''}
                    />
                  </Item>
                  <ErrorList
                    className='text-red-500'
                    fieldId='password'
                    errors={[error?.message]}
                  />
                </Item>
              </>
            )}
          />
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
