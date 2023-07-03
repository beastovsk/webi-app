'use client';

import Btn from '@/components/UI/Btn/Btn';
import {customNotification} from '@/src/helpers/customNotification';
import {Breadcrumb, Button, Form, Input, Tooltip} from 'antd';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {FC} from 'react';
import {useMutation} from 'react-query';
import {GetCode, Register, Verificate} from '../../api';
import s from './Reg.module.scss';

interface RegProps {}

export const Reg: FC<RegProps> = () => {
  const {mutate, isLoading} = useMutation(Register);
  const {mutate: get} = useMutation(GetCode);

  const router = useRouter();

  return (
    <div className={s.container}>
      <h2 className='text-5xl font-semibold'>
        <Tooltip title='Перейти на главную страницу'>
          <Link href={'/'} className='hover:opacity-70 transition-opacity'>
            Webi
          </Link>
        </Tooltip>{' '}
        <span className='text-primary-500'>Marketplace</span>
      </h2>
      <h2 className='text-3xl font-medium mt-20'>Регистрация</h2>
      <Form
        className='my-10'
        onFinish={(value) => {
          mutate(value, {
            onSuccess: () => {
              get({email: value.email});
            }
          });
        }}
      >
        <Form.Item name='username' rules={[{required: true, message: 'Введите имя пользователя'}]}>
          <Input size='large' placeholder='Имя пользователя' />
        </Form.Item>{' '}
        <Form.Item name='email' rules={[{required: true, type: 'email', message: 'Введите корректную почту'}]}>
          <Input size='large' placeholder='Email' />
        </Form.Item>
        <Form.Item name='password' rules={[{required: true, min: 4, message: 'Введите пароль более 4 символов'}]}>
          <Input.Password size='large' placeholder='Пароль' />
        </Form.Item>
        <p className='text-start text-white text-sm'>
          Есть аккаунт?{' '}
          <Link href={'/marketplace/auth'} className='text-primary-500'>
            Авторизироваться
          </Link>
        </p>
        <Btn loading={isLoading} htmlTypeButton='submit' className='mt-10'>
          Создать аккаунт
        </Btn>
      </Form>
    </div>
  );
};
