'use client';
import Btn from '@/components/UI/Btn/Btn';
import {Form, Input} from 'antd';
import React, {FC} from 'react';

import s from './Feedback.module.scss';
import {useMutation} from 'react-query';
import {SendQuestion} from '@/modules/Marketplace/api';
import {animated, useInView} from '@react-spring/web';

interface FeedbackProps {}

export const Feedback: FC<FeedbackProps> = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0, scale: 0.95, y: 40},
      to: {opacity: 1, scale: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const {mutate, isLoading} = useMutation(SendQuestion);

  const onFinish = (values: any) => {
    mutate(values);
  };

  return (
    <animated.div ref={ref} style={springs} className={s.container} id='feedback'>
      <div className='mb-[40px] text-center'>
        <h1 className={s.title}>
          Остались вопросы или нужна помощь по маркетплейсу <span className='text-primary-500 ml-2'>?</span>
        </h1>
        <p className='text-gray-500'>Заполните форму ниже и мы свяжемся с вами</p>
      </div>

      <div className='flex justify-center'>
        <div className={s.wrapper}>
          <Form layout='vertical' onFinish={onFinish}>
            <Form.Item label={'Имя'} name={'name'} rules={[{required: true, message: 'Вы пропустили имя!'}]}>
              <Input style={{background: '#131129'}} size='large' />
            </Form.Item>
            <Form.Item label={'Email'} name={'email'} rules={[{required: true, message: 'Введите Email!'}]}>
              <Input style={{background: '#131129'}} size='large' />
            </Form.Item>
            <Form.Item
              label={'Вопрос'}
              name={'question'}
              rules={[{required: true, message: 'Поле с вопросом осталось пустым!'}]}
            >
              <Input.TextArea
                style={{background: '#131129', color: '#fff'}}
                autoSize={{minRows: 3, maxRows: 3}}
                size='large'
              />
            </Form.Item>

            <Btn type='submit' loading={isLoading}>
              Отправить
            </Btn>
          </Form>
        </div>
      </div>
    </animated.div>
  );
};
