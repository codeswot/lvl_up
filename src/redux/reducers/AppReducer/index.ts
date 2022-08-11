import { AppActionTypes } from '@redux/actionTypes';

const INITIAL_STATE = {
  error: {
    show: false,
    message: '',
  },
  isLoading: false,
};
export interface INITIAL_STATE_TYPE {
  error: typeof INITIAL_STATE.error;
  isLoading: boolean;
}
interface Action {
  payload: any;
  type: string;
}
const AppReducer = (
  state: object | INITIAL_STATE_TYPE = INITIAL_STATE,
  action: Action,
): object => {
  switch (action.type) {
    case AppActionTypes.ERROR: {
      return { ...state, error: action.payload };
    }
    case AppActionTypes.LOADING: {
      return { ...state, isLoading: action.payload };
    }

    default: {
      return state;
    }
  }
};
export default AppReducer;
