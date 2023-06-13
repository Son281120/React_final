import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import DisplayUser from './DisplayUser';
import PopCart from './PopCart'
import './HeaderTop.scss'
import { useSelector } from 'react-redux';
import useHoverItem from '../../../hook';

const HeaderTop = () => {
    const { isHover, handleMouseEnter, handleMouseLeave } = useHoverItem();


    const statusLogin = useSelector(state => state.user.statusLogin);
    const selectedProducts = useSelector(state => state.products.selected);
    console.log(selectedProducts);

    return (
        <div className="header__top">
            <div className="container-fluid">
                <div className="row">
                    <div className="hidden-xs col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-0 col-lg-8 col-hg-9">
                        <div className="header__top_left">
                            <ul className="list__contact">
                                <li className="contact__item">
                                    Số 103 Yên Sở , Hoài Đức , Hà Nội
                                </li>
                                <li className="contact__item">
                                    Hotline:
                                    <Link to="tel:0822696888">
                                        <strong>0822696888</strong>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-hg-3">
                        <div className="panel_cart">
                            <div className="top-cart-contain">
                                <div className="mini-cart text-xs-center"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="heading-cart" >
                                        <Link to="/cart">
                                            <span className="cartImg">
                                                <img src="//bizweb.dktcdn.net/thumb/icon/100/347/064/themes/717243/assets/icon_cart___empty.png?1677949219365"
                                                    alt="icon-cart" />
                                            </span>
                                            {
                                                selectedProducts.length !== 0 && <span className="cartCount count_item_pr" id="cart-total">{selectedProducts.length}</span>
                                            }
                                        </Link>
                                    </div>
                                    <div className="top-cart-content hidden-sm hidden-xs">
                                        <ul id="cart-sidebar" className="mini-products-list count_li">
                                            <div className="no-item"></div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {isHover && <PopCart/>}
                        </div>
                        {
                            statusLogin ? <DisplayUser />
                                : <div className="header__top-right hidden-xs hidden-sm">
                                    <img src="//bizweb.dktcdn.net/thumb/icon/100/347/064/themes/717243/assets/icon_account.png?1677949317964"
                                        className="img-responsive" alt="Tài khoản" />
                                    <ul className="cp">
                                        <li className="cp-item">
                                            <NavLink to="/auth/login" title="Đăng nhập" className="btn-transition">
                                                <span>Đăng nhập</span>
                                            </NavLink>
                                        </li>
                                        <li className="cp-item">
                                            <NavLink to="/auth/register" title="Đăng ký" className="btn-transition">
                                                <span>Đăng ký</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop