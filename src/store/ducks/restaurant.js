import { getRestaurantId } from '../../services/authentication';
/*
  Constants
*/
export const Types = {
  ADD_REQUEST: 'restaurant/ADD_REQUEST',
  ADD_SUCCESS: 'restaurant/ADD_SUCCESS',
  ADD_FAILURE: 'restaurant/ADD_FAILURE',
};

/*
  Reducers
*/
const INITIAL_STATE = {
  error: null,
  loading: false,
  data: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: { ...action.payload.data },
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
  addRestaurantRequest: () => ({
    type: Types.ADD_REQUEST,
    payload: { restaurantId: getRestaurantId() },
  }),

  addRestaurantSuccess: (data) => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addRestaurantFailure: (error) => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
