import { createAsyncThunk } from '@reduxjs/toolkit';

import apiUser from '@apis/user';
// import { AxiosError, AxiosResponse } from 'axios';
import { POST_API_URL } from '@apis/endpoint';
import { Modal } from 'antd';

// import { objectToQueryString } from 'utils/request';

export const getAllPost = createAsyncThunk(
  'post/getall',
  async (payload: Types.ILoginRequest, { rejectWithValue }) => {
    try {
      const response = await apiUser.get<Types.IPostResponse>(POST_API_URL.GETALL);
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
