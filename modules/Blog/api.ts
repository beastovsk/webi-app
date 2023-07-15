import {customNotification} from '@/src/helpers/customNotification';
import axios from 'axios';
import {getCookie, setCookie} from 'cookies-next';

export const Login = async (args: {username: string; password: string}) => {
  const {data} = await axios.post('https://api.webi-agency.ru/api/v1/token', args, {
    headers: {'Content-type': 'application/json; charset=UTF-8'}
  });
  return data;
};
