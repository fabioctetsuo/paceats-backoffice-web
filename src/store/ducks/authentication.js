/*
  Constants
*/
export const Types = {
  ADD_REQUEST: 'authentication/ADD_REQUEST',
  ADD_SUCCESS: 'authentication/ADD_SUCCESS',
  ADD_FAILURE: 'authentication/ADD_FAILURE',
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
  addAuthRequest: (user) => ({
    type: Types.ADD_REQUEST,
    payload: { user },
  }),

  addAuthSuccess: (data) => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addAuthFailure: (error) => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
