import axios from 'axios';
import logger from './logService';
import Environment from "@network/baseUrl";
import { getProfilePictureUploadHeaders } from "@network/headers";
import StorageHelper from '@helpers/StorageHelper';

const getToken = async () => {
    const token = await StorageHelper.getItem('token');
    return token; //set appropriate api token 
};

const agent = axios.create({
    baseURL: Environment.API_BASE_URL,
    headers: getProfilePictureUploadHeaders()
});

agent.interceptors.response.use(undefined, (error) => {
    const expectedError =
        error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedError) {
        logger.log(error);
    }
    return Promise.reject(error);
});


export default {
    post: agent.post,
    put: agent.put,
    patch: agent.patch
};