import React, {FC, HTMLAttributes} from 'react';
import s from './Title.module.scss';

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Title: FC<TitleProps> = (props) => {
  const {children, className} = props;
  return (
    <h2 {...props} className={`${s.title} ${className}`}>
      {children}
    </h2>
  );
};
