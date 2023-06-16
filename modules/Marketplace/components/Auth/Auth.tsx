'use client';

import Btn from '@/components/UI/Btn/Btn';
import {Button, Form, Input} from 'antd';
import Link from 'next/link';
import React, {FC} from 'react';
import s from './Auth.module.scss';

interface AuthProps {}

export const Auth: FC<AuthProps> = () => {
  return (
    <div className={s.container}>
      <h1 className='text-5xl font-semibold'>
        Webi <span className='text-primary-500'>Marketplace</span>
      </h1>

      <h2 className='text-3xl font-medium mt-20'>Авторизация</h2>

      <Form className='my-10'>
        <Form.Item name='email'>
          <Input size='large' placeholder='Email' />
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
