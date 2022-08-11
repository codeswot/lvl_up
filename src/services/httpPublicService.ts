import axios from 'axios';
import Environment from '@network/baseUrl';
import { getHeaders } from '@network/headers';
import SuperTokens from 'supertokens-react-native';

const publicAgent = axios.create({
  baseURL: Environment.API_BASE_URL,
  // @ts-ignore
  headers: getHeaders(false),
});
SuperTokens.addAxiosInterceptors(publicAgent);

export default {
  get: publicAgent.get,
  post: publicAgent.post,
  put: publicAgent.put,
  delete: publicAgent.delete,
  patch: publicAgent.patch,
};
