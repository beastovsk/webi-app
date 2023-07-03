import {customNotification} from '@/src/helpers/customNotification';
import axios from 'axios';
import {getCookie, setCookie, setCookies} from 'cookies-next';

export const Login = async (args: {username: string; password: string}) => {
  await axios
    .post(`https://api.webi-agency.ru/api/v1/token`, args, {
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
    .then((response: any) => {
      console.log('data', response.data);
      customNotification('success', 'top', 'Успешная авторизация', '');
      setCookie('token', response.data.access);
      setCookie('refreshToken', response.data.refresh);
      setCookie('username', args.username);
    })
    .catch((error) => {
      console.log(error.response.data);
      customNotification('error', 'top', 'Ошибка при авторизации', error.response.data.detail);
    });
};

export const Register = async (args: {username: string; password: string; email: string}) => {
  await axios
    .post(`https://api.webi-agency.ru/api/v1/register`, args)
    .then((data: any) => {
      // customNotification('success', 'top', 'Успешно', 'Вам отправлено письмо для подтверждения почты');

      setCookie('username', args.username);
      setCookie('email', args.email);
    })
    .catch((error) => {
      console.log(Object.values(error.response)[0]);
      customNotification('error', 'top', 'Ошибка при регистрации', 'Такая почта или имя уже существует');
    });
};

export const Verificate = async (args: {code: string; email: string}) => {
  await axios
    .post(`https://api.webi-agency.ru/api/v1/email/verificate`, args)
    .then((data: any) => {
      customNotification('success', 'top', 'Успешно', 'Почта успешно подтвержденна');
    })
    .catch(() => {});
};
export const GetCode = async (args: {email: string}) => {
  await axios
    .post(`https://api.webi-agency.ru/api/v1/email/get-code`, args)
    .then((data: any) => {
      customNotification('success', 'top', 'Успешно', 'Вам отправлено письмо для подтверждения почты');
    })
    .catch((error) => {
      // customNotification('error', 'top', 'Ошибка при регистрации', 'Такая почта или имя уже существует');
    });
};

export const GetProducts = async () => {
  const {data} = await axios.get(`https://api.webi-agency.ru/api/v1/search`);
  return data;
};

export const GetUser = async () => {
  const token = getCookie('token');

  const {data} = await axios.get(`https://api.webi-agency.ru/api/v1/get-user`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const SendQuestion = async (args: {username: string; password: string, question: string}) => {
  await axios
    .post(`https://api.webi-agency.ru/api/v1/support`, args, {
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
    .then((response: any) => {
      console.log('data', response.data);
      customNotification('success', 'top', 'Ваш вопрос успешно отправлен!', '');
    })
    .catch((error) => {
      console.log(error.response.data);
      customNotification('error', 'top', 'Произошла ошибка в отправке вопроса, попробуйте снова!', error.response.data.detail);
    });
};