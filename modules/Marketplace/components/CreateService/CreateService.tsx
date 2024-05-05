'use client'

import {useMutation} from 'react-query';
import {CreateForm} from '../CreateForm/CreateForm';
import {CreateService} from '../../api';

export const CreateServiceForm = () => {
  const {mutate, isLoading} = useMutation(CreateService);

  return <CreateForm mutate={mutate} isLoading={isLoading} />;
};
