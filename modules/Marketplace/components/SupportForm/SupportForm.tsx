'use client';

import Btn from '@/components/UI/Btn/Btn';
import {Form, Input} from 'antd';
import React, {FC} from 'react';
import s from './SupportForm.module.scss';

interface SupportFormProps {}

export const SupportForm: FC<SupportFormProps> = () => {
  return (
    <div className={s.container}>
      <h2 className='font-medium text-xl'>Поддержка</h2>

      <div className={s.wrapper}>
        <Form layout='vertical'>
          <Form.Item label={'Имя'}>
            <Input style={{background: '#131129'}} />
          </Form.Item>
          <Form.Item label={'Email'}>
            <Input style={{background: '#131129'}} />
          </Form.Item>
          <Form.Item label={'Вопрос'}>
            <Input style={{background: '#131129'}} />
          </Form.Item>

          <Btn type='submit'>Отправить</Btn>
        </Form>
      </div>
    </div>
  );
};
