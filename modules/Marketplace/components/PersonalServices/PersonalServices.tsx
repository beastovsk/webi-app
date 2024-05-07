'use client';

import {useMutation} from 'react-query';
import {GetPersonalServices} from '../../api';
import {useEffect, useState} from 'react';
import {ProductsList} from '../ProductsList/ProductsList';

export const PersonalServices = () => {
  const {mutate, isLoading} = useMutation(GetPersonalServices);
  const [services, setServices] = useState([]);

  useEffect(() => {
    mutate({} as any, {
      onSuccess: (data) => {
        if (!data?.services?.length) return;

        setServices(data?.services);
      }
    });
  }, []);

  return (
    <div>
      <ProductsList title={'Мои сервисы'} productsList={services} isLoading={isLoading} />
    </div>
  );
};
