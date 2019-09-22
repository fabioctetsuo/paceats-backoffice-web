import { call, put } from 'redux-saga/effects';
import { paceatsApi } from '../../services/api';
import { ActionCreators as RestaurantActions } from '../ducks/restaurant';

export function* getRestaurant({ payload: { restaurantId } }) {
  try {
    const { data } = yield call(
      paceatsApi.get,
      `/restaurant/details/${restaurantId}`,
    );
    yield put(RestaurantActions.addRestaurantSuccess(data));
  } catch (err) {
    yield put(
      RestaurantActions.addRestaurantFailure('Erro ao buscar pedidos, tente novamente.'),
    );
  }
}
