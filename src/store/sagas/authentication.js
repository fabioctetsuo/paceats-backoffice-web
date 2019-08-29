import { call, put } from 'redux-saga/effects';
import { paceatsApi } from '../../services/api';
import { ActionCreators as AuthActions } from '../ducks/authentication';

export function* authenticateUser({ payload: { user } }) {
  try {
    const { data } = yield call(paceatsApi.post, '/public/auth/signin', user);
    yield put(AuthActions.addAuthSuccess(data));
  } catch (err) {
    yield put(
      AuthActions.addAuthFailure('Erro ao buscar pedidos, tente novamente.'),
    );
  }
}
