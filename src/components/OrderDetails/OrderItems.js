import React from 'react';
import PropTypes from 'prop-types';
import { formatMoney } from '../../utils/currencyFormatter';
import { SubHeadlineText } from '../Typography';
import {
  OrderItems,
  ItemContainer,
  ItemWrapper,
  TextDetails,
} from './styles';

const Items = ({
  items,
  discount,
  totalToPay,
  extraDetails,
}) => {
  const itemsMap = [
    {
      label: 'Subtotal: ',
      value: items.reduce(
        (prevVal, { quantity, price }) => prevVal + quantity * price,
        0,
      ),
    },
    {
      label: 'Desconto: ',
      value: discount,
    },
    {
      label: 'Valor total: ',
      value: totalToPay,
    },
  ];
  return (
    <OrderItems>
      <SubHeadlineText>Items</SubHeadlineText>
      <ItemContainer>
        {items.map((item) => (
          <ItemWrapper key={item._id}>
            <TextDetails>
              {item.quantity}x - {item.name}
            </TextDetails>
            <TextDetails>{formatMoney(item.price)}</TextDetails>
          </ItemWrapper>
        ))}
      </ItemContainer>

      <ItemContainer>
        <ItemWrapper>
          <TextDetails>Observação: </TextDetails>
          <TextDetails>{extraDetails}</TextDetails>
        </ItemWrapper>
      </ItemContainer>

      {itemsMap.map((e) => (
        <ItemContainer>
          <ItemWrapper>
            <TextDetails>{e.label}</TextDetails>
            <TextDetails>{formatMoney(e.value)}</TextDetails>
          </ItemWrapper>
        </ItemContainer>
      ))}
    </OrderItems>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf().isRequired,
  discount: PropTypes.number.isRequired,
  totalToPay: PropTypes.number.isRequired,
  extraDetails: PropTypes.string,
};

Items.defaultProps = {
  extraDetails: '',
};

export default Items;
