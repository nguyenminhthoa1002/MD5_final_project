// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Category',
    path: '/dashboard/category',
    icon: icon('ic_category'),
  },
  {
    title: 'Color',
    path: '/dashboard/color',
    icon: icon('ic_color'),
  },
  {
    title: 'Size',
    path: '/dashboard/size',
    icon: icon('ic_size'),
  },
  {
    title: 'Product',
    path: '/dashboard/products',
    icon: icon('ic_product'),
  },
  {
    title: 'Product Detail',
    path: '/dashboard/productDetail',
    icon: icon('ic_productDetail'),
  },
  {
    title: 'Cart',
    path: '/dashboard/order',
    icon: icon('ic_cart'),
  },
  {
    title: 'User',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  }
];

export default navConfig;
