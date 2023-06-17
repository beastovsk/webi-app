'use client';

import {ShoppingCartOutlined} from '@ant-design/icons';
import {Badge} from 'antd';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {FC} from 'react';
import s from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const router = useRouter();

  return (
    <div className={s.container}>
      <div className='cursor-pointer hover:opacity-70 transition-opacity'>
        <Badge count={2} className=''>
          <ShoppingCartOutlined className='text-[#6C7AA0] text-2xl ' rev={''} />
        </Badge>
      </div>
      <Link
        href={'/marketplace/profile'}
        className='bg-[#6F4FF2] w-10 h-10 rounded-full transition-opacity hover:opacity-70'
      >
        <h2 className='text-xl h-full text-white flex justify-center items-center'>A</h2>
      </Link>{' '}
    </div>
  );
};
