'use client';
import React, {useEffect, useState} from 'react';
import {ConfigProvider} from 'antd';
import locale from 'antd/locale/ru_RU';
import {darkTheme, lightTheme} from '@/src/helpers/theme';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {useTheme} from 'next-themes';
import {useMutation} from 'react-query';
import {GetUser} from './Marketplace/api';
import {usePathname, useRouter} from 'next/navigation';
import {deleteCookie} from 'cookies-next';

dayjs.locale('ru');

function AntdThemeProvider({children}: {children: React.ReactNode}) {
  const [mounted, setMounted] = useState(false);
  const {mutate} = useMutation(GetUser);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    if (pathname.split('/')[1] !== 'marketplace') return;

    mutate({} as any, {
      onSuccess: (data) => {
        if (!data?.user) {
          deleteCookie('token');
          localStorage.removeItem('email');
          localStorage.removeItem('id');
          return router.push('/marketplace/auth');
        }

        const {email, id} = data.user;
        localStorage.setItem('email', email);
        localStorage.setItem('id', id);
      }
    });
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ConfigProvider locale={locale} theme={darkTheme}>
      {children}
    </ConfigProvider>
  );
}

export default AntdThemeProvider;
