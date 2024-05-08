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
import io from 'socket.io-client';
import {customNotification} from '@/src/helpers/customNotification';
import Btn from '@/components/UI/Btn/Btn';

dayjs.locale('ru');
// @ts-ignore
const socket = io.connect('https://webi-server-production.up.railway.app');

function AntdThemeProvider({children}: {children: React.ReactNode}) {
  const [mounted, setMounted] = useState(false);
  const {mutate} = useMutation(GetUser);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    if (pathname.split('/')[1] !== 'marketplace') return;
    socket.on('create_order', (data) => {
      const profileId = localStorage.getItem('id');

      if (data?.sellerId != profileId) return;
      customNotification(
        'info',
        'bottomRight',
        `Вам пришел новый заказ № ${data?.orderId}`,
        'Перейдите к заказу в личном кабинете'
      );
    });

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
