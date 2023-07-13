'use client';

import Btn from '@/components/UI/Btn/Btn';
import {customNotification} from '@/src/helpers/customNotification';
import {Button, Form, Input, Tooltip} from 'antd';
import {setCookie} from 'cookies-next';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {FC} from 'react';
import {useMutation} from 'react-query';
import {Login} from '../../api';
import s from './Auth.module.scss';

import {animated, useInView} from '@react-spring/web';

interface AuthProps {}

export const Auth: FC<AuthProps> = () => {
  const {mutate, isLoading} = useMutation(Login);
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, scale: 0.95},
      to: {opacity: 1, scale: 1}
    }),
    {rootMargin: '-20% 0%'}
  );

  const router = useRouter();

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <h1 className='text-5xl font-semibold'>
        <Tooltip title='Перейти на главную страницу'>
          <Link href={'/'} className='hover:opacity-70 transition-opacity'>
            Webi
          </Link>
        </Tooltip>{' '}
        <span className='text-primary-500'>Marketplace</span>
      </h1>

      <h2 className='text-3xl font-medium mt-20'>Авторизация</h2>

      <Form
        className='my-10'
        onFinish={(value) => {
          mutate(value, {
            onSuccess: (data) => {
              customNotification('success', 'top', 'Успешная авторизация', '');
              setCookie('token', data.access);
              setCookie('refreshToken', data.refresh);
              setCookie('username', value.username);
              router.push('/marketplace');
            },
            onError: (error: any) => {
              customNotification('error', 'top', 'Ошибка при авторизации', error.response.data.detail);
            }
          });
        }}
      >
        <Form.Item name='username' rules={[{required: true, message: 'Введите имя пользователя'}]}>
          <Input size='large' placeholder='Имя пользователя' />
        </Form.Item>
        <Form.Item name='password' rules={[{required: true, min: 4, message: 'Введите ваш пароль'}]}>
          <Input.Password size='large' placeholder='Пароль' />
        </Form.Item>
        <p className='text-start text-white text-sm'>
          Нет аккаунта?{' '}
          <Link href={'/marketplace/reg'} className='text-primary-500'>
            Зарегистрироваться
          </Link>
        </p>
        <Btn loading={isLoading} htmlTypeButton='submit' className='mt-10'>
          Войти
        </Btn>
      </Form>
    </animated.div>
  );
};
