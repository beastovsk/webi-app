'use client';

import {useEffect, useState} from 'react';
import {useMutation} from 'react-query';
import {GetServices} from '../../api';
import {ProductsList} from '../ProductsList/ProductsList';
import {SearchBar} from '../SearchBar/SearchBar';

export const SearchProducts = () => {
  const {mutate, isLoading} = useMutation(GetServices);
  const [services, setServices] = useState([]);

  const handleFilters = (value: {name: string; priceFrom: string; priceTo: string}) => {
    mutate(
      {...value},
      {
        onSuccess: (data) => {
          if (!data?.services) return;

          setServices(data?.services);
        }
      }
    );
  };

  useEffect(() => {
    handleFilters({name: '', priceFrom: '', priceTo: ''});
  }, []);

  return (
    <div>
      <SearchBar handleFilters={handleFilters} />
      <ProductsList title='Список сервисов' productsList={services} isLoading={isLoading} />
    </div>
  );
};
