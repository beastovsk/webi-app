'use client';

import Btn from '@/components/UI/Btn/Btn';
import {Input} from 'antd';
import {format} from 'path';
import React, {FC, SetStateAction, useState} from 'react';
import s from './SettingsMenu.module.scss';

interface SettingsMenuProps {}

interface IPasswordForm {
  email: string;
  currentPassword: string;
  newPassword: string;
}

export const SettingsMenu: FC<SettingsMenuProps> = () => {
  const [name, setName] = useState('Артём');
  const [passwordForm, setPasswordForm] = useState<SetStateAction<any>>({
    email: '',
    currentPassword: '',
    newPassword: ''
  });
  return (
    <div className={s.container}>
      <div className='w-full'>
        <h2 className='text-xl font-medium'>Изменить имя</h2>
        <div className={s.item}>
          <h3 className='text-base font-medium mb-3'>Имя</h3>
          <Input style={{background: '#131129'}} value={name} onChange={(e) => setName(e.target.value)} />
          <div className='flex items-center mt-5 gap-3'>
            <div className='bg-primary-500 w-10 h-10 rounded-full flex justify-center items-center '>
              {name[0]?.toUpperCase() || 'И'}
            </div>
            <div className='transition-[all]'>
              <h2>{name || 'Имя'},</h2>
              <p className='text-xs text-[#6C7AA0]'>Добро пожаловать!</p>
            </div>
          </div>

          <Btn className='mt-5'>Сохранить</Btn>
        </div>
      </div>
      <div className='w-full'>
        <h2 className='text-xl font-medium'>Изменить email</h2>
        <div className={s.item}>
          <div className='flex flex-col gap-5'>
            <div>
              <h3 className='text-base font-medium mb-3'>Новый email</h3>
              <Input
                style={{background: '#131129'}}
                value={passwordForm.email}
                onChange={(e) => setPasswordForm((form: IPasswordForm) => ({...form, email: e.target.value}))}
              />
            </div>
            <div>
              <h3 className='text-base font-medium mb-3'>Пароль</h3>
              <Input.Password
                style={{background: '#131129'}}
                value={passwordForm.currentPassword}
                onChange={(e) => setPasswordForm((form: IPasswordForm) => ({...form, currentPassword: e.target.value}))}
              />
            </div>
            <div>
              <h3 className='text-base font-medium mb-3'>Повторите пароль</h3>
              <Input.Password
                style={{background: '#131129'}}
                value={passwordForm.newPassword}
                onChange={(e) => setPasswordForm((form: IPasswordForm) => ({...form, newPassword: e.target.value}))}
              />
            </div>
          </div>
          <Btn className='mt-5'>Изменить</Btn>
        </div>
      </div>
    </div>
  );
};
