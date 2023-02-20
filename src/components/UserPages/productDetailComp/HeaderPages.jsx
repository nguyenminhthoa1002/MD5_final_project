import React from 'react'
import { NavLink } from 'react-router-dom'
import ModalLogin from '../homeComponent/ModalLogin'
import ModalRegister from '../homeComponent/ModalRegister'

export default function HeaderPages() {
    return (
        <div>
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
                                    <li >
                                        <NavLink to={"/shop"}>Shop</NavLink>
                                    </li>
                                    <li className="active">
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
                                                <NavLink to={"/blogDetail"}>Blog Details</NavLink>
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
        </div>
    )
}
