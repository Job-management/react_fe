/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';

import apiUser from '@apis/user';
// import { AxiosError, AxiosResponse } from 'axios';
import { USER_API_URL } from '@apis/endpoint';
import { Modal } from 'antd';

export const ChangePassword = createAsyncThunk(
  'user/change_password',
  async (payload: Types.IChangePasswordRequest, { rejectWithValue }) => {
    try {
      const response = await apiUser.post<any>(USER_API_URL.CHANGE_PASSWORD, payload);
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

export const getProfile = createAsyncThunk(
  'user/getProfile',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await apiUser.get<any>(USER_API_URL.PROFILE + '/' + id);
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

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (payload: Types.IUpdateUserInfo, { rejectWithValue }) => {
    try {
      const response = await apiUser.put<any>(USER_API_URL.UPDATE_PROFILE, payload);
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
