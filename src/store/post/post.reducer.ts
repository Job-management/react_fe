import { createSlice } from '@reduxjs/toolkit';

// import { Table } from 'utils/helpers/table';

import { getAllPost, getPostById } from './post.action';
const initialState: Types.IPostState = {
  actionType: '',
  loading: false,
  postsList: [],
  postData: undefined,
  postTotalSize: 0,
};

const PostSlice = createSlice({
  name: 'app/post',
  initialState,
  reducers: {
    // resetWorkStandardStore: () => initialState,
  },
  extraReducers: (builder) => {
    // get all post
    builder.addCase(getAllPost.pending, (state, action) => {
      state.loading = true;
      state.actionType = action.type;
    });
    builder.addCase(getAllPost.fulfilled, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
      state.postsList = action.payload.data.data;
      state.postTotalSize = action.payload.data.totalSize;
    });
    builder.addCase(getAllPost.rejected, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
      state.postsList = [];
    });

    // get post by id
    builder.addCase(getPostById.pending, (state, action) => {
      state.loading = true;
      state.actionType = action.type;
      state.postData = undefined;
    });
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
      state.postData = action.payload.data.data;
    });
    builder.addCase(getPostById.rejected, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
      state.postData = undefined;
    });
  },
});
// export const { resetWorkStandardStore } = LoginSlice.actions;
export default PostSlice.reducer;
