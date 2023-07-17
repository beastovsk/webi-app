import {ArticleDetail} from '@/modules/Blog/components/ArticleDetail/ArticleDetail';
import {ArticlesList} from '@/modules/Blog/components/ArticlesList/ArticlesList';
import React from 'react';

// async function getData(id) {
//   const res = await fetch(`http://api.webi-agency.ru/api/v1/get-article/${id}`);

//   if (!res.ok) {
//     return {results: []};
//   }

//   return res.json();
// }

// export async function generateMetadata({params}: {params: {id: string}}) {
//   const data = await getData(params.id);

//   return {
//     title: data.title,
//     description: data.description
//   };
// }

export default async function Page({params}: {params: {id: string}}) {
  return (
    <>
      <ArticleDetail id={params.id} />
    </>
  );
}
