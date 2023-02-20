import { Navigate, useRoutes } from 'react-router-dom';
// layouts
// import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
// import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Category from './pages/Category';
import Color from './pages/Color';
import Size from './pages/Size';
import ProductDetailAdmin from './pages/ProductDetailAdmin';
import Order from './pages/Order';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      // path: 'admin',
      // element: <DashboardLayout />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" />, index: true },
      //   { path: 'app', element: <DashboardAppPage /> },
      //   { path: 'user', element: <UserPage /> },
      //   { path: 'products', element: <ProductsPage /> },
      //   { path: 'blog', element: <BlogPage /> },
      // ],
      element: <DashboardAppPage />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'adminUser',
      element: <UserPage></UserPage>,
    },
    {
      path: 'adminProduct',
      element: <ProductsPage></ProductsPage>,
    },
    {
      path: 'adminCategory',
      element: <Category/>,
    },
    {
      path: 'adminColor',
      element: <Color/>
    },
    {
      path: 'adminSize',
      element: <Size/>
    },
    {
      path: 'adminProductDetail',
      element: <ProductDetailAdmin/>
    },
    {
      path: 'adminOrder',
      element: <Order/>
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
