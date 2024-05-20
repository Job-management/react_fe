import { getAllPost, getPostById } from './post.action';
import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';

export const usePost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, actionType, postsList, postData, postTotalSize } = useSelector(
    (state: Types.IStoreState) => state.post,
    shallowEqual,
  );
  const onGetAllPost = useCallback(
    async (search: Types.IGetAllPostRequest) => {
      return await dispatch(getAllPost(search));
    },
    [dispatch],
  );
  const onGetPostById = useCallback(
    async (payload: Types.IGetPostByIDRequest) => {
      return await dispatch(getPostById(payload));
    },
    [dispatch],
  );
  return {
    onGetAllPost,
    onGetPostById,
    postTotalSize,
    postData,
    postsList,
    loading,
    actionType,
  };
};
