'use client';

import Btn from '@/components/UI/Btn/Btn';
import {Form, Input, Modal, Space} from 'antd';
import {useStore} from '../../store';
import {useMutation} from 'react-query';
import {ConfirmEmail, ResetPassword, SendResetCode} from '../../api';
import {customNotification} from '@/src/helpers/customNotification';
import {useRouter} from 'next/navigation';
import {useState} from 'react';

export const ResetPasswordModal = () => {
  const router = useRouter();

  const {openResetPassword, setOpenResetPassword} = useStore();
  const {mutate: send, isLoading: isSendLoading} = useMutation(SendResetCode);
  const {mutate: reset, isLoading: isResetLoading} = useMutation(ResetPassword);
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');

  const onSendCode = (value) => {
    send(value, {
      onSuccess: (data) => {
        data.json().then((data) => {
          if (!data?.message) return;

          if (data?.message === 'Код подтверждения отправлен на почту') {
            setStep(1);
            setEmail(value.email);
          }

          customNotification('info', 'top', 'Информация', data?.message);
        });
      }
    });
  };
  const onResetPassword = (value) => {
    const {passwordConfirm, ...args} = value;

    reset(
      {...args, email},
      {
        onSuccess: (data) => {
          data.json().then((data) => {
            if (!data?.message) return;

            if (data?.message === 'Пароль успешно изменен') {
              setOpenResetPassword(false);
            }

            if (data?.token) {
              router.push('/marketplace');
              localStorage.setItem('token', data?.token);
            }

            customNotification('info', 'top', 'Информация', data?.message);
          });
        }
      }
    );
  };

  return (
    <Modal open={openResetPassword} onCancel={() => setOpenResetPassword(false)} footer={false}>
      {step === 0 ? (
        <Form layout='vertical' onFinish={onSendCode}>
          <Form.Item
            className='mt-5'
            label='Введите вашу почту'
            name='email'
            rules={[{required: true, message: 'Введите почту пользователя'}]}
          >
            <Input size='large' placeholder='Почта пользователя' />
          </Form.Item>

          <Btn className='mt-2 flex justify-center m-auto' htmlTypeButton='submit' loading={isSendLoading}>
            Далее
          </Btn>
        </Form>
      ) : null}
      {step === 1 ? (
        <Form layout='vertical' onFinish={onResetPassword}>
          <Form.Item
            className='mt-5'
            label='Введите ваш новый пароль'
            name='password'
            rules={[{required: true, message: 'Введите пароль'}]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            className='mt-5'
            label='Подтвердите ваш новый пароль'
            name='passwordConfirm'
            rules={[{required: true, message: 'Введите пароль'}]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            className='mt-5'
            label='Введите код подтверждения'
            name='confirmToken'
            rules={[{required: true, message: 'Введите код с почты'}]}
          >
            <Input className='text-2xl text-center' />
          </Form.Item>

          <Space align='center' className='w-full justify-center'>
            <Btn primary className='mt-2 flex justify-center m-auto' onClick={() => setStep(0)}>
              Назад
            </Btn>
            <Btn className='mt-2 flex justify-center m-auto' htmlTypeButton='submit' loading={isResetLoading}>
              Отправить
            </Btn>
          </Space>
        </Form>
      ) : null}
    </Modal>
  );
};
