import PostPreview from '@components/post-preview';
import { WrapperStyled } from './styled';
import { Pagination } from 'antd';
import { useCallback } from 'react';
import { usePost } from '@store/post/post.selector';
interface Props {
  data: Types.IDataPostResponse[];
}

const PostContainer = ({ data }: Props) => {
  const { onGetAllPost, postTotalSize } = usePost();
  const handleChangePagination = useCallback((page: number) => {
    onGetAllPost({ page, limit: 10 });
  }, []);
  return (
    <WrapperStyled>
      <div className="container">
        {data?.map((item) => {
          return (
            <PostPreview
              key={item.id}
              post={item}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={10}
          showSizeChanger={false}
          total={postTotalSize}
          onChange={handleChangePagination}
        />
      </div>
    </WrapperStyled>
  );
};

export default PostContainer;
