import currency from 'currency.js';

const config = {
  separator: '.',
  decimal: ',',
  symbol: 'R$',
  formatWithSymbol: true,
};

const BRL = (value) => currency(value, config);

export const formatMoney = (value) => BRL(value, config).format(true);