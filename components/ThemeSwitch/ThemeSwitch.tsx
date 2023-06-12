'use client';
import React from 'react';
import s from './ThemeSwitch.module.scss';
import {useTheme} from 'next-themes';

export const ThemeSwitch = () => {
  const {theme, setTheme} = useTheme();

  return (
    <div className={s.wrapper} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <div className={theme === 'light' ? s.light : s.dark}></div>
    </div>
  );
};
