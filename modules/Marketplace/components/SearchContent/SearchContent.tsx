'use client';

import Btn from '@/components/UI/Btn/Btn';
import {formatProductPrice, getTypeName} from '@/src/helpers/hooks';

import React, {FC, useEffect, useState} from 'react';
import {IProduct} from '../../types';
import s from './SearchContent.module.scss';

import {useStore} from '../../store';
import {ProductsList} from '../ProductsList/ProductsList';

interface SearchContentProps {
  title: string;
  productsList: IProduct[];
}

export const SearchContent: FC<SearchContentProps> = ({title, productsList}) => {
  const [currentList, setCurrentList] = useState(productsList);

  const storeProducts = useStore((store) => store.productsList);
  const available = useStore((store) => store.available);

  useEffect(() => {
    if (!available) return;

    setCurrentList(storeProducts);
  }, [storeProducts]);

  return (
    <div className={s.container}>
      <ProductsList title={title} productsList={currentList} />
    </div>
  );
};
