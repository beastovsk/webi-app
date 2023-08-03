export const getTypeName = (type: number) => {
  switch (type) {
    case 0:
      return 'веб-сайт';
    case 1:
      return 'веб-приложение';
    case 2:
      return 'модуль';

    default:
      return 'модуль';
  }
};

export const formatProductPrice = (price: number) => {
  let RURubles = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB'
  });

  return RURubles.format(price);
};

export const getParsedDate = (date: string) => {
  return new Intl.DateTimeFormat('ru-RU', {month: 'long', day: 'numeric', year: 'numeric'}).format(new Date(date));
};

export const getProductsList = () => {
  const data = {
    results: [
      {
        id: 1,
        technology: [
          {id: 1, label: 'Next.js'},
          {id: 2, label: 'Typescript'}
        ],
        modules: [
          {id: 1, label: 'Главная страница'},
          {id: 2, label: 'Форма обратной связи'}
        ],
        type: 1,
        name: 'Лендинг-портфолио',
        price: 23000,
        link: 'google.com',
        publication_date: new Date(),
        description: 'Продающий одностраничный сайт для продвижения личного бренда в интернете',
        small_image: '',
        full_image: ''
      },
      {
        id: 2,
        technology: [
          {id: 1, label: 'Next.js'},
          {id: 2, label: 'Typescript'}
        ],
        modules: [
          {id: 1, label: 'Форма авторизации/регистрации'},
          {id: 2, label: 'Главный функционал'},
          {id: 3, label: 'Мессенджер'}
        ],
        type: 2,
        name: 'Соц. сеть',
        price: 4200000,
        link: 'google.com',
        publication_date: new Date(),
        description: 'Многофункциональная соц. сеть',
        small_image: '',
        full_image: ''
      }
    ]
  };
  return data;
};
