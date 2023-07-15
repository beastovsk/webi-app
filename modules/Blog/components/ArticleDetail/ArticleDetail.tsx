'use client';

import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';
import {getParsedDate} from '@/src/helpers/hooks';
import parse from 'html-react-parser';
import React, {FC} from 'react';
import {IArticle} from '../../types';
import s from './ArticleDetail.module.scss';

interface ArticleDetailProps {
  articleInfo: IArticle;
}

export const ArticleDetail: FC<ArticleDetailProps> = ({articleInfo}) => {
  const {content, date, description, id, image, tags, title} = articleInfo;

  return (
    <div>
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

      <div className='mt-5'>
        <h3 className='text-xl mb-3'>{description}</h3>
        <p className='text-gray-400'>{getParsedDate(date)}</p>
      </div>

      <div className='mt-10'>{parse(content)}</div>
    </div>
  );
};
