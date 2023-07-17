'use client';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import {getParsedDate} from '@/src/helpers/hooks';
import {Breadcrumb} from 'antd';
import parse from 'html-react-parser';
import Link from 'next/link';
import React, {FC, useEffect, useState} from 'react';
import {IArticle} from '../../types';
import s from './ArticleDetail.module.scss';

import {animated, useInView} from '@react-spring/web';
import {useQuery} from 'react-query';
import {GetArticleById} from '../../api';

interface ArticleDetailProps {
  id: string;
}

export const metadata = {
  title: 'asdasd',
  description: 'Купить готовые веб приложения'
};

export const ArticleDetail: FC<ArticleDetailProps> = ({id}) => {
  const {data, isSuccess, isLoading} = useQuery(['articleInfo', id], () => GetArticleById(id));

  const [articleInfo, setArticleInfo] = useState({
    content: '',
    date: new Date().toISOString(),
    description: '',
    image: '',
    tags: [],
    title: ''
  });
  const {content, date, description, image, tags, title} = articleInfo;

  useEffect(() => {
    if (!isSuccess) return;
    setArticleInfo(data);
  }, [isSuccess]);

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, scale: 0.95},
      to: {opacity: 1, scale: 1}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs}>
      <Breadcrumb
        className='mb-10 text-base'
        separator='>'
        items={[
          {
            title: <Link href={'/'}>Главная</Link>
          },
          {
            title: <Link href={'/blog'}>Блог</Link>
          },
          {
            title: <Link href={`/blog/${id}`}>{title}</Link>
          }
        ]}
      />
      {isSuccess ? (
        <>
          <div className={s.wrapper}>
            <PreloaderImage src={image} objectFit='cover' alt='' width={500} height={500} className={s.image} />
            <div className={s.content}>
              <h1 className={s.title}>{title}</h1>

              <div>
                {tags.map((tag) => (
                  <p className={s.tag}>{tag}</p>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-10'>
            <h3 className='text-xl mb-3'>{description}</h3>
            <p className='text-gray-400'>{getParsedDate(date)}</p>
          </div>

          <div className='mt-10'>{parse(content)}</div>
        </>
      ) : (
        <></>
      )}
    </animated.div>
  );
};
