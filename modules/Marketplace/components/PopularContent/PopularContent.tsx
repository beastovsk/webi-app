'use client';

import React, {FC} from 'react';
import s from './PopularContent.module.scss';

import {ProductsList} from '../ProductsList/ProductsList';
import {useQuery} from 'react-query';
import {GetProducts} from '../../api';

interface PopularContentProps {
  title: string;
}

export const PopularContent: FC<PopularContentProps> = ({title, ...props}) => {
  const {data, isLoading} = useQuery('productsList', GetProducts);

  return (
    <div className={s.container}>
      <ProductsList title={title} productsList={data?.results || []} isLoading={isLoading} />
    </div>
  );
};
