import {getCookie} from 'cookies-next';
import Link from 'next/link';
import React, {FC} from 'react';
import {Logo} from '../UI/Logo/Logo';
import s from './Footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  const token = getCookie('token');
  const linksList = [
    {
      title: 'Домашняя',
      links: [
        {
          label: 'О маркетплейсе',
          href: '/#marketplace'
        },
        {
          label: 'Услуги',
          href: '/#services'
        },
        {
          label: 'Обратная связь',
          href: '/#feedback'
        }
      ]
    },
    {
      title: 'Marketplace',
      links: [
        {
          label: 'Поиск товаров',
          href: '/marketplace/search'
        },
        {
          label: 'Личный кабинет',
          href: token ? '/marketplace/profile' : '/marketplace/auth'
        },
        {
          label: 'Настройки',
          href: token ? '/marketplace/profile/settings' : '/marketplace/auth'
        }
      ]
    }
  ];

  return (
    <div className={s.footer}>
      <div className={s.wrapper}>
        <div className='flex justify-between md:flex-col'>
          <div className='opacity-80'>
            <Logo />
          </div>
          <div className='flex gap-20 flex-grow justify-center md:justify-start lg:mt-10'>
            {linksList.map(({links, title}) => (
              <div>
                <h2 className='text-lg mb-3'>{title}</h2>
                <div className='flex flex-col gap-1 text-gray-400'>
                  {links.map(({href, label}) => (
                    <Link href={href}>{label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-between border-t-[1px] border-t-gray-500 border-opacity-10 mt-[20px] pt-[20px]'>
          <h2 className='text-gray-400 font-medium'>© Webi Marketplace</h2>
          <div className='flex gap-3'>
            <Link href={'https://t.me/beastovsk'} target='_blank'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='30px' height='30px' className={s.icon}>
                <path d='M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z' />
              </svg>
            </Link>
            <Link href={'https://vk.com/webi_marketplace'}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='30px' height='30px' className={s.icon}>
                <path d='M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23c12.683,0,23-10.318,23-23S37.683,2,25,2z M34.973,29.535 c2.237,1.986,2.702,2.695,2.778,2.816C38.678,33.821,36.723,34,36.723,34h-4.12c0,0-1.003,0.011-1.86-0.557 c-1.397-0.915-2.86-2.689-3.888-2.381C25.992,31.32,26,32.486,26,33.483C26,33.84,25.693,34,25,34s-0.981,0-1.288,0 c-2.257,0-4.706-0.76-7.149-3.313c-3.456-3.609-6.487-10.879-6.487-10.879s-0.179-0.366,0.016-0.589 c0.221-0.25,0.822-0.218,0.822-0.218L14.909,19c0,0,0.376,0.071,0.646,0.261c0.223,0.156,0.347,0.454,0.347,0.454 s0.671,2.216,1.526,3.629c1.67,2.758,2.447,2.828,3.014,2.531C21.27,25.445,21,22.513,21,22.513s0.037-1.259-0.395-1.82 c-0.333-0.434-0.97-0.665-1.248-0.701c-0.225-0.029,0.151-0.423,0.63-0.648C20.627,19.059,21.498,18.986,23,19 c1.169,0.011,1.506,0.081,1.962,0.186C26.341,19.504,26,20.343,26,23.289c0,0.944-0.13,2.271,0.582,2.711 c0.307,0.19,1.359,0.422,3.231-2.618c0.889-1.442,1.596-3.834,1.596-3.834s0.146-0.263,0.373-0.393 c0.232-0.133,0.225-0.13,0.543-0.13S35.832,19,36.532,19c0.699,0,1.355-0.008,1.468,0.402c0.162,0.589-0.516,2.607-2.234,4.797 C32.943,27.793,32.63,27.457,34.973,29.535z' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
