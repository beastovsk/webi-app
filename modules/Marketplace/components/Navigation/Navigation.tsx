'use client';

import Btn from '@/components/UI/Btn/Btn';
import {AppstoreOutlined, DesktopOutlined, ImportOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input} from 'antd';
import Link from 'next/link';
import React, {FC} from 'react';
import s from './Navigation.module.scss';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <div className={s.container}>
      <div className='flex flex-col gap-14 items-center'>
        <Link href={'/'} className='text-2xl hover:opacity-70 transition-opacity'>
          Webi
        </Link>

        <div className='flex flex-col gap-10 items-center text-[#6C7AA0]'>
          <Link href={'/marketplace'} className='hover:text-[#6F4FF2] transition-[all]'>
            <AppstoreOutlined className='text-2xl cursor-pointer' color='#111' rev={''} />
          </Link>
          <Link href={'/marketplace/search'} className='hover:text-[#6F4FF2] transition-[all]'>
            <DesktopOutlined className='text-2xl cursor-pointer' color='#111' rev={''} />
          </Link>
          <Link href={'/marketplace/profile'} className='hover:text-[#6F4FF2] transition-[all]'>
            <UserOutlined className='text-2xl cursor-pointer' color='#111' rev={''} />
          </Link>
          <Link href={'/marketplace/profile/settings'} className='hover:text-[#6F4FF2] transition-[all]'>
            <SettingOutlined className='text-2xl cursor-pointer' color='#111' rev={''} />
          </Link>
        </div>
      </div>
      <Link href={'/marketplace/auth'} className='hover:text-[#6F4FF2] transition-[all] text-[#6C7AA0]'>
        <ImportOutlined className='text-2xl cursor-pointer' color='#111' rev={''} />
      </Link>
    </div>
  );
};
