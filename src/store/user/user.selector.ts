import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import {
  ChangePassword,
  getProfile,
  getUserSkill,
  updateProfile,
  updateUserSkill,
  addUserSavePost,
  getUserSavePost,
  getUserByAdmin,
  deleteUserByAdmin,
} from './user.action';

export const useUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, actionType, profile, userSkill, savePost, userList } = useSelector(
    (state: Types.IStoreState) => state.user,
    shallowEqual,
  );
  const onChangePassword = useCallback(
    async (payload: Types.IChangePasswordRequest) => {
      return await dispatch(ChangePassword(payload));
    },
    [dispatch],
  );
  const onGetProfile = useCallback(
    async (id: string) => {
      return await dispatch(getProfile(id));
    },
    [dispatch],
  );
  const onUpdateProfile = useCallback(
    async (payload: Types.IUpdateUserInfo) => {
      return await dispatch(updateProfile(payload));
    },
    [dispatch],
  );
  const onGetUserSkill = useCallback(async () => {
    return await dispatch(getUserSkill());
  }, [dispatch]);

  const onUpdateUserSkill = useCallback(
    async (payload: Types.IUpdateSkill) => {
      return await dispatch(updateUserSkill(payload));
    },
    [dispatch],
  );

  const onAddUserSavePost = useCallback(
    async (postId: number) => {
      return await dispatch(addUserSavePost(postId));
    },
    [dispatch],
  );

  const onGetUserSavePost = useCallback(async () => {
    return await dispatch(getUserSavePost());
  }, [dispatch]);

  const onGetUserByAdmin = useCallback(async () => {
    return await dispatch(getUserByAdmin());
  }, [dispatch]);

  const onDeleteUserByAdmin = useCallback(
    async (id: string) => {
      return await dispatch(deleteUserByAdmin(id));
    },
    [dispatch],
  );

  return {
    onChangePassword,
    onGetProfile,
    onUpdateProfile,
    onGetUserSkill,
    onUpdateUserSkill,
    onAddUserSavePost,
    onGetUserSavePost,
    onGetUserByAdmin,
    onDeleteUserByAdmin,
    userList,
    savePost,
    userSkill,
    loading,
    actionType,
    profile,
  };
};
