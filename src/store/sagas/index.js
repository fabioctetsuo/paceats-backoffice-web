import { all, takeLatest } from 'redux-saga/effects';
import { getOrders } from './orders';
import { Types as OrderTypes } from '../ducks/orders';
import { Types as OrderStatusTypes } from '../ducks/orderStatus';
import { Types as AuthTypes } from '../ducks/authentication';
import { authenticateUser } from './authentication';
import { changeOrderStatus } from './orderStatus';

export default function* rootSaga() {
  yield all([
    takeLatest(OrderTypes.ADD_REQUEST, getOrders),
    takeLatest(OrderStatusTypes.ADD_REQUEST, changeOrderStatus),
    takeLatest(AuthTypes.ADD_REQUEST, authenticateUser),
  ]);
}
