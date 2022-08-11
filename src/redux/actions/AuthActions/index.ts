import {
  doLogin,
  doSignup,
  doResetPassword,
  doCheckEmail,
  doTapeMeasure,
} from '@network';
import { AuthActionTypes } from '@redux/actionTypes';
import httpPrivateService from '@services/httpPrivateService';
import { Alert } from 'react-native';
import { Dispatch } from 'redux';

const loginUser: Function = (data: any) => (dispatch: Dispatch) => {
  dispatch({
    type: AuthActionTypes.USER_LOGGED_IN_ERROR,
    payload: { show: false, message: '' },
  });
  dispatch({
    type: AuthActionTypes.LOADING,
    payload: true,
  });
  doLogin(data)
    .then((res: any) => {
      httpPrivateService.refreshHeaders(res?.headers['front-token']);
      console.log({ res: res?.data });

      dispatch({ type: AuthActionTypes.USER_LOGGED_IN, payload: {} });
    })
    .catch((e: any) => {
      console.log('there is an err', e?.response?.data);
      dispatch({
        type: AuthActionTypes.USER_LOGGED_IN_ERROR,
        payload: {
          show: true,
          message:
            e?.response?.data?.id === 'AUTH_FAILED'
              ? 'Invalid username or password'
              : e?.response?.data?.message,
        },
      });
    })
    .finally(() =>
      dispatch({
        type: AuthActionTypes.LOADING,
        payload: false,
      }),
    );
};

const resetPassword: Function =
  (data: any, cb: (error?: boolean) => {}) => (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionTypes.USER_RESET_PASS_ERROR,
      payload: { show: false, message: '' },
    });

    doResetPassword(data)
      .then((res: any) => {
        console.log(res?.data);
        cb();
      })
      .catch((e: any) => {
        console.log('errr', e?.response?.data?.message);
        dispatch({
          type: AuthActionTypes.USER_RESET_PASS_ERROR,
          payload: {
            show: true,
            message:
              e?.response?.data?.message ||
              'Email not associated to user account',
          },
        });
        cb(true);
      })
      .finally(() =>
        dispatch({
          type: AuthActionTypes.LOADING,
          payload: false,
        }),
      );
  };

const signUpUser: Function =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (data: any, cb: () => {}) => (dispatch: Dispatch, getState: Function) => {
    console.log({ data });
    dispatch({
      type: AuthActionTypes.LOADING,
      payload: true,
    });
    doSignup(data)
      .then(res => {
        console.log('this is the res', { res });
        cb();
        // dispatch({ type: AuthActionTypes.USER_LOGGED_IN, payload: {} });
      })
      .catch(err => {
        console.log('this is the eror', err?.response?.data);
        Alert.alert('Level up Fitness', err?.response?.data?.message);
      })
      .finally(() =>
        dispatch({
          type: AuthActionTypes.LOADING,
          payload: false,
        }),
      );
  };

const checkEmailAvailability: Function =
  (data: any, cb: (available: boolean) => {}) => (dispatch: Dispatch) => {
    doCheckEmail(data)
      .then(res => {
        cb(res?.data.available);
      })
      .catch(err => {
        Alert.alert('Level up Fitness', err?.response?.data?.message);
      })
      .finally(() =>
        dispatch({
          type: AuthActionTypes.LOADING,
          payload: false,
        }),
      );
  };

const tapeMeasure: Function =
  (data: any, cb: () => {}) => (dispatch: Dispatch) => {
    doTapeMeasure(data)
      .then(res => {
        dispatch({
          type: AuthActionTypes.WEIGHTIN_RESULTS,
          payload: res?.data,
        });
        cb();
      })
      .catch(err => {
        Alert.alert('Level up Fitness', err?.response?.data?.message);
      })
      .finally(() =>
        dispatch({
          type: AuthActionTypes.LOADING,
          payload: false,
        }),
      );
  };

const verifyUser: Function =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (data: any) => (dispatch: Dispatch, getState: Function) => {
    console.log({ data });
  };

const splashLoaded: Function = (data: any) => (dispatch: Dispatch) => {
  dispatch({
    type: AuthActionTypes.SPLASH_SCREEN_LOADED,
    payload: data,
  });
};

const Logout: Function = () => (dispatch: Dispatch) => {
  dispatch({
    type: AuthActionTypes.USER_LOGGED_OUT,
    payload: {},
  });
};

export default {
  loginUser,
  signUpUser,
  checkEmailAvailability,
  verifyUser,
  tapeMeasure,
  splashLoaded,
  resetPassword,
  Logout,
};
