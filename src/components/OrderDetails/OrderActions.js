import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import SelectBox from '../SelectBox';
import { SubHeadlineText } from '../Typography';

import { ActionCreators as OrderStatusActions } from '../../store/ducks/orderStatus';
import { ORDER_CODE, orderStatusMap } from '../../utils/getOrderStatus';

import { OrderActions, ActionsWrapper, CustomButtom } from './styles';

const Actions = ({ order, optionSelected, setSelected }) => {
  const dispatch = useDispatch();
  return (
    <OrderActions>
      <SubHeadlineText>Alterar status</SubHeadlineText>
      <SelectBox
        placeholder="Selecione um status"
        options={orderStatusMap.filter(
          (e) => e.value !== ORDER_CODE.CUSTOMER_CANCELED,
        )}
        value={optionSelected}
        isOptionDisabled={(option) => option.value <= optionSelected.value}
        onChange={(e) => setSelected(e)}
      />
      <ActionsWrapper>
        <CustomButtom onClick={() => {
          dispatch(OrderStatusActions.addOrderStatusRequest({
            _id: order._id,
            newStatus: optionSelected.value,
          }));
        }}
        >
          Enviar
        </CustomButtom>
      </ActionsWrapper>
    </OrderActions>
  );
};

Actions.propTypes = {
  optionSelected: PropTypes.shape().isRequired,
  setSelected: PropTypes.func.isRequired,
  order: PropTypes.shape().isRequired,

};

export default Actions;
