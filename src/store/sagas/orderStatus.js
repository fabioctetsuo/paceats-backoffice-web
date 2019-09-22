import { call, put } from 'redux-saga/effects';
import { paceatsApi } from '../../services/api';
import { getOrders } from './orders';
import { ActionCreators as OrderStatusActions } from '../ducks/orderStatus';

export function* changeOrderStatus({ payload: { orderStatus } }) {
  try {
    const { data } = yield call(paceatsApi.put, '/order/status', orderStatus);
    yield put(OrderStatusActions.addOrderStatusSuccess(data));
    getOrders({ payload: { restaurantId: orderStatus._id } });
  } catch (err) {
    yield put(
      OrderStatusActions.addOrderStatusFailure('Erro ao atualizar o status.'),
    );
  }
}
