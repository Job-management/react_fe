import { getAllPost, getPostById, getAllPostSearch, getAllPostSearchMore } from './post.action';
import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';

export const usePost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, actionType, postsList, postData, postTotalSize, postDataSearch } = useSelector(
    (state: Types.IStoreState) => state.post,
    shallowEqual,
  );
  const onGetAllPost = useCallback(
    async (search: Types.IGetAllPostRequest) => {
      return await dispatch(getAllPost(search));
    },
    [dispatch],
  );
  const onGetAllPostSearch = useCallback(
    async (search: Types.IGetAllPostRequest) => {
      return await dispatch(getAllPostSearch(search));
    },
    [dispatch],
  );
  const onGetAllPostSearchMore = useCallback(
    async (search: Types.IGetAllPostRequest) => {
      return await dispatch(getAllPostSearchMore(search));
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
    onGetAllPostSearch,
    onGetAllPostSearchMore,
    postDataSearch,
    postTotalSize,
    postData,
    postsList,
    loading,
    actionType,
  };
};
