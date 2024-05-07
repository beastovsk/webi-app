'use client';

import {Form, Input, Modal, Space} from 'antd';
import {useStore} from '../store';
import {useState} from 'react';
import Btn from '@/components/UI/Btn/Btn';

import s from './CalculatePrice.module.scss';
import {animated, useInView} from '@react-spring/web';
import {useMutation} from 'react-query';
import {SendContact} from '../api';
import {customNotification} from '@/src/helpers/customNotification';

export const CalculatePrice = () => {
  const {mutate} = useMutation(SendContact);
  const {openCalculatePrice, setOpenCalculatePrice} = useStore();
  const [step, setStep] = useState('type');
  const [form, setForm] = useState({
    type: '',
    projectStatus: '',
    pageInfo: '',
    companyNiche: '',
    projectDescription: '',
    projectBudjet: ''
  });

  const handleAnswer = ({step, value}) => {
    setForm((form) => ({...form, [step]: value}));

    switch (step) {
      case 'type':
        setStep('projectStatus');
        break;
      case 'projectStatus':
        setStep('pageInfo');
        break;
      case 'pageInfo':
        setStep('companyNiche');
        break;
      case 'companyNiche':
        setStep('projectDescription');
        break;
      case 'projectDescription':
        setStep('projectBudjet');
        break;

      case 'projectBudjet':
        setStep('contact');
        break;

      default:
        break;
    }
  };

  const createContact = (value) => {
    const contactForm = value;
    const orderForm = form;

    mutate(
      {
        contactForm,
        orderForm
      },
      {
        onSuccess: (data) => {
          if (!data?.message) return;

          customNotification('success', 'top', 'Информация', data?.message);
          setOpenCalculatePrice(false);
          setStep('type');
        }
      }
    );
  };

  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0, scale: 0.95, x: 20},
      to: {opacity: 1, scale: 1, x: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <Modal
      open={openCalculatePrice}
      onCancel={() => {
        setOpenCalculatePrice(false);
        setStep('type');
      }}
      footer={null}
    >
      {step == 'type' ? (
        <animated.div ref={ref}>
          <h2>Какой тип сайта вам нужен?</h2>

          <div className='flex flex-col mt-10 gap-5'>
            <div className={s.item} onClick={() => handleAnswer({step: 'type', value: 'single_page'})}>
              Одностраничный статический сайт
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'type', value: 'multiple_page'})}>
              Многостраничный статический сайт
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'type', value: 'e-commerce'})}>
              Интернет-магазин
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'type', value: 'service'})}>
              Онлайн-сервис
            </div>
          </div>
        </animated.div>
      ) : null}
      {step == 'projectStatus' ? (
        <animated.div ref={ref}>
          <h2>У вас есть дизайн, прототип сайта или техническое задание?</h2>

          <div className='flex flex-col mt-10 gap-5'>
            <div className={s.item} onClick={() => handleAnswer({step: 'projectStatus', value: 'ready_design'})}>
              Да, у меня есть готовый дизайн
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'projectStatus', value: 'ready_prototype'})}>
              У меня есть готовый прототип
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'projectStatus', value: 'tech_task'})}>
              Есть техническое задание
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'projectStatus', value: 'free_task'})}>
              Ничего нет, делаем сайт с нуля
            </div>
          </div>
        </animated.div>
      ) : null}
      {step == 'pageInfo' ? (
        <animated.div ref={ref}>
          <h2>Cколько страниц планируется у сайта?</h2>

          <div className='flex flex-col mt-10 gap-5'>
            <div className={s.item} onClick={() => handleAnswer({step: 'pageInfo', value: '1to5'})}>
              1-5 страниц
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'pageInfo', value: '5to10'})}>
              5-10 страниц
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'pageInfo', value: '10to20'})}>
              10-20 страниц
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'pageInfo', value: '20+'})}>
              {'>'}20 страниц
            </div>
          </div>
        </animated.div>
      ) : null}
      {step == 'companyNiche' ? (
        <animated.div ref={ref}>
          <h2>Ниша / Деятельность компании</h2>

          <Form onFinish={(value) => handleAnswer({step: 'companyNiche', value: value.niche})}>
            <Form.Item
              name='niche'
              className='flex flex-col mt-10 gap-5'
              rules={[{required: true, message: 'Заполните поле'}]}
            >
              <Input.TextArea autoSize={{minRows: 3, maxRows: 5}} />
            </Form.Item>

            <Space className='mt-10 flex gap-3 justify-end'>
              <Btn primary onClick={() => setStep('pageInfo')}>
                Назад
              </Btn>
              <Btn htmlTypeButton='submit'>Далее</Btn>
            </Space>
          </Form>
        </animated.div>
      ) : null}
      {step == 'projectDescription' ? (
        <animated.div ref={ref}>
          <h2>Опишите задачу</h2>
          <Form onFinish={(value) => handleAnswer({step: 'projectDescription', value: value.description})}>
            <Form.Item
              name='description'
              className='flex flex-col mt-10 gap-5'
              rules={[{required: true, message: 'Заполните поле'}]}
            >
              <Input.TextArea autoSize={{minRows: 3, maxRows: 5}} />
            </Form.Item>

            <Space className='mt-10 flex gap-3 justify-end'>
              <Btn primary onClick={() => setStep('companyNiche')}>
                Назад
              </Btn>
              <Btn htmlTypeButton='submit'>Далее</Btn>
            </Space>
          </Form>
        </animated.div>
      ) : null}
      {step == 'projectBudjet' ? (
        <animated.div ref={ref}>
          <h2>Укажите бюджет</h2>

          <div className='flex flex-col mt-10 gap-5'>
            <div className={s.item} onClick={() => handleAnswer({step: 'projectBudjet', value: '100k-250k'})}>
              от 100 тыс до 250 тыс
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'projectBudjet', value: '250k-500k'})}>
              от 250 тыс до 500 тыс
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'projectBudjet', value: '500k-1kk'})}>
              от 500 тыс до 1 млн
            </div>
            <div className={s.item} onClick={() => handleAnswer({step: 'projectBudjet', value: '1kk+'})}>
              Более 1 млн
            </div>
          </div>
        </animated.div>
      ) : null}
      {step == 'contact' ? (
        <animated.div ref={ref}>
          <h2>Оставьте заявку и мы вам перезвоним в ближайшее время</h2>

          <Form onFinish={createContact} layout='vertical'>
            <Form.Item
              name='name'
              label='Имя'
              className='flex flex-col mt-10 gap-5'
              rules={[{required: true, message: 'Заполните поле'}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='telegram'
              label='Ваш контакт в телеграм (@example)'
              className='flex flex-col mt-10 gap-5'
              rules={[{required: true, message: 'Заполните поле'}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='message'
              label='Сообщение (опционально)'
              className='flex flex-col mt-10 gap-5'
              rules={[{required: true, message: 'Заполните поле'}]}
            >
              <Input.TextArea autoSize={{minRows: 3, maxRows: 5}} />
            </Form.Item>

            <Space className='mt-10 flex gap-3 justify-end'>
              <Btn primary onClick={() => setStep('projectBudjet')}>
                Назад
              </Btn>
              <Btn htmlTypeButton='submit'>Отправить</Btn>
            </Space>
          </Form>
        </animated.div>
      ) : null}
    </Modal>
  );
};
