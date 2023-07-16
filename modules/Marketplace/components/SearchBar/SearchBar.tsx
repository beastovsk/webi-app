'use client';

import Btn from '@/components/UI/Btn/Btn';
import {SearchOutlined} from '@ant-design/icons';
import {Form, Input, Select, Space} from 'antd';
import {MaskedInput} from 'antd-mask-input';
import React, {FC} from 'react';
import {useMutation} from 'react-query';
import {GetProducts} from '../../api';
import {useStore} from '../../store';
import s from './SearchBar.module.scss';

import {animated, useInView} from '@react-spring/web';

interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = ({}) => {
  const {mutate} = useMutation(GetProducts);

  const setProductsList = useStore((store) => store.setProductsList);
  const setAvailable = useStore((store) => store.setAvailable);

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <h2 className='font-medium text-xl'>Поиск по каталогу</h2>

      <Form
        initialValues={{
          query: '',
          priceFrom: '',
          priceTo: '',
          type: 0
        }}
        onFinish={(value) => {
          console.log(value);
          mutate(value, {
            onSuccess: (response) => {
              console.log(response.results);

              setAvailable(true);
              setProductsList(response.results || []);
            }
          });
        }}
        className='mt-5'
        layout='vertical'
      >
        <Form.Item name='query'>
          <Input
            placeholder='Например: лендинг страницы'
            prefix={<SearchOutlined className='text-lg cursor-pointer text-[#6C7AA0] mr-5' />}
          />
        </Form.Item>
        <Space.Compact className='gap-5 flex items-center h-[50px] md:h-max md:flex-col'>
          <Space.Compact className='md:w-full gap-5'>
            <Form.Item className='m-0 p-0 md:w-full' label='Цена от' name='priceFrom'>
              <Input placeholder='0.00' className='w-[155px] md:w-full' suffix='₽' />
            </Form.Item>
            <Form.Item className='m-0 p-0 md:w-full' label='Цена до' name='priceTo'>
              <Input placeholder='325.000' className='w-[155px] md:w-full' suffix='₽' />
            </Form.Item>
          </Space.Compact>
          <Form.Item className='m-0 p-0 md:w-full w-[300px]' label='Тип' name='type'>
            <Select
              options={[
                {label: 'Веб-сайты', value: 0},
                {label: 'Веб-приложения', value: 1},
                {label: 'Веб-модули', value: 2}
              ]}
            />
          </Form.Item>
        </Space.Compact>
        <Space.Compact className='w-full'>
          <Btn type='submit' className='mt-7 ml-auto'>
            Применить фильтры
          </Btn>
        </Space.Compact>
      </Form>
    </animated.div>
  );
};
