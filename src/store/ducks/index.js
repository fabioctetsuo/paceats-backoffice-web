import { combineReducers } from 'redux';
import orders from './orders';
import orderStatus from './orderStatus';
import authentication from './authentication';
import restaurant from './restaurant';
import plates from './plates';
import toast from './toast';

const reducers = combineReducers({
  orders,
  orderStatus,
  authentication,
  restaurant,
  plates,
  toast,
});

export default reducers;
