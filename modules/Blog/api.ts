import {customNotification} from '@/src/helpers/customNotification';
import axios from 'axios';
import {getCookie, setCookie} from 'cookies-next';

export const GetArticles = async () => {
  const {data} = await axios.get('https://api.webi-agency.ru/api/v1/get-articles');

  return data;
};

export const GetArticleById = async (id: string) => {
  const {data} = await axios.get(`https://api.webi-agency.ru/api/v1/get-article/${id}`);

  return data;
};
