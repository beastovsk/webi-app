import {customNotification} from '@/src/helpers/customNotification';
import axios from 'axios';
import {getCookie, setCookie} from 'cookies-next';
import {useStore} from './store';

export const Login = async (args: {email: string; password: string}) => {
  return await fetch('http://localhost:3001/api/auth/login', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const Register = async (args: {password: string; email: string}) => {
  return await fetch('http://localhost:3001/api/auth/register', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const ConfirmEmail = async (args: {confirmToken: string}) => {
  return await fetch('http://localhost:3001/api/auth/confirmEmail', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const SendResetCode = async (args: {email: string}) => {
  return await fetch('http://localhost:3001/api/auth/sendResetCode', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const ResetPassword = async (args: {password: string; confirmToken: string}) => {
  return await fetch('http://localhost:3001/api/auth/resetPassword', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};
