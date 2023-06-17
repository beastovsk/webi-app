import s from './Btn.module.scss';
import React, {ComponentProps, ElementType} from 'react';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: any;
  htmlTypeButton?: string;
  tag?: E;
  primary?: boolean;
  danger?: boolean;
  className?: string;
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
  ...otherProps
}: ButtonProps<E>) {
  const TagName = tag || defaultElement;

  return (
    <TagName className={`${danger && s.danger} ${primary && s.primary} ${s.button} ${className}`} {...otherProps}>
      {children}
    </TagName>
  );
}
