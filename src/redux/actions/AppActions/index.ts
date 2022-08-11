import { AuthActionTypes, AppActionTypes } from '@redux/actionTypes';
import { Dispatch } from 'redux';

const ErrorModal: Function =
  (data: any) => (dispatch: Dispatch, getState: Function) => {
    dispatch({
      type: AppActionTypes.ERROR,
      payload: data,
    });
  };

export default {
  ErrorModal,
};
