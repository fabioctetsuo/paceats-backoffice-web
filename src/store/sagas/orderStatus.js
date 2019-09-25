import { call, put } from 'redux-saga/effects';
import { paceatsApi } from '../../services/api';
import { ActionCreators as OrderStatusActions } from '../ducks/orderStatus';
import { ActionCreators as OrderActions } from '../ducks/orders';
import { ActionCreators as ToastActions } from '../ducks/toast';

export function* changeOrderStatus({ payload: { orderStatus } }) {
  try {
    const { data } = yield call(paceatsApi.put, '/order/status', orderStatus);
    yield put(OrderStatusActions.addOrderStatusSuccess(data));
    yield put(OrderActions.addOrderRequest());
    yield put(ToastActions.addSuccessMessage('Pedido atualizado com sucesso!'));
  } catch (err) {
    yield put(
      OrderStatusActions.addOrderStatusFailure('Erro ao atualizar o status.'),
    );
    yield put(ToastActions.addErrorMessage('Erro ao atualizar status do pedido!'));
  }
}
