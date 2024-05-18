import PostPreview from '@components/post-preview';
import { WrapperStyled } from './styled';
import { Pagination } from 'antd';
interface Props {
  data: Types.IDataPostResponse[];
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostContainer = ({ data }: Props) => {
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
          total={50}
        />
      </div>
    </WrapperStyled>
  );
};

export default PostContainer;
