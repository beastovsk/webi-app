import {customNotification} from '@/src/helpers/customNotification';
import axios from 'axios';
import {getCookie, setCookie} from 'cookies-next';

export const Login = async (args: {username: string; password: string}) => {
  const {data} = await axios.post('https://api.webi-agency.ru/api/v1/token', args, {
    headers: {'Content-type': 'application/json; charset=UTF-8'}
  });
  return data;
};

export const RefreshToken = async (args: {refresh: string}) => {
  const {data} = await axios.post('https://api.webi-agency.ru/api/v1/token/refresh', args, {
    headers: {'Content-type': 'application/json; charset=UTF-8'}
  });
  return data;
};

export const Register = async (args: {username: string; password: string; email: string}) => {
  await axios
    .post('https://api.webi-agency.ru/api/v1/register', args)
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
    .post('https://api.webi-agency.ru/api/v1/email/verificate', args)
    .then((data: any) => {
      customNotification('success', 'top', 'Успешно', 'Почта успешно подтвержденна');
    })
    .catch(() => {});
};
export const GetCode = async (args: {email: string}) => {
  await axios
    .post('https://api.webi-agency.ru/api/v1/email/get-code', args)
    .then((data: any) => {
      customNotification('success', 'top', 'Успешно', 'Вам отправлено письмо для подтверждения почты');
    })
    .catch((_) => {
      customNotification('error', 'top', 'Ошибка', 'Что-то пошло не так..');
    });
};

export const GetCodeChangeEmail = async (args: {email: string}) => {
  const token = getCookie('token');

  await axios
    .post('https://api.webi-agency.ru/api/v1/email/change/get-code', args, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then((data: any) => {
      customNotification('success', 'top', 'Успешно', 'Вам отправлено письмо для подтверждения почты');
    })
    .catch((_) => {
      customNotification('error', 'top', 'Ошибка', 'Что-то пошло не так..');
    });
};

export const ChangeEmail = async (args: {email: string; code: string}) => {
  const token = getCookie('token');

  await axios
    .post('https://api.webi-agency.ru/api/v1/email/change/verificate', args, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then((data: any) => {
      customNotification('success', 'top', 'Успешно', 'Вам отправлено письмо для подтверждения почты');
    })
    .catch((_) => {
      customNotification('error', 'top', 'Ошибка', 'Что-то пошло не так..');
    });
};

export const GetCodeChangePassword = async (args: {email: string}) => {
  const token = getCookie('token');

  await axios
    .post('https://api.webi-agency.ru/api/v1/password/get-code', args, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then((data: any) => {
      customNotification('success', 'top', 'Успешно', 'Вам отправлено письмо для подтверждения почты');
    })
    .catch((_) => {
      customNotification('error', 'top', 'Ошибка', 'Что-то пошло не так..');
    });
};

export const ChangePassword = async (args: {email: string; password: string; code: string}) => {
  const token = getCookie('token');

  await axios
    .post('https://api.webi-agency.ru/api/v1/password/change', args, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then((data: any) => {
      customNotification('success', 'top', 'Успешно', 'Вам отправлено письмо для подтверждения почты');
    })
    .catch((_) => {
      customNotification('error', 'top', 'Ошибка', 'Что-то пошло не так..');
    });
};

export const GetProducts = async (args: any) => {
  const {data} = await axios.get('https://api.webi-agency.ru/api/v1/search', {
    params: {
      query: args.query || null,
      priceFrom: args.priceFrom || null,
      priceTo: args.priceTo || null,
      type: args.type
    }
  });
  return data;
};

export const GetUser = async () => {
  const token = getCookie('token');

  const {data} = await axios.get('https://api.webi-agency.ru/api/v1/get-user', {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const SendQuestion = async (args: {username: string; password: string; question: string}) => {
  await axios
    .post('https://api.webi-agency.ru/api/v1/support', args, {
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
    .then((response: any) => {
      console.log('data', response.data);
      customNotification('success', 'top', 'Ваш вопрос успешно отправлен!', '');
    })
    .catch((error) => {
      console.log(error.response.data);
      customNotification(
        'error',
        'top',
        'Произошла ошибка в отправке вопроса, попробуйте снова!',
        error.response.data.detail
      );
    });
};

export const CreateOrder = async (args: {orders: number[]}) => {
  const token = getCookie('token');

  const {data} = await axios.post('https://api.webi-agency.ru/api/v1/create-order', args, {
    headers: {'Content-type': 'application/json; charset=UTF-8', Authorization: `Bearer ${token}`}
  });
  return data;
};
