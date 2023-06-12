import React, {FC} from 'react';
import s from './Logo.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  // src: string;
}

export const Logo: FC<LogoProps> = () => {
  return (
    <Link href={'/'}>
      {/* <Image width={100} height={60} className={s.logo} src={src} alt={''} priority={true} /> */}
      <h2 className='text-3xl font-medium'>Webi</h2>
    </Link>
  );
};
