import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer from '@redux/reducers/AuthReducer';
import AppReducer from '@redux/reducers/AppReducer';
import CreateRecipeReducer from '@redux/reducers/CreateRecipeReducer';
import { AuthActionTypes } from '@redux/actionTypes';

const PersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['isLoggedIn'],
};

const appReducer = combineReducers({
  auth: persistReducer(PersistConfig, AuthReducer),
  app: AppReducer,
  createRecipe: CreateRecipeReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === AuthActionTypes.USER_LOGGED_OUT) {
    const { auth } = state;
    state = { auth };
    return appReducer(state, action);
  }
  return appReducer(state, action);
};
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
