import React from 'react'
import { SimpleSlider } from './SimpleSlider';
import Header from './Header';
import ListProduct from './ListProduct';
import BlogSlider from './BlogSlider';
import Banner from './Banner';
import Footer from './Footer';
import CategoryHome from './CategoryHome';
import $ from "jquery";
import { useEffect } from 'react';

export default function MainHomePage() {
  useEffect(() => {
    $('.set-bg').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
    });
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        {/* Header Section Begin */}
      <Header></Header>
      {/* Header Section End */}
      {/* Banner Section Begin */}
      <SimpleSlider></SimpleSlider>
      {/* Banner Section End */}
      {/* Category Section Begin */}
      <CategoryHome></CategoryHome>
      {/* Category Section End */}
      {/* Product Section Begin */}
      <ListProduct></ListProduct>
      {/* Product Section End */}
      {/* Banner Section Begin */}
      <Banner></Banner>
      {/* Banner Section End */}
      {/*Blog Slider Begin */}
      <BlogSlider></BlogSlider>
      {/*Blog Slider End */}
      {/* Footer Section Begin */}
      <Footer></Footer>
      {/* Footer Section End */}
    </div>
  )
}
