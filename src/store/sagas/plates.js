import { call, put } from 'redux-saga/effects';
import { removeEmpty } from '../../utils/removeEmpty';
import { paceatsApi } from '../../services/api';
import { ActionCreators as PlatesActions } from '../ducks/plates';
import { ActionCreators as RestaurantActions } from '../ducks/restaurant';
import { ActionCreators as ToastActions } from '../ducks/toast';

export function* createPlate({ payload: { restaurantPlates } }) {
  try {
    console.log('create plate');
    const plates = restaurantPlates.plates.map((plate) => removeEmpty(plate));
    const { data } = yield call(paceatsApi.post, '/plate', {
      ...restaurantPlates,
      plates,
    });
    yield put(PlatesActions.addRestaurantPlatesSuccess(data));
    yield put(RestaurantActions.addRestaurantRequest());
    yield put(ToastActions.addSuccessMessage('Prato adicionado com sucesso!'));
  } catch (err) {
    yield put(PlatesActions.addRestaurantPlatesFailure('Erro ao cadastrar prato.'));
    yield put(ToastActions.addErrorMessage('Erro ao cadastrar prato.'));
  }
}

export function* deletePlate({ payload: { restaurantPlate } }) {
  try {
    const { restaurantId, plateId } = restaurantPlate;
    const { data } = yield call(paceatsApi.delete, `/plate/${restaurantId}/${plateId}`);
    yield put(PlatesActions.removeRestaurantPlateSuccess(data));
    yield put(RestaurantActions.addRestaurantRequest());
    yield put(ToastActions.addSuccessMessage('Prato removido com sucesso!'));
  } catch (err) {
    yield put(PlatesActions.addRestaurantPlatesFailure('Erro ao remover prato.'));
    yield put(ToastActions.addErrorMessage('Erro ao remover prato.'));
  }
}

export function* updatePlate({ payload: { restaurantPlates } }) {
  try {
    const { data } = yield call(paceatsApi.put, '/plate', restaurantPlates);
    yield put(PlatesActions.updateRestaurantPlatesSuccess(data));
    yield put(RestaurantActions.addRestaurantRequest());
    yield put(ToastActions.addSuccessMessage('Prato atualizado com sucesso!'));
  } catch (err) {
    yield put(PlatesActions.addRestaurantPlatesFailure('Erro ao atualizar prato.'));
    yield put(ToastActions.addErrorMessage('Erro ao atualizar prato.'));
  }
}
