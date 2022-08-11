import axios from 'axios';
import logger from './logService';
import Environment from '@network/baseUrl';
import { getHeaders } from '@network/headers';
import StorageHelper from '@helpers/StorageHelper';
import store from '@redux/store';
import { AuthActions } from '@redux/actions';
import SuperTokens from 'supertokens-react-native';

const dispatch = store.dispatch;
let token = '';

const getToken = async () => {
  let user = await StorageHelper.getItem('token');
  token = user;
  console.log('token is false, i want to get it', token);
  return token;
};

const privateAgent = axios.create({
  baseURL: Environment.API_BASE_URL,
});
SuperTokens.addAxiosInterceptors(privateAgent);

privateAgent.interceptors.request.use(
  async config => {
    const access_token = await getToken();
    config.headers = {
      'Front-Token': access_token,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

privateAgent.interceptors.response.use(
  response => {
    logger.logRequest(response);
    return response;
  },
  error => {
    const expectedError = error.response && error.response.status === 401;
    if (expectedError) {
      logger.logRequest(error.response);
      dispatch(AuthActions.Logout());
    } else {
      logger.logRequest(error.response);
    }
    return Promise.reject(error);
  },
);

const refreshHeaders = async (resetToken: string) => {
  token = resetToken;
  // @ts-ignore
  privateAgent.defaults.headers = getHeaders(resetToken);
  await StorageHelper.saveItem('token', resetToken);
};

export default {
  get: privateAgent.get,
  post: privateAgent.post,
  put: privateAgent.put,
  delete: privateAgent.delete,
  patch: privateAgent.patch,
  refreshHeaders: refreshHeaders,
};
