'use client';

import React from 'react';
import { Button, Card, Checkbox, Form, Input, message } from 'antd';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCookies } from 'next-client-cookies';
import { useLogin } from '@/lib/actions/auth/sign-in';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth.service';
import handleResponse from '@/lib/handle-response';

// Form Schema
const formSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: 'Username must be at least 6 characters.',
    })
    .max(155, {
      message: 'Username must be at most 155 characters.',
    }),
  password: z.string().min(4, {
    message: 'Password must be at least 6 characters.',
  }),
});

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
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  console.log(errors);
  // Form Hook

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Clearing errors
    // message.open({
    //   type: 'loading',
    //   content: 'Logging in..',
    //   duration: 0,
    // });
    // Making the request
    // const res = await handleResponse(() => login(values));
    // if (res.status) {
    //   // Setting cookies
    //   authService.setToken(res.data.access);
    //   cookies.set('refresh_token', res.data.access);
    //   // Generating Toast
    //   message.destroy();
    //   if (res.status) {
    //     reset();
    //     message.success(res.message);
    //   } else {
    //     message.error(res.message);
    //   }
    //   // Redirect to dashboard
    //   router.refresh();
    // }
    router.push('/dashboard');
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
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Form
          layout='vertical'
          className='font-semibold'
          requiredMark={false}
          onSubmitCapture={handleSubmit(onSubmit)}
        >
          <Controller
            control={control}
            name={'username'}
            rules={{ required: true }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Form.Item<SignTypes>
                  label='Username'
                  name='username'
                  style={{ marginBottom: '12px' }}
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder='JhonDoe12'
                    size='large'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    status={error ? 'error' : ''}
                  />
                </Form.Item>
              </>
            )}
          />
          <Controller
            control={control}
            name={'password'}
            rules={{ required: true }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Form.Item<SignTypes>
                  label='Password'
                  name='password'
                  style={{ marginBottom: '12px' }}
                  rules={[{ required: true }]}
                >
                  <Input.Password
                    placeholder='******'
                    size='large'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    status={error ? 'error' : ''}
                  />
                </Form.Item>
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
        {/* </form> */}
      </Card>
    </>
  );
}
