import { createSlice } from '@reduxjs/toolkit';

import { ChangePassword, getProfile, updateProfile } from './user.action';

const initialState: Types.IUserState = {
  actionType: '',
  loading: false,
  profile: undefined,
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
  },
});
// export const { resetWorkStandardStore } = LoginSlice.actions;
export default UserSlice.reducer;
