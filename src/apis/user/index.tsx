import { jwtHelper, STORAGE, getLocalStorage } from '@utils/helpers';
import { Modal } from 'antd';
import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = process.env.REACT_APP_URL_SERVICE_ABC;
const apiUser = axios.create({
  baseURL: API_BASE_URL,
});

apiUser.interceptors.request.use(
  (config) => {
    const stringifiedToken = getLocalStorage(STORAGE.USER_TOKEN) || '';
    const bearerToken = jwtHelper.getBearerToken(stringifiedToken);

    if (config.headers) {
      config.headers['Authorization'] = bearerToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiUser.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      Modal.error({
        title: 'アクティブなセッションの有効期限が切れました。',
        onOk: () => {
          localStorage.clear();
          window.location.href = '/home';
        },
      });
    }
    // error common
    if (error?.response?.status === 403) {
      Modal.error({
        title: 'This activity not in your permission',
        onOk: () => {
          localStorage.clear();
          window.location.href = '/home';
        },
      });
    }
    return Promise.reject(error);
  },
);

export default apiUser;
