import { createAsyncThunk } from '@reduxjs/toolkit';

import apiUser from '@apis/user';
// import { AxiosError, AxiosResponse } from 'axios';
import { BASE_API_URL } from '@apis/endpoint';
import { TOKEN } from '@utils/constants/auth';
import { setAccessToken, setRefreshToken } from '@utils/helpers/storage';
import { Modal } from 'antd';

// import { objectToQueryString } from 'utils/request';

export const login = createAsyncThunk(
  'auth/login',
  async (payload: Types.ILoginRequest, { rejectWithValue }) => {
    try {
      const response = await apiUser.post<Types.ILoginResponse>(BASE_API_URL.LOGIN, payload);
      setAccessToken(TOKEN.ACCESS_TOKEN_KEY, response.data.data.access_token);
      setRefreshToken(TOKEN.REFRESH_TOKEN_KEY, response.data.data.refresh_token);
      return {
        data: response.data,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      Modal.error({
        title: err?.response?.data?.message,
        className: 'modal-type-2',
        onOk: () => {
          return;
        },
      });
      return rejectWithValue(err);
    }
  },
);
export const signUp = createAsyncThunk(
  'auth/signup',
  async (payload: Types.ISignUpRequest, { rejectWithValue }) => {
    try {
      const response = await apiUser.post<Types.ISignupResponse>(BASE_API_URL.SIGNUP, payload);
      return {
        data: response.data,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      Modal.error({
        title: err?.response?.data?.message,
        className: 'modal-type-2',
        onOk: () => {
          return;
        },
      });
      return rejectWithValue(err);
    }
  },
);
