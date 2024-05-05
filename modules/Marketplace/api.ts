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

export const ChangeEmail = async (args: {currentEmail: string; newEmail: string; password: string}) => {
  return await fetch('http://localhost:3001/api/user/changePassword', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const ChangePassword = async (args: {password: string; currentPassword: string}) => {
  return await fetch('http://localhost:3001/api/user/changeEmail', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const GetUser = async () => {
  return await fetch('http://localhost:3001/api/user/getUser', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`
    },
    method: 'GET'
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const CreateService = async (args) => {
  return await fetch('http://localhost:3001/api/service/createService', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const UpdateService = async (args) => {
  return await fetch('http://localhost:3001/api/service/updateService', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const RemoveService = async (args) => {
  return await fetch('http://localhost:3001/api/service/removeService', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`
    },
    method: 'POST',
    body: JSON.stringify(args)
  });
};

export const GetServiceById = async ({serviceId}) => {
  return await fetch(`http://localhost:3001/api/service/getServiceById?serviceId=${serviceId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const GetServices = async ({name, priceFrom, priceTo}: {name: string; priceFrom: string; priceTo: string}) => {
  return await fetch(
    `http://localhost:3001/api/service/getServices?name=${name}&priceFrom=${priceFrom}&priceTo=${priceTo}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }
  ).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const GetPersonalServices = async () => {
  return await fetch(`http://localhost:3001/api/service/getPersonalServices`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`
    },
    method: 'GET'
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};

export const SupportRequest = async (data) => {
  return await fetch(`http://localhost:3001/api/auth/supportRequest`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }).then((data) => {
    if (!data.ok) return;
    return data.json();
  });
};
