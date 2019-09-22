export const ORDER_CODE = {
  WAITING_APPROVAL: 0,
  IN_PROGRESS: 1,
  WAITING_WITHDRAWN: 2,
  RESTAURANT_CANCELED: 3,
  CUSTOMER_CANCELED: 4,
  FINISHED: 5,
};

export const orderStatusMap = [
  {
    value: ORDER_CODE.WAITING_APPROVAL,
    label: 'Aguardando aprovação',
    color: '#000',
    background: '#d6d6d6',
  },
  {
    value: ORDER_CODE.IN_PROGRESS,
    label: 'Em andamento',
    color: '#fff',
    background: '#5397b0',
  },
  {
    value: ORDER_CODE.WAITING_WITHDRAWN,
    label: 'Aguardando retirada',
    color: '#fff',
    background: '#5dc75f',
  },
  {
    value: ORDER_CODE.RESTAURANT_CANCELED,
    label: 'Cancelado pelo restaurante',
    color: '#fff',
    background: '#4c4d4c',
  },
  {
    value: ORDER_CODE.CUSTOMER_CANCELED,
    label: 'Cancelado pelo cliente',
    color: '#fff',
    background: '#4c4d4c',
  },
  {
    value: ORDER_CODE.FINISHED,
    label: 'Concluído',
    color: '#fff',
    background: '#5dc75f',
  },
];

export const getOrderStatusByCode = (orderStatusNumber) => {
  const orderStatus = orderStatusMap.find((o) => o.value === orderStatusNumber);
  return orderStatus;
};

export const getOrderStatusNumbers = (orders) => {
  const received = orders.filter(
    ({ status }) => status === ORDER_CODE.WAITING_APPROVAL,
  ).length;
  const finished = orders.filter(({ status }) => status === ORDER_CODE.FINISHED)
    .length;
  const progress = orders.filter(
    ({ status }) => status === ORDER_CODE.IN_PROGRESS || status === ORDER_CODE.WAITING_WITHDRAWN,
  ).length;
  return { received, finished, progress };
};
