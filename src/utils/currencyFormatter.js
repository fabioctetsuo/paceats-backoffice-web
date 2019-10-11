import currency from 'currency.js';

const config = {
  separator: '.',
  decimal: ',',
  symbol: 'R$',
  formatWithSymbol: true,
  precision: 2,
};

const BRL = (value) => currency(value, config);

export const formatMoney = (value) => console.log(value) || BRL(value, config).format(true);
