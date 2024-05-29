import { createSlice } from '@reduxjs/toolkit';

import {
  ChangePassword,
  getProfile,
  addUserSavePost,
  getUserSkill,
  updateProfile,
  updateUserSkill,
  getUserSavePost,
} from './user.action';

const initialState: Types.IUserState = {
  actionType: '',
  loading: false,
  profile: undefined,
  userSkill: undefined,
  savePost: undefined,
};

const UserSlice = createSlice({
  name: 'app/user',
  initialState,
  reducers: {
    // resetWorkStandardStore: () => initialState,
  },
  extraReducers: (builder) => {
    // change password
    builder.addCase(ChangePassword.pending, (state, action) => {
      state.loading = true;
      state.actionType = action.type;
    });
    builder.addCase(ChangePassword.fulfilled, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
    });
    builder.addCase(ChangePassword.rejected, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
    });

    builder.addCase(getProfile.pending, (state, action) => {
      state.loading = true;
      state.actionType = action.type;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
      state.profile = action.payload.data;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
    });
    //UPDATE USER PROFILE
    builder.addCase(updateProfile.pending, (state, action) => {
      state.loading = true;
      state.actionType = action.type;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
      state.profile = action.payload.data;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
    });
    // GET USER SKILL
    builder.addCase(getUserSkill.pending, (state, action) => {
      state.loading = true;
      state.actionType = action.type;
    });
    builder.addCase(getUserSkill.fulfilled, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
      state.userSkill = action.payload.data;
    });
    builder.addCase(getUserSkill.rejected, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
    });
    // UPDATE USER SKILL
    builder.addCase(updateUserSkill.pending, (state, action) => {
      state.loading = true;
      state.actionType = action.type;
    });
    builder.addCase(updateUserSkill.fulfilled, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
      state.userSkill = action.payload.data;
    });
    builder.addCase(updateUserSkill.rejected, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
    });

    // UPDATE SAVE POST
    builder.addCase(addUserSavePost.pending, (state, action) => {
      state.loading = true;
      state.actionType = action.type;
    });
    builder.addCase(addUserSavePost.fulfilled, (state, action) => {
      state.loading = false;
      state.savePost = action.payload.data;
      state.actionType = action.type;
    });
    builder.addCase(addUserSavePost.rejected, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
    });
    // GET SAVE POST
    builder.addCase(getUserSavePost.pending, (state, action) => {
      state.loading = true;
      state.actionType = action.type;
    });
    builder.addCase(getUserSavePost.fulfilled, (state, action) => {
      state.loading = false;
      state.savePost = action.payload.data;
      state.actionType = action.type;
    });
    builder.addCase(getUserSavePost.rejected, (state, action) => {
      state.loading = false;
      state.actionType = action.type;
    });
  },
});
// export const { resetWorkStandardStore } = LoginSlice.actions;
export default UserSlice.reducer;
