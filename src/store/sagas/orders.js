import { call, put } from 'redux-saga/effects';
import { paceatsApi } from '../../services/api';
import { ActionCreators as OrderActions } from '../ducks/orders';

export function* getOrders({ payload: { restaurantId } }) {
  try {
    const { data } = yield call(
      paceatsApi.get,
      `/order/restaurant/${restaurantId}`,
    );
    yield put(OrderActions.addOrderSuccess(data));
  } catch (err) {
    yield put(
      OrderActions.addOrderFailure('Erro ao buscar pedidos, tente novamente.'),
    );
  }
}
