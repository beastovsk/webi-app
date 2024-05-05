'use client';

import React, {FC, useEffect, useState} from 'react';
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
import {usePathname, useRouter} from 'next/navigation';
import {UploadOutlined} from '@ant-design/icons';
import {useForm} from 'antd/es/form/Form';
import Loading from '@/app/loading';

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
  const [isServiceSuccess, setIsServiceSuccess] = useState(false);
  const [form] = Form.useForm();

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0.7, y: 40},
      to: {opacity: 1, y: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  const onFinish = (value) => {
    const request = {...value, description, images: fileList.length ? fileList.map((file) => file.thumbUrl) : []};

    mutate(request, {
      onSuccess: (data) => {
        data.json().then((data) => {
          if (!data?.message) return;

          if (data?.message === 'Сервис успешно создан') {
            router.push('/marketplace');
          }

          if (data?.message === 'Сервис успешно изменен') {
            router.push('/marketplace/profile');
          }

          customNotification('info', 'top', 'Информация', data?.message);
        });
      }
    });
  };

  useEffect(() => {
    if (!service) return setIsServiceSuccess(true);
    const notEditableKeys = ['id', 'is_highlighted', 'is_premium', 'is_visible', 'owner_id'];

    Object.entries(service).map(([key, value]) => {
      if (notEditableKeys.includes(key)) return;

      switch (key) {
        case 'description':
          setDescription(value);
          break;
        case 'video_link':
          form.setFieldValue('videoLink', value);
          break;
        case 'preview_link':
          form.setFieldValue('previewLink', value);
          break;
        case 'images':
          setFileList(() => value.map((image) => ({thumbUrl: image})));
          break;
      }

      form.setFieldValue(key, value);

      setIsServiceSuccess(true);
    });

    console.log(service);
  }, [service]);

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <h1>{service ? 'Редактирование' : 'Создание'} товара</h1>

      {isServiceSuccess ? (
        <Form form={form} layout='vertical' className='mt-10' onFinish={onFinish}>
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
              // @ts-ignore
              previewFile={onPreview}
            >
              <Button icon={<UploadOutlined />}>Загрузить</Button>
            </Upload.Dragger>
          </Form.Item>
          <Btn htmlTypeButton='submit' loading={isLoading}>
            {service ? 'Сохранить' : 'Создать'}{' '}
          </Btn>
        </Form>
      ) : (
        <Loading />
      )}
    </animated.div>
  );
};
