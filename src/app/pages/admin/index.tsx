import { ReactNode, useCallback, useEffect, useState } from 'react';
import { WrapperStyled } from './styled';
import NavBarAdmin from '@components/navbar-admin';

const Admin = () => {
  const [content, setContent] = useState<ReactNode>(null);
  const [menuId, setMenuId] = useState<string>('1');
  const handleRenderContent = useCallback(() => {
    switch (menuId) {
      case '1':
        setContent(<p>1</p>);
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
        <NavBarAdmin setMenuId={setMenuId} />
      </div>
      <div className="content">{content}</div>
    </WrapperStyled>
  );
};

export default Admin;
