import Link from 'next/link';
import React, {FC} from 'react';
import Btn from '../UI/Btn/Btn';
import {Logo} from '../UI/Logo/Logo';
import s from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <div className={s.header}>
      <Logo />
      <div className={s.menu}>
        <Link href={'/marketplace/auth'} className={s.link}>
          <span className='text-primary-500'>Webi</span> Marketplace
        </Link>
      </div>
      <a href='#feedback' className='md:hidden'>
        <Btn primary>Связаться с нами</Btn>
      </a>
    </div>
  );
};
