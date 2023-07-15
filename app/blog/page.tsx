import {ArticlesList} from '@/modules/Blog/components/ArticlesList/ArticlesList';
import React from 'react';

async function getData() {
  const res = await fetch('http://api.webi-agency.ru/api/v1/get-articles');

  if (!res.ok) {
    return;
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <ArticlesList articlesList={data.results} />
    </>
  );
}
