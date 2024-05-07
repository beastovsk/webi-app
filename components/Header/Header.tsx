'use client';

import {MenuOutlined} from '@ant-design/icons';
import {Drawer} from 'antd';
import Link from 'next/link';
import React, {FC, useState} from 'react';
import Btn from '../UI/Btn/Btn';
import {Logo} from '../UI/Logo/Logo';
import s from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
  const [open, setOpen] = useState(false);

  const content = (
    <div className={s.content}>
      <div className={s.menu}>
        <Link href={'/marketplace/'} className={s.link}>
          Marketplace
        </Link>{' '}
        <Link href={'/agency'} className={s.link}>
          Агентство
        </Link>
      </div>
      <a href='#feedback' className='md:hidden'>
        <Btn primary>Поддержка</Btn>
      </a>
    </div>
  );
  return (
    <div className={s.header}>
      <Logo />
      <div className='hidden md:flex' onClick={() => setOpen(true)}>
        <MenuOutlined className='text-xl opacity-80' />
      </div>
      <div className='md:hidden'>{content}</div>

      <Drawer open={open} onClose={() => setOpen(false)}>
        {content}
      </Drawer>
    </div>
  );
};
