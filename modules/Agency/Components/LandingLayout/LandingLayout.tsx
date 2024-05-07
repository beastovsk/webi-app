'use client';

import {GetUser} from '@/modules/Marketplace/api';
import {customNotification} from '@/src/helpers/customNotification';
import {getCookie} from 'cookies-next';
import {useRouter, useSearchParams} from 'next/navigation';
import React, {FC, useEffect} from 'react';
import {useMutation, useQuery} from 'react-query';
import s from './LandingLayout.module.scss';

interface LandingLayoutProps {}

export const LandingLayout: FC<LandingLayoutProps> = () => {
  const searchParams = useSearchParams();


  return <div className={s.container}></div>;
};
