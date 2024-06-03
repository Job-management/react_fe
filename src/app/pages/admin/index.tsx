import { ReactNode, useCallback, useEffect, useState } from 'react';
import { WrapperStyled } from './styled';
import NavBarAdmin from '@components/navbar-admin';
import ManageUser from '@components/manage-user';
import Dashboard from '@components/dashboard';
import PostPreview from '@components/post-preview';
import { usePost } from '@store/post/post.selector';

const Admin = () => {
  const { postAdmin, onGetAllCrawlPost } = usePost();
  const [content, setContent] = useState<ReactNode>(null);
  const [menuId, setMenuId] = useState<string>('dashboard');
  useEffect(() => {
    onGetAllCrawlPost();
  }, []);
  const handleRenderContent = useCallback(() => {
    switch (menuId) {
      case 'dashboard':
        setContent(<Dashboard />);
        break;
      case '1':
        setContent(<ManageUser />);
        break;
      case '2':
        setContent(
          <div>
            {postAdmin?.map((item: Types.IDataPostResponse) => {
              return (
                <PostPreview
                  key={item.id}
                  post={item}
                  isAdmin={true}
                />
              );
            })}
          </div>,
        );
        break;
      case '3':
        setContent(<p>3</p>);
        break;
      default:
        break;
    }
  }, [menuId]);
  useEffect(() => {
    handleRenderContent();
  }, [menuId]);
  return (
    <WrapperStyled>
      <div className="menu">
        <NavBarAdmin setMenuId={setMenuId} />
      </div>
      <div className="content">{content}</div>
    </WrapperStyled>
  );
};

export default Admin;
