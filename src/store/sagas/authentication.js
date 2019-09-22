import { call, put } from 'redux-saga/effects';
import { paceatsApi } from '../../services/api';
import { ActionCreators as AuthActions } from '../ducks/authentication';
import { ActionCreators as ToastActions } from '../ducks/toast';

export function* authenticateUser({ payload: { user } }) {
  try {
    const { data } = yield call(paceatsApi.post, '/public/auth/signin', user);
    yield put(AuthActions.addAuthSuccess(data));
  } catch (err) {
    yield put(AuthActions.addAuthFailure('Falha ao realizar login'));
    yield put(ToastActions.addErrorMessage('Falha ao realizar login'));
  }
}
