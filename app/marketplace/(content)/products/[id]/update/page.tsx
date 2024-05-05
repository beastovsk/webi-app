import {UpdateServiceForm} from '@/modules/Marketplace/components/UpdateService/UpdateService';
import React from 'react';

export default async function Page({params}: {params: {id: string}}) {
  return <UpdateServiceForm />;
}
