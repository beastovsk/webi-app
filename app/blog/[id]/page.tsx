import {GetArticleById} from '@/modules/Blog/api';
import {ArticleDetail} from '@/modules/Blog/components/ArticleDetail/ArticleDetail';
import {ArticlesList} from '@/modules/Blog/components/ArticlesList/ArticlesList';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <>
      <ArticleDetail id={params.id} />
    </>
  );
}
