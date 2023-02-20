import { useEffect } from 'react';
import $ from "jquery";

import { Routes, Route } from 'react-router-dom'
import Shop from './components/UserPages/shopComponent/Shop';
import Checkout from './components/UserPages/checkoutComp/Checkout';
import MainHomePage from './components/UserPages/homeComponent/MainHomePage';
import ProductDetail from './components/UserPages/productDetailComp/ProductDetail';
import ShopCart from './components/UserPages/shopCartComp/ShopCart';
import BlogDetail from './components/UserPages/blogComponent/BlogDetail';
import DashboardAppPage from './components/AdminPages/pages/DashboardAppPage';
import UserPage from './components/AdminPages/pages/UserPage';
import ProductsPage from './components/AdminPages/pages/ProductsPage';
import Page404 from './components/AdminPages/pages/Page404';
import Category from './components/AdminPages/pages/Category';
import Color from './components/AdminPages/pages/Color';
import Size from './components/AdminPages/pages/Size';
import ProductDetailAdmin from './components/AdminPages/pages/ProductDetailAdmin';
import Order from './components/AdminPages/pages/Order';

function App() {
  useEffect(() => {
    $('.set-bg').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
    });
  }, []);

  return (
    <div >
      <Routes>
        <Route path={"/"} element={<MainHomePage></MainHomePage>}></Route>
        <Route path={"/shop"} element={<Shop></Shop>}></Route>
        <Route path={"/productDetail"} element={<ProductDetail></ProductDetail>}></Route>
        <Route path={"/cart"} element={<ShopCart></ShopCart>}></Route>
        <Route path={"/checkout"} element={<Checkout />}></Route>
        <Route path={"/blogDetail"} element={<BlogDetail></BlogDetail>}></Route>
        <Route path={"/dashboard/app"} element= {<DashboardAppPage /> }></Route>
        <Route path={"/dashboard/user"} element= {<UserPage /> }></Route>
        <Route path={"/dashboard/products"} element= {<ProductsPage /> }></Route>
        <Route path={"/dashboard/category"} element= {<Category /> }></Route>
        <Route path={"/dashboard/color"} element= {<Color /> }></Route>
        <Route path={"/dashboard/size"} element= {<Size /> }></Route>
        <Route path={"/dashboard/productDetail"} element= {<ProductDetailAdmin /> }></Route>
        <Route path={"/dashboard/order"} element= {<Order /> }></Route>
        <Route path={"*"} element={<Page404></Page404>}></Route>
      </Routes>
    </div>

  );
}

export default App;
