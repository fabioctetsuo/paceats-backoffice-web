/*
  Constants
*/
export const Types = {
  ADD_REQUEST: 'orders/status/ADD_REQUEST',
  ADD_SUCCESS: 'orders/status/ADD_SUCCESS',
  ADD_FAILURE: 'orders/status/ADD_FAILURE',
};

/*
  Reducers
*/
const INITIAL_STATE = {
  error: null,
  loading: false,
  data: {},
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
  addOrderStatusRequest: (orderStatus) => ({
    type: Types.ADD_REQUEST,
    payload: { orderStatus },
  }),

  addOrderStatusSuccess: (data) => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addOrderStatusFailure: (error) => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
