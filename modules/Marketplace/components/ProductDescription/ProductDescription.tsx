'use client';

import Btn from '@/components/UI/Btn/Btn';
import {CopyOutlined} from '@ant-design/icons';
import {Tooltip, Typography} from 'antd';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';

import React, {FC, useState} from 'react';
import s from './ProductDescription.module.scss';

const {Paragraph} = Typography;

interface ProductDescriptionProps {
  id: number;
  description: string;
  modulesList: {id: number; label: string}[];
  techList: {id: number; label: string}[];
  link: string;
  date: string;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
  date,
  description,
  id,
  link,
  modulesList,
  techList
}) => {
  const [message, setMessage] = useState('Копировать ссылку');

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div>
          <h2 className='text-lg mb-3'>Описание</h2>
          <p className='text-base text-[#6C7AA0]'>{description}</p>
        </div>

        <div>
          <h2 className='text-lg mb-3'>Модули сайта</h2>

          <ul>
            {modulesList.map(({id, label}) => (
              <li className='text-[#6C7AA0]' key={id}>
                {id}. {label}
              </li>
            ))}
          </ul>
        </div>

        <span className='text-[#6C7AA0]'>
          Сайт был выполнен на современных технологиях и готов для запуска вашего бизнеса онлайн. Преимуществом является
          - возможность расширения функциональности сайта, путем добавления новых{' '}
          <Link
            href={'/marketplace/products'}
            className='text-primary-500 hover:opacity-70 transition-opacity cursor-pointer'
          >
            модулей
          </Link>
          .
        </span>
      </div>
      <div className='flex flex-col gap-10'>
        <div>
          <h2 className='text-lg mb-5'>Технологии</h2>
          <div className='flex flex-wrap gap-3'>
            {techList.map(({id, label}) => (
              <span key={id} className='bg-[#41308D] rounded-[30px] py-3 px-6'>
                {label}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-lg mb-3'>Ссылка</h2>
          <div className='flex items-center gap-3'>
            <Link
              target='_blank'
              href={`https://${link}`}
              className='text-[#6C7AA0] hover:opacity-70 transition-opacity cursor-pointer'
            >
              {link}
            </Link>

            <Tooltip title={message}>
              <CopyOutlined
                className='text-lg cursor-pointer text-[#6F4FF2] hover:opacity-70 transition-[all]'
                color='#111'
                rev={''}
                onClick={() => {
                  navigator.clipboard.writeText(link);
                  setMessage('Ссылка скопирована');

                  setTimeout(() => {
                    setMessage('Копировать ссылку');
                  }, 5000);
                }}
              />
            </Tooltip>
          </div>
        </div>
        <div>
          <h2 className='text-lg mb-5'>Добавлено</h2>
          <p className='text-[#6C7AA0]'>{date}</p>
        </div>
        <Btn>Добавить в корзину</Btn>
      </div>
    </div>
  );
};
