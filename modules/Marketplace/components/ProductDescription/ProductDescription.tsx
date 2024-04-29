'use client';

import Btn from '@/components/UI/Btn/Btn';
import {getParsedDate} from '@/src/helpers/hooks';
import {CopyOutlined} from '@ant-design/icons';
import {Tooltip} from 'antd';
import Link from 'next/link';

import React, {FC, useState} from 'react';
import {IProduct} from '../../types';
import s from './ProductDescription.module.scss';

interface ProductDescriptionProps {
  productInfo: IProduct;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({productInfo}) => {
  const [message, setMessage] = useState('Копировать ссылку');
  // eslint-disable-next-line camelcase
  const {description, link, author, publication_date} = productInfo;

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div>
          <h2 className='text-lg mb-3'>Описание</h2>
          <p className='text-base text-[#6C7AA0]'>{description}</p>
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        <div>
          <h2 className='text-lg mb-3 md:flex gap-3'>
            Автор
            <span className=''>
              {' '}
              <Tooltip title={message}>
                <CopyOutlined
                  className='text-lg cursor-pointer text-[#6F4FF2] hover:opacity-70 transition-[all]'
                  color='#111'
                  onClick={() => {
                    navigator.clipboard.writeText(author);
                    setMessage('Ссылка скопирована');

                    setTimeout(() => {
                      setMessage('Копировать ссылку');
                    }, 5000);
                  }}
                />
              </Tooltip>
            </span>
          </h2>
          <div className='flex items-center gap-3'>
            <Link
              target='_blank'
              href={author}
              className='text-[#6C7AA0] hover:opacity-70 transition-opacity cursor-pointer'
            >
              {author}
            </Link>
          </div>
        </div>
        <div>
          <h2 className='text-lg mb-3 md:flex gap-3'>
            Ссылка
            <span className=''>
              {' '}
              <Tooltip title={message}>
                <CopyOutlined
                  className='text-lg cursor-pointer text-[#6F4FF2] hover:opacity-70 transition-[all]'
                  color='#111'
                  onClick={() => {
                    navigator.clipboard.writeText(link);
                    setMessage('Ссылка скопирована');

                    setTimeout(() => {
                      setMessage('Копировать ссылку');
                    }, 5000);
                  }}
                />
              </Tooltip>
            </span>
          </h2>
          <div className='flex items-center gap-3'>
            <Link
              target='_blank'
              href={link}
              className='text-[#6C7AA0] hover:opacity-70 transition-opacity cursor-pointer'
            >
              {link}
            </Link>
          </div>
        </div>
        <div>
          <h2 className='text-lg mb-5'>Добавлено</h2>
          <p className='text-[#6C7AA0]'>{getParsedDate(publication_date)}</p>
        </div>
        <Btn className='w-max sm:w-full'>Добавить в корзину</Btn>
      </div>
    </div>
  );
};
