import s from './Banner.module.scss';
import cn from 'classnames';

export const Banner = ({title, message, type}) => {
  return (
    <div
      className={cn(s.container, {
        [s.danger]: type === 'danger',
        [s.primary]: type === 'primary',
        [s.success]: type === 'success'
      })}
    >
      <h2>{title}</h2>
      <p className='text-[#6C7AA0] text-sm mt-2'>{message}</p>
    </div>
  );
};
