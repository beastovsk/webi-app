import s from './Btn.module.scss';
import React, {ComponentProps, ElementType} from 'react';
import {LoadingOutlined} from '@ant-design/icons';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: any;
  htmlTypeButton?: string;
  tag?: E;
  primary?: boolean;
  danger?: boolean;
  className?: string;
  loading?: boolean;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export default function Btn<E extends ElementType = typeof defaultElement>({
  children,
  tag,
  danger,
  primary,
  htmlTypeButton,
  className,
  loading,
  disabled,
  ...otherProps
}: ButtonProps<E>) {
  const TagName = tag || defaultElement;

  return (
    <TagName
      disabled={disabled}
      className={`${disabled && s.disabled} ${danger && s.danger} ${primary && s.primary} ${s.button} ${className}`}
      {...otherProps}
    >
      <span className='flex gap-2 items-center justify-center transition-[all]'>
        {loading ? <LoadingOutlined className={s.spinner} /> : null} {children}
      </span>
    </TagName>
  );
}
