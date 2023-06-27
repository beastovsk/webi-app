'use client';

import Btn from '@/components/UI/Btn/Btn';
import {customNotification} from '@/src/helpers/customNotification';
import {Button, Form, Input, Tooltip} from 'antd';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {FC} from 'react';
import {useMutation} from 'react-query';
import {Login} from '../../api';
import s from './Auth.module.scss';

interface AuthProps {}

export const Auth: FC<AuthProps> = () => {
  const {mutate} = useMutation(Login);
  const router = useRouter();

  return (
    <div className={s.container}>
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
            onSuccess: () => {
              customNotification('success', 'top', 'Успешная авторизация', '');
              router.push('/marketplace');
            },
            onError: (error) => {
              console.log(error);
              customNotification('error', 'top', 'Не удалось авторизироваться', '');
            }
          });
        }}
      >
        <Form.Item name='username'>
          <Input size='large' placeholder='Имя пользователя' />
        </Form.Item>
        <Form.Item name='password'>
          <Input.Password size='large' placeholder='Пароль' />
        </Form.Item>
        <p className='text-start text-white text-sm'>
          Нет аккаунта?{' '}
          <Link href={'/marketplace/reg'} className='text-primary-500'>
            Зарегистрироваться
          </Link>
        </p>
        <Btn htmlTypeButton='submit' className='mt-10'>
          Войти
        </Btn>
      </Form>
    </div>
  );
};
