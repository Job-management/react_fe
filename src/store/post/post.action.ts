import { createAsyncThunk } from '@reduxjs/toolkit';

import apiUser from '@apis/user';
// import { AxiosError, AxiosResponse } from 'axios';
import { POST_API_URL } from '@apis/endpoint';
import { Modal } from 'antd';
import { objectToQueryString } from '@utils/helpers/request';

// import { objectToQueryString } from 'utils/request';

export const getAllPost = createAsyncThunk(
  'post/getall',
  async (searchQuery: Types.IGetAllPostRequest, { rejectWithValue }) => {
    try {
      const response = await apiUser.get<Types.IAllPostResponse>(
        POST_API_URL.POST + '?' + objectToQueryString<Types.IGetAllPostRequest>(searchQuery),
      );
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

export const getPostById = createAsyncThunk(
  'post/getPostById',
  async (payload: Types.IGetPostByIDRequest, { rejectWithValue }) => {
    try {
      const response = await apiUser.get<Types.IGetPostByIdResponse>(
        POST_API_URL.POST + payload.id,
      );
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
