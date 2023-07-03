'use client';

import Btn from '@/components/UI/Btn/Btn';
import {Form, Input} from 'antd';
import React, {FC} from 'react';
import s from './SupportForm.module.scss';
import { useMutation } from 'react-query';
import { SendQuestion } from '../../api';

interface SupportFormProps {}

export const SupportForm: FC<SupportFormProps> = () => {
  const {mutate, isLoading} = useMutation(SendQuestion);

  const onFinish = (values: any) => {
    mutate(values);
  };

  return (
    <div className={s.container}>
      <h2 className='font-medium text-xl'>Поддержка</h2>

      <div className={s.wrapper}>
        <Form 
          layout='vertical'
          onFinish={onFinish}
        >
          <Form.Item 
            label={'Имя'}
            name={'name'}
          >
            <Input style={{background: '#131129'}} />
          </Form.Item>
          <Form.Item 
            label={'Email'}
            name={'email'}
          >
            <Input style={{background: '#131129'}} />
          </Form.Item>
          <Form.Item 
            label={'Вопрос'}
            name={'question'}
          >
            <Input style={{background: '#131129'}} />
          </Form.Item>

          <Btn 
            type='submit'
            loading={isLoading}
          >
            Отправить
          </Btn>
        </Form>
      </div>
    </div>
  );
};
