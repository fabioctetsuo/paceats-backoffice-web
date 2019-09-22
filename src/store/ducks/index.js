import { combineReducers } from 'redux';
import orders from './orders';
import orderStatus from './orderStatus';
import authentication from './authentication';
import restaurant from './restaurant';

const reducers = combineReducers({
  orders,
  orderStatus,
  authentication,
  restaurant,
});

export default reducers;
