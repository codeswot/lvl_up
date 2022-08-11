import { UNIT_PREFERENCE } from '@helpers/consts';
import { AuthActionTypes } from '@redux/actionTypes';

const INITIAL_STATE = {
  user: {},
  isLoggedIn: false,
  type: '',
  isSplashVisible: true,
  error: { show: false, messsage: '' },
  signUpError: { show: false, messsage: '' },
  resetPassError: { show: false, message: '' },
  signupData: {
    email: '',
    password: '',
    data: {
      v: 'V1',
      firstName: '',
      lastName: '',
      birthdate: '',
      sex: '',
      height: 0,
      baselineActivityLevel: '',
      exerciseLevel: '',
      initialWeighIn: {
        weight: 0,
        bodyFatMethod: '',
        imageSelectionMethod: '',
        usNavyMethod: {
          neck: 0,
          waist: 0,
          hips: 0,
        },
      },
      dietGoal: '',
      weightChangeRate: 0,
      unitPreference: '',
    },
  },
  weightInResults: {
    bodyFatCategory: '',
    bodyFatMass: 0,
    bodyFatPercent: 0,
    deltaToReachIdeal: 0,
    idealBodyFatPercent: 0,
    leanBodyMass: 0,
  },
  unitPreference: UNIT_PREFERENCE.US_STANDARD,
  isLoading: false,
};
export interface INITIAL_STATE_TYPE {
  user?: typeof INITIAL_STATE.user;
  isSplashVisible?: boolean;
  isLoggedIn?: boolean;
  error?: typeof INITIAL_STATE.error;
  signUpError?: typeof INITIAL_STATE.error;
  resetPassError?: typeof INITIAL_STATE.resetPassError;
  signupData?: typeof INITIAL_STATE.signupData;
  weightInResults?: typeof INITIAL_STATE.weightInResults;
  isLoading?: boolean;
  unitPreference?: 'usStandard' | 'metric';
  type?: string;
}
interface Action {
  payload: any;
  type: string;
}
const AuthReducer = (
  state: object | INITIAL_STATE_TYPE = INITIAL_STATE,
  action: Action,
): object => {
  switch (action.type) {
    case AuthActionTypes.SPLASH_SCREEN_LOADED: {
      return { ...state, isSplashVisible: action.payload };
    }
    case AuthActionTypes.USER_LOGGED_IN: {
      return { ...state, user: action.payload.data, isLoggedIn: true };
    }
    case AuthActionTypes.USER_LOGGED_IN_ERROR: {
      return { ...state, error: action.payload };
    }
    case AuthActionTypes.USER_REG_ERROR: {
      return { ...state, error: action.payload };
    }
    case AuthActionTypes.USER_RESET_PASS_ERROR: {
      return { ...state, resetPassError: action.payload };
    }
    case AuthActionTypes.SET_SIGNUP_DATA: {
      return { ...state, signupData: action.payload };
    }
    case AuthActionTypes.WEIGHTIN_RESULTS: {
      return { ...state, weightInResults: action.payload };
    }
    case AuthActionTypes.LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case AuthActionTypes.SET_UNIT_PREFERENCE: {
      return { ...state, unitPreference: action.payload };
    }
    case AuthActionTypes.USER_LOGGED_OUT: {
      return { ...state, user: {}, isLoggedIn: false };
    }
    default: {
      return state;
    }
  }
};
export default AuthReducer;
