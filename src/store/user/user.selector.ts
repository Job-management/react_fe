import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { ChangePassword, getProfile, updateProfile } from './user.action';

export const useUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, actionType, profile } = useSelector(
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
  return {
    onChangePassword,
    onGetProfile,
    onUpdateProfile,
    loading,
    actionType,
    profile,
  };
};
