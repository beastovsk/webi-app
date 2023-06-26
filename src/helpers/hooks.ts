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
