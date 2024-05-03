'use client';

import React, {FC, useState} from 'react';
import s from './CreateForm.module.scss';
import {Button, Form, Input, InputNumber, Upload} from 'antd';
import type {UploadFile, UploadProps} from 'antd';
import ImgCrop from 'antd-img-crop';
import {onPreview} from '@/src/helpers/onPreview';
import {CustomEditor} from '@/components/CustomEditor';
import {animated, useInView} from '@react-spring/web';
import {MutateFunction, UseMutateFunction, useMutation} from 'react-query';
import {CreateService} from '../../api';
import {IService} from '../../types';
import {customNotification} from '@/src/helpers/customNotification';
import Btn from '@/components/UI/Btn/Btn';
import {useRouter} from 'next/navigation';
import {UploadOutlined} from '@ant-design/icons';

interface CreateFormProps {
  mutate: UseMutateFunction<Response, unknown, any, unknown>;
  isLoading: boolean;
  service?: IService;
}

export const CreateForm: FC<CreateFormProps> = ({mutate, isLoading, service}) => {
  const router = useRouter();
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
  console.log(fileList);
  const onFinish = (value) => {
    const request = {...value, description, images: fileList.length ? fileList.map((file) => file.thumbUrl) : []};

    mutate(request, {
      onSuccess: (data) => {
        data.json().then((data) => {
          if (!data?.message) return;

          if (data?.message === 'Сервис успешно создан') {
            router.push('/marketplace');
          }

          customNotification('info', 'top', 'Информация', data?.message);
        });
      }
    });
  };

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <h1>{service ? 'Редактирование' : 'Создание'} товара</h1>

      <Form layout='vertical' className='mt-10' onFinish={onFinish}>
        <Form.Item name='title' label='Название'>
          <Input />
        </Form.Item>
        <Form.Item label='Описание'>
          <CustomEditor propsValue={description} getValue={(value) => setDescription(value)} />
        </Form.Item>
        <Form.Item name='previewLink' label='Ссылка на развернутый проект'>
          <Input />
        </Form.Item>
        <Form.Item name='videoLink' label='Ссылка на видео'>
          <Input />
        </Form.Item>
        <Form.Item name='telegram' label='Контакт для связи'>
          <Input />
        </Form.Item>
        <Form.Item label='Цена' name='price'>
          <InputNumber<number>
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            // eslint-disable-next-line no-useless-escape
            parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
          />
        </Form.Item>
        <Form.Item label='Изображения товара'>
          <Upload.Dragger
            beforeUpload={() => false}
            listType='picture'
            maxCount={3}
            multiple
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
            previewFile={onPreview}
          >
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload.Dragger>
        </Form.Item>
        <Btn htmlTypeButton='submit' loading={isLoading}>
          Создать
        </Btn>
      </Form>
    </animated.div>
  );
};
