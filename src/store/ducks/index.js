import { combineReducers } from 'redux';
import orders from './orders';
import orderStatus from './orderStatus';
import authentication from './authentication';

const reducers = combineReducers({
  orders,
  orderStatus,
  authentication,
});

export default reducers;
