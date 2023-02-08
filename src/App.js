import { useEffect } from 'react';
import $ from "jquery";


import { Routes, Route } from 'react-router-dom'
import Shop from './components/shopComponent/Shop';
import Checkout from './components/checkoutComp/Checkout';
import Error from './components/Error';
import MainHomePage from './components/homeComponent/MainHomePage';
import ProductDetail from './components/productDetailComp/ProductDetail';
import ShopCart from './components/shopCartComp/ShopCart';
import BlogDetail from './components/blogComponent/BlogDetail';

function App() {
  useEffect(() => {
    $('.set-bg').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
    });
  }, []);

  return (
    <div className='home'>
      <Routes>
        <Route path={"/"} element={<MainHomePage></MainHomePage>}></Route>
        <Route path={"/shop"} element={<Shop></Shop>}></Route>
        <Route path={"/productDetail"} element={<ProductDetail></ProductDetail>}></Route>
        <Route path={"/cart"} element={<ShopCart></ShopCart>}></Route>
        <Route path={"/checkout"} element={<Checkout />}></Route>
        <Route path={"/blogDetail"} element={<BlogDetail></BlogDetail>}></Route>
        <Route path={"*"} element={<Error></Error>}></Route>
      </Routes>
    </div>

  );
}

export default App;
