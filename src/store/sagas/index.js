import { all, takeLatest } from 'redux-saga/effects';
import { getOrders } from './orders';
import { Types as OrderTypes } from '../ducks/orders';
import { Types as OrderStatusTypes } from '../ducks/orderStatus';
import { Types as AuthTypes } from '../ducks/authentication';
import { Types as RestarauntTypes } from '../ducks/restaurant';
import { Types as RestarauntPlatesTypes } from '../ducks/plates';
import { authenticateUser } from './authentication';
import { changeOrderStatus } from './orderStatus';
import { getRestaurant } from './restaurant';
import { createPlate, deletePlate, updatePlate } from './plates';

export default function* rootSaga() {
  yield all([
    takeLatest(OrderTypes.ADD_REQUEST, getOrders),
    takeLatest(OrderStatusTypes.ADD_REQUEST, changeOrderStatus),
    takeLatest(AuthTypes.ADD_REQUEST, authenticateUser),
    takeLatest(RestarauntTypes.ADD_REQUEST, getRestaurant),
    takeLatest(RestarauntPlatesTypes.ADD_REQUEST, createPlate),
    takeLatest(RestarauntPlatesTypes.REMOVE_REQUEST, deletePlate),
    takeLatest(RestarauntPlatesTypes.UPDATE_REQUEST, updatePlate),
  ]);
}
