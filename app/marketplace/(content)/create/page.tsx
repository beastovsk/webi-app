'use client';

import {CreateService} from '@/modules/Marketplace/api';
import {CreateForm} from '@/modules/Marketplace/components/CreateForm/CreateForm';
import React from 'react';
import {useMutation} from 'react-query';

export default function Page() {
  const {mutate, isLoading} = useMutation(CreateService);
  return (
    <>
      <CreateForm mutate={mutate} isLoading={isLoading} />
    </>
  );
}
