import { createSlice } from '@reduxjs/toolkit';

// import { Table } from 'utils/helpers/table';

import { getAllPost } from './post.action';
const initialState: Types.IPostState = {
  actionType: '',
  loading: false,
  posts: [],
};

const PostSlice = createSlice({
  name: 'app/post',
  initialState,
  reducers: {
    // resetWorkStandardStore: () => initialState,
  },
  extraReducers: (builder) => {
    // auth login
    builder.addCase(getAllPost.pending, (state, action) => {
      state.loading = true;
      state.actionType = action.type;
      state.posts = [];
    });
    builder.addCase(getAllPost.fulfilled, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
      state.posts = action.payload.data.data;
    });
    builder.addCase(getAllPost.rejected, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
      state.posts = [];
    });
  },
});
// export const { resetWorkStandardStore } = LoginSlice.actions;
export default PostSlice.reducer;
