'use client';

import React, {FC, useState} from 'react';
import s from './CreateForm.module.scss';
import {Button, Form, Input, InputNumber, Upload} from 'antd';
import type {UploadFile, UploadProps} from 'antd';
import ImgCrop from 'antd-img-crop';
import {onPreview} from '@/src/helpers/onPreview';
import {CustomEditor} from '@/components/CustomEditor';
import {animated, useInView} from '@react-spring/web';

interface CreateFormProps {}

export const CreateForm: FC<CreateFormProps> = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [description, setDescription] = useState('');
  const onChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
    setFileList(newFileList);
  };

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const onFinish = (value) => {
    const request = {...value, description, images: fileList.length ? fileList.map((file) => file.thumbUrl) : []};

    console.log(request);
  };

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <h1>Создание товара</h1>

      <Form layout='vertical' className='mt-10' onFinish={onFinish}>
        <Form.Item name='name' label='Название'>
          <Input />
        </Form.Item>
        <Form.Item label='Описание'>
          <CustomEditor propsValue={description} getValue={(value) => setDescription(value)} />{' '}
        </Form.Item>
        <Form.Item name='previewLink' label='Ссылка на развернутый проект'>
          <Input />
        </Form.Item>
        <Form.Item name='videoLink' label='Ссылка на видео'>
          <Input />
        </Form.Item>{' '}
        <Form.Item name='contact' label='Контакт для связи'>
          <Input />
        </Form.Item>
        <Form.Item label='Цена' name='price'>
          <InputNumber<number>
            formatter={(value) => `₽ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            // eslint-disable-next-line no-useless-escape
            parser={(value) => value?.replace(/\₽\s?|(,*)/g, '') as unknown as number}
          />
        </Form.Item>
        <Form.Item label='Изображения товара'>
          <ImgCrop rotationSlider>
            <Upload listType='picture-card' fileList={fileList} onChange={onChange} onPreview={onPreview}>
              {fileList.length < 5 && '+ Upload'}
            </Upload>
          </ImgCrop>
        </Form.Item>
        <Button htmlType='submit'>Создать</Button>
      </Form>
    </animated.div>
  );
};
