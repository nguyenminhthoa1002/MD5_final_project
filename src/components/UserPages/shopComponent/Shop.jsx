import React from 'react'
import { NavLink } from 'react-router-dom'
import $ from "jquery";
import { useEffect } from 'react';
import Footer from '../homeComponent/Footer'
import ModalLogin from '../homeComponent/ModalLogin'
import ModalRegister from '../homeComponent/ModalRegister'

export default function Shop() {
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
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li>
                                        <NavLink to={"/"}>Home</NavLink>
                                    </li>
                                    <li>
                                        <a href="#">Women’s</a>
                                    </li>
                                    <li>
                                        <a href="#">Men’s</a>
                                    </li>
                                    <li className="active">
                                        <NavLink to={"/shop"}>Shop</NavLink>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li>
                                                <NavLink to={"/productDetail"}>Product Details</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/cart"}>Shop Cart</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/checkout"}>Checkout</NavLink>
                                            </li>
                                            <li>
                                                <a href="./blog-details.html">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="./blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="./contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    <a><ModalLogin></ModalLogin></a>
                                    <a><ModalRegister></ModalRegister></a>
                                </div>
                                <ul className="header__right__widget">
                                    <li>
                                        <span className="icon_search search-switch" />
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon_heart_alt" />
                                            <div className="tip">2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon_bag_alt" />
                                            <div className="tip">2</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
            </header>
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
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Shop Section Begin */}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="shop__sidebar">
                                <div className="sidebar__categories">
                                    <div className="section-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <div className="categories__accordion">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="card-heading active">
                                                    <a data-toggle="collapse" data-target="#collapseOne">
                                                        Women
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseOne"
                                                    className="collapse show"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseTwo">
                                                        Men
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseTwo"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseThree">
                                                        Kids
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseThree"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFour">
                                                        Accessories
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseFour"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFive">
                                                        Cosmetic
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseFive"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="section-title">
                                        <h4>Shop by price</h4>
                                    </div>
                                    <div className="filter-range-wrap priceCss">
                                        <p>Price:</p>
                                        <input type="number" />-
                                        <input type="number" />
                                    </div>
                                </div>
                                <div className="sidebar__sizes">
                                    <div className="section-title">
                                        <h4>Shop by size</h4>
                                    </div>
                                    <div className="size__list">
                                        <label htmlFor="xxs">
                                            xxs
                                            <input type="checkbox" id="xxs" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="xs">
                                            xs
                                            <input type="checkbox" id="xs" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="xss">
                                            xs-s
                                            <input type="checkbox" id="xss" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="s">
                                            s
                                            <input type="checkbox" id="s" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="m">
                                            m
                                            <input type="checkbox" id="m" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="ml">
                                            m-l
                                            <input type="checkbox" id="ml" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="l">
                                            l
                                            <input type="checkbox" id="l" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="xl">
                                            xl
                                            <input type="checkbox" id="xl" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__color">
                                    <div className="section-title">
                                        <h4>Shop by color</h4>
                                    </div>
                                    <div className="size__list color__list">
                                        <label htmlFor="black">
                                            Blacks
                                            <input type="checkbox" id="black" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="whites">
                                            Whites
                                            <input type="checkbox" id="whites" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="reds">
                                            Reds
                                            <input type="checkbox" id="reds" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="greys">
                                            Greys
                                            <input type="checkbox" id="greys" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="blues">
                                            Blues
                                            <input type="checkbox" id="blues" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="beige">
                                            Beige Tones
                                            <input type="checkbox" id="beige" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="greens">
                                            Greens
                                            <input type="checkbox" id="greens" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="yellows">
                                            Yellows
                                            <input type="checkbox" id="yellows" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__filter">
                                    <div className='filter-range-wrap'>
                                        <div className="range-slider">
                                            <a href="#">Filter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-1.jpg"
                                        >
                                            <div className="label new">New</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-1.jpg" className="image-popup">
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
                                                <a href="#">Furry hooded parka</a>
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-2.jpg"
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-2.jpg" className="image-popup">
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-3.jpg"
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-3.jpg" className="image-popup">
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
                                                <a href="#">Croc-effect bag</a>
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-4.jpg"
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-4.jpg" className="image-popup">
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
                                                <a href="#">Dark wash Xavi jeans</a>
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item sale">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-5.jpg"
                                        >
                                            <div className="label">Sale</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-5.jpg" className="image-popup">
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
                                                <a href="#">Ankle-cuff sandals</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">
                                                $ 49.0 <span>$ 59.0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-6.jpg"
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-6.jpg" className="image-popup">
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
                                                <a href="#">Contrasting sunglasses</a>
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-7.jpg"
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-7.jpg" className="image-popup">
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
                                                <a href="#">Circular pendant earrings</a>
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-8.jpg"
                                        >
                                            <div className="label stockout stockblue">Out Of Stock</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-8.jpg" className="image-popup">
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item sale">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-9.jpg"
                                        >
                                            <div className="label">Sale</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-9.jpg" className="image-popup">
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
                                                <a href="#">Water resistant zips backpack</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">
                                                $ 49.0 <span>$ 59.0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <div className="pagination__option">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">
                                            <i className="fa fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section End */}
            {/* Footer Section Begin */}
            <Footer></Footer>
            {/* Footer Section End */}
        </div>
    )
}
