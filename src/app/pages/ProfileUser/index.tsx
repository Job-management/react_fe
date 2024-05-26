import NavBarUser from '@components/navbar-user';
import { WrapperStyled } from './styled';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import EditInfo from '@components/edit-info';
const ProfileUser = () => {
  const [content, setContent] = useState<ReactNode>(null);
  const [menuId, setMenuId] = useState<string>('1');
  const handleRenderContent = useCallback(() => {
    switch (menuId) {
      case '1':
        setContent(<EditInfo />);
        break;
      case '2':
        setContent(<p>2</p>);
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
        <NavBarUser setMenuId={setMenuId} />
      </div>
      <div className="content">{content}</div>
    </WrapperStyled>
  );
};

export default ProfileUser;
