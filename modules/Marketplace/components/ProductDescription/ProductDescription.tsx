'use client';

import Btn from '@/components/UI/Btn/Btn';
import {getParsedDate} from '@/src/helpers/hooks';
import {CopyOutlined} from '@ant-design/icons';
import {Tooltip} from 'antd';
import Link from 'next/link';
import parse from 'html-react-parser';

import React, {FC, useState} from 'react';
import {IService} from '../../types';
import s from './ProductDescription.module.scss';

interface ProductDescriptionProps {
  productInfo: IService;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({productInfo}) => {
  const [message, setMessage] = useState('Копировать ссылку');

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div>
          <h2 className='text-lg mb-3'>Описание</h2>
          <p className='text-base text-[#6C7AA0]'>
            {productInfo?.description ? parse(productInfo?.description) : null}
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        <div>
          <h2 className='text-lg mb-3 md:flex gap-3'>
            Онлайн-показ
            <span>
              <Tooltip title={message}>
                <CopyOutlined
                  className='text-lg cursor-pointer text-[#6F4FF2] hover:opacity-70 transition-[all]'
                  color='#111'
                  onClick={() => {
                    navigator.clipboard.writeText(productInfo?.preview_link);
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
              href={productInfo?.preview_link || ''}
              className='text-[#6C7AA0] hover:opacity-70 transition-opacity cursor-pointer'
            >
              {productInfo?.preview_link}
            </Link>
          </div>
        </div>
        <div>
          <h2 className='text-lg mb-3 md:flex gap-3'>
            Видео
            <span>
              <Tooltip title={message}>
                <CopyOutlined
                  className='text-lg cursor-pointer text-[#6F4FF2] hover:opacity-70 transition-[all]'
                  color='#111'
                  onClick={() => {
                    navigator.clipboard.writeText(productInfo?.video_link);
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
              href={productInfo?.video_link || ''}
              className='text-[#6C7AA0] hover:opacity-70 transition-opacity cursor-pointer'
            >
              {productInfo?.video_link}
            </Link>
          </div>
        </div>
        <Btn className='w-max sm:w-full'>Добавить в корзину</Btn>
      </div>
    </div>
  );
};
