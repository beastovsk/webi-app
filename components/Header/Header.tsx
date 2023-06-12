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
        <Link href={'/'} className={s.link}>Услуги</Link>
        <Link href={'/'} className={s.link}>Маркетплейс</Link>
        <Link href={'/'} className={s.link}>О нас</Link>
      </div>
      <Btn primary>Связаться с нами</Btn>
    </div>
  );
};
