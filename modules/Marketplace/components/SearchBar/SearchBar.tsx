'use client';

import Btn from '@/components/UI/Btn/Btn';
import {SearchOutlined} from '@ant-design/icons';
import {Input, Select} from 'antd';
import React, {FC} from 'react';
import s from './SearchBar.module.scss';

interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = ({}) => {
  return (
    <div className={s.container}>
      <h2 className='font-medium text-xl'>Поиск по каталогу</h2>

      <div className='mt-5'>
        <div className='flex gap-3 md:flex-col'>
          <Input
            placeholder='Например: лендинг страницы'
            prefix={<SearchOutlined className='text-lg cursor-pointer text-[#6C7AA0] mr-5' />}
          />
          <Btn>Поиск</Btn>
        </div>
        <div className='flex gap-10 mt-5 md:flex-col md:gap-5'>
          <div className='w-1/3 md:w-full'>
            <h3>Цена</h3>
            <div className='flex gap-5 items-center mt-3'>
              <Input placeholder='От' /> <div className='bg-white w-10 h-[2px] rounded-3xl'></div>
              <Input placeholder='До' />
            </div>
          </div>
          {/* <div className='w-1/3 md:w-full'>
            <h3>Цвет</h3>
            <div className='flex gap-10 items-center mt-3'>
              <Select style={{width: '100%'}} />
            </div>
          </div> */}
          <div className='w-1/3 md:w-full'>
            <h3>Тип</h3>
            <div className='flex gap-10 items-center mt-3'>
              <Select style={{width: '100%'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
