import React, { useRef, useState } from 'react'

import { useEffect } from 'react';
import Footer from '../homeComponent/Footer';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AvatarTest from './avatarTest';
import Rating from '@mui/material/Rating';
import $ from "jquery";
import HeaderPages from './HeaderPages';

export default function ProductDetail() {
  const listImage = ["img/product/details/productDetail1.webp", "img/product/details/productDetail2.webp", "img/product/details/productDetail3.webp", "img/product/details/productDetail4.webp", "img/product/details/productDetail5.webp"]
  const refImage = useRef();
  const changeImage = (e) => {
    refImage.current.style.backgroundImage = `url("${listImage[e - 1]}")`;
  }

  const options = {
    items: 2,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    rewind: true,
    margin: 0,
    nav: true
  };

  useEffect(() => {
    $('.set-bg').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {/* Header Section Begin */}
      <HeaderPages></HeaderPages>
      {/* Header Section End */}
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="./index.html">
                  <i className="fa fa-home" /> Home
                </a>
                <a href="#">Women’s </a>
                <span>Essential structured blazer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Product Details Section Begin */}
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6">
              <OwlCarousel className="slider-items owl-carousel" {...options} >
                <div className="item testscale">
                  <div onClick={() => { changeImage(1) }} style={{ backgroundImage: `url('img/product/details/productDetail1.webp')` }}></div>
                </div>
                <div className="item testscale">
                  <div onClick={() => { changeImage(2) }} style={{ backgroundImage: `url('img/product/details/productDetail2.webp')` }}></div>
                </div>
                <div className="item testscale">
                  <div onClick={() => { changeImage(3) }} style={{ backgroundImage: `url('img/product/details/productDetail3.webp')` }}></div>
                </div>
                <div className="item testscale">
                  <div onClick={() => { changeImage(4) }} style={{ backgroundImage: `url('img/product/details/productDetail4.webp')` }}></div>
                </div>
                <div className="item testscale">
                  <div onClick={() => { changeImage(5) }} style={{ backgroundImage: `url('img/product/details/productDetail5.webp')` }}></div>
                </div>
              </OwlCarousel>
            </div>
            <div className="col-lg-4 mainImage">
              <div style={{ backgroundImage: `url(${listImage[0]})` }} ref={refImage}>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>
                  Essential structured blazer{" "}
                  <span>Brand: SKMEIMore Men Watches from SKMEI</span>
                </h3>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <span>( 138 reviews )</span>
                </div>
                <div className="product__details__price">
                  $ 75.0 <span>$ 83.0</span>
                </div>
                <p>
                  Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret
                  fugit, sed quia consequuntur magni lores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>
                <div className="product__details__button">
                  <div className="quantity">
                    <span>Quantity:</span>
                    <div className="pro-qty">
                      <input type="text" defaultValue={1} />
                    </div>
                  </div>
                  <a href="#" className="cart-btn">
                    <span className="icon_bag_alt" /> Add to cart
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_adjust-horiz" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__details__widget">
                  <ul>
                    <li>
                      <span>Availability:</span>
                      <div className="stock__checkbox">
                        <label htmlFor="stockin">
                          In Stock
                          <input type="checkbox" id="stockin" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available color:</span>
                      <div className="color__checkbox">
                        <label htmlFor="red">
                          <input
                            type="radio"
                            name="color__radio"
                            id="red"
                            defaultChecked=""
                          />
                          <span className="checkmark" />
                        </label>
                        <label htmlFor="black">
                          <input type="radio" name="color__radio" id="black" />
                          <span className="checkmark black-bg" />
                        </label>
                        <label htmlFor="grey">
                          <input type="radio" name="color__radio" id="grey" />
                          <span className="checkmark grey-bg" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available size:</span>
                      <div className="size__btn">
                        <label htmlFor="xs-btn" className="active">
                          <input type="radio" id="xs-btn" />
                          xs
                        </label>
                        <label htmlFor="s-btn">
                          <input type="radio" id="s-btn" />s
                        </label>
                        <label htmlFor="m-btn">
                          <input type="radio" id="m-btn" />m
                        </label>
                        <label htmlFor="l-btn">
                          <input type="radio" id="l-btn" />l
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Promotions:</span>
                      <p>Free shipping</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  {/* <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                    >
                      Specification
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a
                      className="nav-link review"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                    >
                      Reviews ( 2 )
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  {/* <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <h6>Description</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut loret fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt loret. Neque porro lorem
                      quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut loret
                      fugit, sed quia ipsu consequuntur magni dolores eos qui
                      ratione voluptatem sequi nesciunt. Nulla consequat massa quis
                      enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                      eu, pretium quis, sem.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <h6>Specification</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut loret fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt loret. Neque porro lorem
                      quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut loret
                      fugit, sed quia ipsu consequuntur magni dolores eos qui
                      ratione voluptatem sequi nesciunt. Nulla consequat massa quis
                      enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                      eu, pretium quis, sem.
                    </p>
                  </div> */}
                  <div className="tab-pane active" id="tabs-3" role="tabpanel">
                    <div className='row'>
                      <div className='col-2 text-center mt-4'>
                        <AvatarTest></AvatarTest>
                      </div>
                      <div className='col-10 comment'>
                        <p className='date-comment'>27 Aug 2016</p>
                        <p className='user-name'>Brandon William</p>
                        <Rating name="read-only" value={5} readOnly />
                        <p className='mt-2 context-comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae porro explicabo odit consequatur hic! Voluptatem, voluptatibus mollitia, odit rem quasi deleniti maxime omnis numquam similique, cumque enim iure in!</p>
                      </div>
                    </div>
                    <div className='row mt-5'>
                      <div className='col-2 text-center mt-4'>
                        <AvatarTest></AvatarTest>
                      </div>
                      <div className='col-10 comment'>
                        <p className='date-comment'>27 Aug 2016</p>
                        <p className='user-name'>Brandon William</p>
                        <Rating name="read-only" value={4} readOnly />
                        <p className='mt-2 context-comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae porro explicabo odit consequatur hic! Voluptatem, voluptatibus mollitia, odit rem quasi deleniti maxime omnis numquam similique, cumque enim iure in!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="related__title">
                <h5>RELATED PRODUCTS</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/related/rp-1.jpg"
                >
                  <div className="label new">New</div>
                  <ul className="product__hover">
                    <li>
                      <a
                        href="img/product/related/rp-1.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_bag_alt" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Buttons tweed blazer</a>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/related/rp-2.jpg"
                >
                  <ul className="product__hover">
                    <li>
                      <a
                        href="img/product/related/rp-2.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_bag_alt" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Flowy striped skirt</a>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ 49.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/related/rp-3.jpg"
                >
                  <div className="label stockout">out of stock</div>
                  <ul className="product__hover">
                    <li>
                      <a
                        href="img/product/related/rp-3.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_bag_alt" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Cotton T-Shirt</a>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/related/rp-4.jpg"
                >
                  <ul className="product__hover">
                    <li>
                      <a
                        href="img/product/related/rp-4.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_bag_alt" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Slim striped pocket shirt</a>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details Section End */}

      {/* Footer Section Begin */}
      <Footer></Footer>
      {/* Footer Section End */}

    </div>
  )
}
