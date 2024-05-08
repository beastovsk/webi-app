'use client';

import {useMutation} from 'react-query';
import {CreateForm} from '../CreateForm/CreateForm';
import {GetServiceById, UpdateService} from '../../api';
import {useEffect, useState} from 'react';
import { useSearchParams} from 'next/navigation';
import Loading from '@/app/loading';

export const UpdateServiceForm = () => {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('id');
  const {mutate, isLoading} = useMutation(UpdateService);
  const {mutate: getService, isSuccess} = useMutation(GetServiceById);
  const [service, setService] = useState(null);

  useEffect(() => {
    getService(
      {serviceId},
      {
        onSuccess: (data) => {
          if (!data?.service) return;

          setService(data.service);
        }
      }
    );
  }, []);

  return <div>{isSuccess ? <CreateForm mutate={mutate} isLoading={isLoading} service={service} /> : <Loading />}</div>;
};
