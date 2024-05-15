import routes from '@routers/routes';
import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFoundPage from '@pages/NotFoundPage';
import LayoutDefault from 'layout/main';
const Routers: Types.IRoute[] = [
  {
    key: 1,
    path: routes.HOME,
    component: Home,
    isProtected: true,
    isAdmin: false,
    layout: LayoutDefault,
  },
  {
    key: 2,
    path: routes.LOGIN,
    component: Login,
    isProtected: true,
    isAdmin: false,
  },
  {
    key: 404,
    path: routes.NOTFOUND,
    component: NotFoundPage,
    isProtected: true,
    isAdmin: false,
  },
];

export default Routers;
