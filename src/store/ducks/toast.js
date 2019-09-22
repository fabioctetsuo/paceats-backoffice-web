import { toast } from 'react-toastify';
/*
  Constants
*/
export const Types = {
  ADD_ERROR_MESSAGE: 'toast/ADD_ERROR_MESSAGE',
  ADD_SUCCESS_MESSAGE: 'toast/ADD_SUCCESS_MESSAGE',
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
    case Types.ADD_ERROR_MESSAGE:
      return toast.error(action.payload.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    case Types.ADD_SUCCESS_MESSAGE:
      return toast.success(action.payload.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    default:
      return state;
  }
}

/*
  Action creators
*/
export const ActionCreators = {
  addErrorMessage: (message) => ({
    type: Types.ADD_ERROR_MESSAGE,
    payload: { message },
  }),
  addSuccessMessage: (message) => ({
    type: Types.ADD_SUCCESS_MESSAGE,
    payload: { message },
  }),
};
