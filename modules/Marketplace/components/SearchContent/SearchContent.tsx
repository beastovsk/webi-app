'use client';

import Btn from '@/components/UI/Btn/Btn';
import {formatProductPrice, getTypeName} from '@/src/helpers/hooks';

import React, {FC, useEffect, useState} from 'react';
import {IProduct} from '../../types';
import s from './SearchContent.module.scss';

import {useStore} from '../../store';
import {ProductsList} from '../ProductsList/ProductsList';
import {useQuery} from 'react-query';
import {GetProducts} from '../../api';

interface SearchContentProps {
  title: string;
}

export const SearchContent: FC<SearchContentProps> = ({title}) => {
  // const {data, isSuccess, isLoading} = useQuery('productsList', GetProducts);
  const [currentList, setCurrentList] = useState([]);

  const data = {results: []};
  
  const isSuccess = true;
  const isLoading = false;

  const storeProducts = useStore((store) => store.productsList);
  const available = useStore((store) => store.available);

  useEffect(() => {
    if (!isSuccess) return;
    setCurrentList(data.results);
  }, [isSuccess]);

  useEffect(() => {
    if (!available) return;

    setCurrentList(storeProducts);
  }, [storeProducts]);

  return (
    <div className={s.container}>
      <ProductsList title={title} productsList={currentList} isLoading={isLoading} />
    </div>
  );
};
