/*
  Constants
*/
export const Types = {
  ADD_REQUEST: 'restaurant/plates/ADD_REQUEST',
  ADD_SUCCESS: 'restaurant/plates/ADD_SUCCESS',
  ADD_FAILURE: 'restaurant/plates/ADD_FAILURE',
  REMOVE_REQUEST: 'restaurant/plates/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'restaurant/plates/REMOVE_SUCCESS',
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
    case Types.REMOVE_REQUEST:
      return { ...state, loading: true };
    case Types.REMOVE_SUCCESS:
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
  addRestaurantPlatesRequest: (restaurantPlates) => ({
    type: Types.ADD_REQUEST,
    payload: { restaurantPlates },
  }),

  addRestaurantPlatesSuccess: (data) => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addRestaurantPlatesFailure: (error) => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
  removeRestaurantPlateRequest: (restaurantPlate) => ({
    type: Types.REMOVE_REQUEST,
    payload: { restaurantPlate },
  }),
  removeRestaurantPlateSuccess: (data) => ({
    type: Types.REMOVE_SUCCESS,
    payload: { data },
  }),
};
