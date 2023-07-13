'use client';

import Btn from '@/components/UI/Btn/Btn';
import {Input, Modal} from 'antd';
import React, {FC, SetStateAction, useState} from 'react';
import s from './SettingsMenu.module.scss';
import OtpInput from 'react-otp-input';
import { useMutation } from 'react-query';
import { ChangeEmail, ChangePassword, GetCodeChangeEmail, GetCodeChangePassword } from '../../api';

import {animated, useInView} from '@react-spring/web';

interface SettingsMenuProps {}

interface IPasswordForm {
  email: string;
  currentPassword: string;
  newPassword: string;
}

export const SettingsMenu: FC<SettingsMenuProps> = () => {
  const {mutate: getCodeChangeEmail} = useMutation(GetCodeChangeEmail);
  const {mutate: getCodeChangePassword} = useMutation(GetCodeChangePassword);
  const {mutate: getChangeEmail} = useMutation(ChangeEmail);
  const {mutate: getChangePassword} = useMutation(ChangePassword);
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const [open, setOpen] = useState(false);

  const [code, setCode] = useState('');
  const [name, setName] = useState('UserName');
  const [emailForm, setEmailForm] = useState<SetStateAction<any>>({
    email: ''
  });

  const [passwordForm, setPasswordForm] = useState<SetStateAction<any>>({
    email: '',
    newPassword: ''
  });

  const confirmEmail = () => {
    // Code format from XXXXXX to XX-XX-XX
    const codeForm = code.split('').map((item, i) => (i % 2 && code.length - 1 !== i ? [item, '-'] : item)).flat().join('');
    getChangeEmail({
      email: emailForm.email, 
      code: codeForm
    });

    // Need add close window form after 200 code
    setOpen(false);
  };

  const confirmPassword = () => {
    // Code format from XXXXXX to XX-XX-XX
    const codeForm = code.split('').map((item, i) => (i % 2 && code.length - 1 !== i ? [item, '-'] : item)).flat().join('');
    getChangePassword({
      email: passwordForm.email, 
      password: passwordForm.newPassword, 
      code: codeForm
    });

    // Need add close window form after 200 code
    setOpen(false);
  };

  const getEmailCode = () => {
    getCodeChangeEmail({email: emailForm.email});
    setOpen(true);
  };

  const getPasswordCode = () => {
    getCodeChangePassword({email: passwordForm.email});
    setOpen(true);
  };

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <div className='w-full'>
        <h2 className='text-xl font-medium'>Изменить пароль</h2>
        <div className={s.item}>
          <div className='flex flex-col gap-5'>
            <div>
              <h3 className='text-base font-medium mb-3'>Email</h3>
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
                value={passwordForm.newPassword}
                onChange={(e) => setPasswordForm((form: IPasswordForm) => ({...form, newPassword: e.target.value}))}
              />
            </div>
          </div>
          <Btn 
            className='mt-5'
            onClick={getPasswordCode}>
            Изменить
          </Btn>
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
                value={emailForm.email}
                onChange={(e) => setEmailForm((form: IPasswordForm) => ({...form, email: e.target.value}))}
              />
            </div>
          </div>
          <Btn 
            className='mt-5'
            onClick={getEmailCode}>
            Изменить
          </Btn>
        </div>
      </div>

      <Modal open={open} onCancel={() => setOpen(false)} footer={false}>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='mb-5'>Введите код указанный в письме</h2>
          <OtpInput
            containerStyle={{justifyContent: 'center'}}
            inputStyle={s.input}
            value={code}
            onChange={setCode}
            numInputs={6}
            renderSeparator={<span style={{marginRight: '10px'}}> </span>}
            renderInput={(props: any) => <input {...props} />}
          />
          <Btn className='mt-10' onClick={() => confirmEmail()}>
            Отправить
          </Btn>
        </div>
      </Modal>

      {/* Password Modal */}
      <Modal open={open} onCancel={() => setOpen(false)} footer={false}>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='mb-5'>Введите код указанный в письме</h2>
          <OtpInput
            containerStyle={{justifyContent: 'center'}}
            inputStyle={s.input}
            value={code}
            onChange={setCode}
            numInputs={6}
            renderSeparator={<span style={{marginRight: '10px'}}> </span>}
            renderInput={(props: any) => <input {...props} />}
          />
          <Btn className='mt-10' onClick={() => confirmPassword()}>
            Отправить
          </Btn>
        </div>
      </Modal>
    </animated.div>
  );
};
