import React, {FC} from 'react';
import s from './TemplateName.module.scss';

interface TemplateNameProps {}

export const TemplateName: FC<TemplateNameProps> = (props) => {
  return <div className={s.templateName}></div>;
};
