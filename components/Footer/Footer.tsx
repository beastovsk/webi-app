import React, {FC} from 'react';
import s from './Footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  return (
    <div className={s.footer}>
      <div className={s.wrapper}>

        <h1 className='text-2xl'>Webi</h1>
        <div>Link</div>
      </div>
    </div>
  );
};
