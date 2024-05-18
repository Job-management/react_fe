import { getAllPost } from './post.action';
import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';

export const usePost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, actionType, postsList } = useSelector(
    (state: Types.IStoreState) => state.post,
    shallowEqual,
  );
  const onGetAllPost = useCallback(async () => {
    return await dispatch(getAllPost());
  }, [dispatch]);
  return {
    onGetAllPost,
    postsList,
    loading,
    actionType,
  };
};
