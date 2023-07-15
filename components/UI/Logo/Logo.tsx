import React, {FC} from 'react';
import s from './Logo.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/logo.svg';
import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';

interface LogoProps {
  // src: string;
}

export const Logo: FC<LogoProps> = () => {
  return (
    <Link href={'/'} className='cursor-pointer z-30 hover:opacity-70 transition-opacity'>
      <PreloaderImage width={100} height={100} className={s.logo} src={logo} alt={'Logo'} priority={true} />
    </Link>
  );
};
