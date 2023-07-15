'use client';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import {getParsedDate} from '@/src/helpers/hooks';
import {ArrowRightOutlined} from '@ant-design/icons';
import Link from 'next/link';
import React, {FC} from 'react';
import {IArticle} from '../../types';
import s from './ArticlesList.module.scss';

interface ArticlesListProps {
  articlesList: IArticle[];
}

export const ArticlesList: FC<ArticlesListProps> = ({articlesList}) => {
  console.log(articlesList);

  return (
    <div className='mt-10'>
      <h2 className='text-xl font-medium'>Блог</h2>
      <div className={s.list}>
        {articlesList.map(({content, date, description, id, image, tags, title}) => (
          <Link href={`/blog/${id}`} className={s.item}>
            <PreloaderImage src={image} alt='' width={100} height={100} className='w-1/2 h-full' objectFit='cover' />
            <div className='h-full flex flex-col flex-grow justify-between'>
              <div>
                <h2 className='text-lg font-medium mb-5'>{title}</h2>
                <p className='text-sm text-gray-400'>{description}</p>
              </div>
              <div className='flex justify-between w-full'>
                {' '}
                <div className='flex gap-3 items-center text-sm'>
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
    </div>
  );
};
