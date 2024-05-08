import {ProductDetail} from '@/modules/Marketplace/components/ProductDetail/ProductDetail';
import React from 'react';

export default async function Page({params}: {params: {id: string}}) {
  return <ProductDetail id={params.id} />;
}
