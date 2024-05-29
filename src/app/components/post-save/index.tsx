import PostPreview from '@components/post-preview';
import { useUser } from '@store/user/user.selector';
import { useEffect, useRef } from 'react';
import { WrapperStyled } from './styled';

const PostSave = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { onGetUserSavePost, savePost } = useUser();
  useEffect(() => {
    onGetUserSavePost();
  }, []);
  return (
    <WrapperStyled ref={containerRef}>
      <div className="container">
        {savePost?.map((item: Types.IDataPostResponse) => {
          return (
            <PostPreview
              key={item.id}
              post={item}
              isPostSave={true}
            />
          );
        })}
      </div>
    </WrapperStyled>
  );
};

export default PostSave;
