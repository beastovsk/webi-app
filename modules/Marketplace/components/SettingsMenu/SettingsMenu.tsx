'use client';

import Btn from '@/components/UI/Btn/Btn';
import {Form, Input, Modal} from 'antd';
import React, {FC, SetStateAction, useState} from 'react';
import s from './SettingsMenu.module.scss';
import OtpInput from 'react-otp-input';
import {useMutation} from 'react-query';
import {ChangeEmail, ChangePassword} from '../../api';

import {animated, useInView} from '@react-spring/web';
import {customNotification} from '@/src/helpers/customNotification';

interface SettingsMenuProps {}

interface IPasswordForm {
  email: string;
  currentPassword: string;
  newPassword: string;
}

export const SettingsMenu: FC<SettingsMenuProps> = () => {
  const {mutate: changeEmail} = useMutation(ChangeEmail);
  const {mutate: changePassword} = useMutation(ChangePassword);
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const onChangePassword = (value) => {
    changePassword(value, {
      onSuccess: (data) => {
        data.json().then((data) => {
          if (!data?.message) return;

          customNotification('info', 'top', 'Информация', data?.message);
        });
      }
    });
  };

  const onChangeEmail = (value) => {
    changeEmail(value, {
      onSuccess: (data) => {
        data.json().then((data) => {
          if (!data?.message) return;

          customNotification('info', 'top', 'Информация', data?.message);
        });
      }
    });
  };

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <div className='w-full'>
        <h2 className='text-xl font-medium'>Изменить пароль</h2>
        <Form className={s.item} layout='vertical' onFinish={onChangePassword}>
          <Form.Item
            name='currentPassword'
            label='Текущий пароль'
            rules={[{required: true, min: 4, message: 'Введите ваш пароль'}]}
          >
            <Input.Password style={{background: '#131129'}} />
          </Form.Item>
          <Form.Item
            name='password'
            label='Новый пароль'
            rules={[{required: true, min: 4, message: 'Введите ваш новый пароль'}]}
          >
            <Input.Password style={{background: '#131129'}} />
          </Form.Item>

          <Btn htmlTypeButton='submit'>Сохранить</Btn>
        </Form>
      </div>

      <div className='w-full'>
        <h2 className='text-xl font-medium'>Изменить email</h2>
        <Form className={s.item} layout='vertical' onFinish={onChangePassword}>
          <Form.Item
            name='currentEmail'
            label='Текущая почта'
            rules={[{required: true, min: 4, message: 'Введите вашу почту'}]}
          >
            <Input style={{background: '#131129'}} />
          </Form.Item>
          <Form.Item
            name='email'
            label='Новая почта'
            rules={[{required: true, min: 4, message: 'Введите вашу новую почту'}]}
          >
            <Input style={{background: '#131129'}} />
          </Form.Item>
          <Form.Item
            name='password'
            label='Текущий пароль'
            rules={[{required: true, min: 4, message: 'Введите ваш пароль'}]}
          >
            <Input.Password style={{background: '#131129'}} />
          </Form.Item>

          <Btn htmlTypeButton='submit'>Сохранить</Btn>
        </Form>
      </div>
    </animated.div>
  );
};
