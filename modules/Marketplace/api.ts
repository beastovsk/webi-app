import axios from 'axios';
import {getCookie, setCookie, setCookies} from 'cookies-next';

export const Login = async (args: {username: string; password: string}) => {
  const token = getCookie('token');
  const refToken = getCookie('refreshToken');

  const {data} = await axios.post(`https://api.webi-agency.ru/api/v1/token`, args);

  setCookie('token', data.access);
  setCookie('refreshToken', data.refresh);
  setCookie('username', args.username);
  return data;
};

export const Register = async (args: {username: string; password: string; email: string}) => {
  const token = getCookie('token');
  const refToken = getCookie('refreshToken');

  const {data} = await axios.post(`https://api.webi-agency.ru/api/v1/register`, args);

  setCookie('token', data.access);
  setCookie('refreshToken', data.refresh);
  setCookie('username', args.username);

  return data;
};

export const GetProducts = async () => {
  const {data} = await axios.get(`https://api.webi-agency.ru/api/v1/search`);
  return data;
};
