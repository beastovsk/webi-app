'use client';

import {useQuery} from 'react-query';
import {GetOrders} from '../../api';
import {useEffect, useState} from 'react';

import s from './Orders.module.scss';
import Link from 'next/link';
import {OrderStatus} from '../../enums';
import Loading from '@/app/loading';

export const Orders = () => {
  const {data, isSuccess} = useQuery('orders', () => GetOrders());
  const [orders, setOrders] = useState([]);
  const profileId = localStorage.getItem('id');

  useEffect(() => {
    if (!isSuccess) return;

    setOrders(data?.orders);
  }, [isSuccess]);

  return (
    <div>
      <div className='flex justify-between items-center md:flex-col md:items-start'>
        <h2 className='font-medium text-xl'>Список заказов</h2>
      </div>

      {isSuccess ? (
        <div className={s.list}>
          {orders.map(({id, service_id, buyer_id, status}) => (
            <Link href={`/marketplace/order?orderId=${id}`} key={id} className={s.item}>
              <h3>Заказ №{id}</h3>
              <p className='text-sm text-[#6C7AA0] mt-3'>тип: {buyer_id == profileId ? 'Покупка' : 'Продажа'}</p>
              <p className='text-sm text-[#6C7AA0]'>статус: {OrderStatus[status]}</p>
            </Link>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
