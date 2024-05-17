import { getAllPost } from './post.action';
import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';

export const usePost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, actionType } = useSelector(
    (state: Types.IStoreState) => state.auth,
    shallowEqual,
  );
  const onGetAllPost = useCallback(async () => {
    return await dispatch(getAllPost());
  }, [dispatch]);
  return {
    onGetAllPost,
    loading,
    actionType,
  };
};
