'use client';

import Btn from '@/components/UI/Btn/Btn';
import {customNotification} from '@/src/helpers/customNotification';
import {Button, Form, Input, Modal, Tooltip} from 'antd';
import {setCookie} from 'cookies-next';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {FC, useState} from 'react';
import {useMutation} from 'react-query';
import {ConfirmEmail, Login} from '../../api';
import s from './Auth.module.scss';

import {animated, useInView} from '@react-spring/web';
import {useStore} from '../../store';

interface AuthProps {}

export const Auth: FC<AuthProps> = () => {
  const {mutate: confirm, isLoading: isConfirmLoading} = useMutation(ConfirmEmail);
  const {mutate, isLoading} = useMutation(Login);
  const {openConfirmCode, setOpenConfirmCode} = useStore();
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, scale: 0.95},
      to: {opacity: 1, scale: 1}
    }),
    {rootMargin: '-20% 0%'}
  );

  const router = useRouter();

  const onFinish = async (value) => {
    mutate(value, {
      onSuccess: (data) => {
        data.json().then((data) => {
          if (!data?.message) return;

          if (data?.message === 'Аккаунт не подтвержден. Проверьте вашу почту для подтверждения регистрации') {
            setOpenConfirmCode(true);
          }

          if (data?.token) {
            router.push('/marketplace');
            localStorage.setItem('token', `Bearer ${data?.token}`);
          }

          customNotification('info', 'top', 'Информация', data?.message);
        });
      }
    });
  };

  const onConfirmFinish = (value) => {
    confirm(value, {
      onSuccess: (data) => {
        data.json().then((data) => {
          if (!data?.message) return;

          if (data?.message === 'Почта подтверждена') {
            setOpenConfirmCode(false);
          }

          if (data?.token) {
            router.push('/marketplace');
            localStorage.setItem('token', `Bearer ${data?.token}`);
          }

          customNotification('info', 'top', 'Информация', data?.message);
        });
      }
    });
  };

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

      <Form className='my-10' onFinish={onFinish}>
        <Form.Item name='email' rules={[{required: true, message: 'Введите почту пользователя'}]}>
          <Input size='large' placeholder='Почта пользователя' />
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

      <Modal open={openConfirmCode} onCancel={() => setOpenConfirmCode(false)} footer={false}>
        <Form layout='vertical' onFinish={onConfirmFinish}>
          <Form.Item className='mt-5' label='Код подтверждения' name='confirmToken'>
            <Input className='text-center text-2xl' />
          </Form.Item>

          <Btn className='mt-2 flex justify-center m-auto' htmlTypeButton='submit' loading={isConfirmLoading}>
            Отправить
          </Btn>
        </Form>
      </Modal>
    </animated.div>
  );
};
