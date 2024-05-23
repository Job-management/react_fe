import {
  AppstoreOutlined,
  AreaChartOutlined,
  ChromeOutlined,
  CodeSandboxOutlined,
  CreditCardOutlined,
  DingtalkOutlined,
  FacebookOutlined,
  MoneyCollectOutlined,
  RiseOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <AreaChartOutlined />,
  },
  {
    key: 'ai',
    label: 'AI Career Connect',
    icon: <AppstoreOutlined />,
    children: [
      { key: '1', label: 'VietnamSalary', icon: <MoneyCollectOutlined /> },
      { key: '2', label: 'Job opportunity', icon: <RiseOutlined /> },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'crawl',
    label: 'Crawl data',
    icon: <ChromeOutlined />,
    children: [
      { key: '3', label: 'Facebook', icon: <FacebookOutlined /> },
      { key: '4', label: 'Vieclam24h', icon: <CodeSandboxOutlined /> },
      { key: '5', label: 'Topdev', icon: <DingtalkOutlined /> },
    ],
  },
  { key: '6', label: 'Giao dịch', icon: <CreditCardOutlined /> },
];

interface Props {
  setMenuId: (menuId: string) => void;
}

const NavBarAdmin = ({ setMenuId }: Props) => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setMenuId(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['dashboard']}
      defaultOpenKeys={['ai', 'crawl']}
      mode="inline"
      items={items}
    />
  );
};

export default NavBarAdmin;
