'use client';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import {getParsedDate} from '@/src/helpers/hooks';
import {ArrowRightOutlined} from '@ant-design/icons';
import {Breadcrumb} from 'antd';
import Link from 'next/link';
import React, {FC, useEffect, useState} from 'react';
import {IArticle} from '../../types';
import s from './ArticlesList.module.scss';
import {animated, useInView} from '@react-spring/web';
import {useQuery} from 'react-query';
import {GetArticles} from '../../api';

interface ArticlesListProps {}

export const ArticlesList: FC<ArticlesListProps> = () => {
  const {data, isLoading, isSuccess} = useQuery('articlesList', GetArticles);
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    if (!isSuccess) return;

    setArticlesList(data.results);
  }, [isSuccess]);

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, x: 40},
      to: {opacity: 1, x: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className='mt-0'>
      <Breadcrumb
        className='mb-10 text-base'
        separator='>'
        items={[
          {
            title: <Link href={'/'}>Главная</Link>
          },
          {
            title: <Link href={'/blog'}>Блог</Link>
          }
        ]}
      />
      <h2 className='text-xl font-medium'>Блог</h2>
      <div className={s.list}>
        {articlesList.map(({content, date, description, id, image, tags, title}) => (
          <Link href={`/blog/${id}`} className={s.item}>
            <PreloaderImage src={image} alt='' width={100} height={100} className='w-1/2 h-[180px]' objectFit='cover' />
            <div className='h-full flex flex-col flex-grow justify-between'>
              <div>
                <h2 className='text-lg font-medium mb-5'>{title}</h2>
                <p className='text-sm text-gray-400'>{description}</p>
              </div>
              <div className='flex justify-between w-full'>
                {' '}
                <div className='flex gap-3 items-center text-sm md:flex-col md:items-start md:mt-5'>
                  <h3 className='text-sm text-gray-400'>{getParsedDate(date)}</h3>
                  <div>
                    {tags.map((label) => (
                      <p className={s.tag}>{label}</p>
                    ))}
                  </div>
                </div>
                <ArrowRightOutlined className={s.arrow} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </animated.div>
  );
};
