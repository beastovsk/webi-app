'use client';

import React, {FC, useEffect, useState} from 'react';
import s from './PopularContent.module.scss';

import {ProductsList} from '../ProductsList/ProductsList';
import {useMutation, useQuery} from 'react-query';
import {GetServices} from '../../api';
import {customNotification} from '@/src/helpers/customNotification';

interface PopularContentProps {
  title: string;
}

export const PopularContent: FC<PopularContentProps> = ({title, ...props}) => {
  const [products, setProducts] = useState([]);
  const {mutate, isLoading} = useMutation(GetServices);

  useEffect(() => {
    mutate(
      {name: '', priceFrom: 0, priceTo: 99999999},
      {
        onSuccess: (data) => {
          data.json().then((data) => {
            if (!data?.services) return;

            setProducts(data?.services);
          });
        }
      }
    );
  }, []);

  return (
    <div className={s.container}>
      <ProductsList title={title} productsList={products} isLoading={isLoading} />
    </div>
  );
};
