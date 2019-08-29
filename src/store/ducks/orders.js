import { getRestaurantId } from '../../services/authentication';
/*
  Constants
*/
export const Types = {
  ADD_REQUEST: 'orders/ADD_REQUEST',
  ADD_SUCCESS: 'orders/ADD_SUCCESS',
  ADD_FAILURE: 'orders/ADD_FAILURE',
};

/*
  Reducers
*/
const INITIAL_STATE = {
  error: null,
  loading: false,
  data: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/*
  Action creators
*/
export const ActionCreators = {
  addOrderRequest: () => ({
    type: Types.ADD_REQUEST,
    payload: { restaurantId: getRestaurantId() },
  }),

  addOrderSuccess: (data) => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addOrderFailure: (error) => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
