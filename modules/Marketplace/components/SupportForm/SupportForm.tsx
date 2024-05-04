'use client';

import Btn from '@/components/UI/Btn/Btn';
import {Form, Input} from 'antd';
import React, {FC} from 'react';
import s from './SupportForm.module.scss';
import {useMutation} from 'react-query';
import Link from 'next/link';

interface SupportFormProps {}

export const SupportForm: FC<SupportFormProps> = () => {
  return (
    <div className={s.container}>
      {/* <div className='flex-grow'>
        <h2 className='font-medium text-xl'>Поддержка</h2>

        <div className={s.wrapper}>
          <Form layout='vertical' onFinish={onFinish}>
            <Form.Item label={'Имя'} name={'name'} rules={[{required: true, message: 'Вы пропустили имя!'}]}>
              <Input style={{background: '#131129'}} />
            </Form.Item>
            <Form.Item label={'Email'} name={'email'} rules={[{required: true, message: 'Введите Email!'}]}>
              <Input style={{background: '#131129'}} />
            </Form.Item>
            <Form.Item
              label={'Вопрос'}
              name={'question'}
              rules={[{required: true, message: 'Поле с вопросом осталось пустым!'}]}
            >
              <Input style={{background: '#131129'}} />
            </Form.Item>

            <Btn type='submit' loading={isLoading}>
              Отправить
            </Btn>
          </Form>
        </div>
      </div> */}
      <div className='flex-grow'>
        <h2 className='font-medium text-xl mb-[30px]'>Связаться напрямую</h2>
        <Link href='https://t.me/beastovsk' target='_blank'>
          <Btn>Телеграм</Btn>
        </Link>
      </div>
    </div>
  );
};
