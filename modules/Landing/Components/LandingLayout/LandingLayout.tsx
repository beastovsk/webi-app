'use client';

import {GetUser, Verificate} from '@/modules/Marketplace/api';
import {customNotification} from '@/src/helpers/customNotification';
import {getCookie} from 'cookies-next';
import {useRouter, useSearchParams} from 'next/navigation';
import React, {FC, useEffect} from 'react';
import {useMutation, useQuery} from 'react-query';
import s from './LandingLayout.module.scss';

interface LandingLayoutProps {}

export const LandingLayout: FC<LandingLayoutProps> = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const code = searchParams.get('code');
  const email = getCookie('email');

  const {mutate: verify} = useMutation(Verificate);
  const {mutate: get, error} = useMutation(GetUser);

  useEffect(() => {
    if (!code) return;

    // @ts-ignore
    verify({code, email});
  }, []);

  return <div className={s.container}></div>;
};
