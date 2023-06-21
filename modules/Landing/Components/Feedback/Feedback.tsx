'use client';
import Btn from '@/components/UI/Btn/Btn';
import {Form, Input} from 'antd';
import React, {FC} from 'react';

import s from './Feedback.module.scss';

interface FeedbackProps {}

export const Feedback: FC<FeedbackProps> = () => {
  return (
    <div className={s.container} id='feedback'>
      <div className='mb-[40px] text-center'>
        <h1 className={s.title}>
          Остались вопросы <span className='text-primary-500 ml-2'>?</span>
        </h1>
        <p className='text-gray-500'>Заполни форму и мы пришлем ответ прямо тебе на почту в течении суток</p>
      </div>

      <div className='flex justify-center'>
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
    </div>
  );
};
