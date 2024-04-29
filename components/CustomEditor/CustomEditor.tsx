import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import s from './CustomEditor.module.scss';

type CustomEditorProps = {
  propsValue?: string | null;
  getValue: (value: string) => void;
};

export const CustomEditor = ({propsValue, getValue}: CustomEditorProps) => {
  const [value, setValue] = useState(propsValue || '');

  const handleChange = (e) => {
    setValue(e);
  };

  useEffect(() => {
    getValue(value);
  }, [value]);

  return <ReactQuill theme='snow' className={s.editor} value={value} onChange={handleChange} />;
};
