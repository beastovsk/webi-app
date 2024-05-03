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
  const RURubles = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'USD'
  });

  return RURubles.format(price);
};

export const getParsedDate = (date: string) => {
  return new Intl.DateTimeFormat('ru-RU', {month: 'long', day: 'numeric', year: 'numeric'}).format(new Date(date));
};
