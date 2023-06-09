import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../assets/img/PenguinLogo.png'
const HeaderMain = () => {
    const [searchInput, setSearchInput] = useState('');



    return (
        <div className="header__main">
            <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-xs-offset-2 col-sm-12 col-sm-offset-0 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-0 col-hg-2 header__logo">
                        <Link to="/" className="header__logo-link">
                            <img src={Logo} alt="logo" className="header__logo-img" />
                            <span className="header__logo-text">PENGUIN</span>
                            <span className="header__logo-text auth">AUTH</span>
                        </Link>
                    </div>
                    <nav className="col-xl-8 col-lg-8 col-md-12 col-sm-12 header__navbar">
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <Link to="/" className="navbar__item-link">
                                    <span>Trang chủ</span>
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/products" className="navbar__item-link">
                                    <span>Sản phẩm</span>
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/category" className="navbar__item-link">
                                    <span>Thương hiệu</span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </Link>
                                <div className="subnav">
                                    <ul className="subnav__list">
                                        <li className="subnav__item"><Link to="/category" className="subnav__item_link">Adidas</Link></li>
                                        <li className="subnav__item"><Link to="/category" className="subnav__item_link">Nike</Link></li>
                                        <li className="subnav__item"><Link to="/category" className="subnav__item_link">Jordan</Link></li>
                                        <li className="subnav__item"><Link to="/category" className="subnav__item_link">Puma</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="navbar__item">
                                <Link to="/policy" className="navbar__item-link">
                                    <span>Chính sách</span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </Link>
                                <div className="subnav">
                                    <ul className="subnav__list">
                                        <li className="subnav__item"><Link to="/policy/shoppingguide" className="subnav__item_link">Hướng dẫn mua hàng</Link></li>
                                        <li className="subnav__item"><Link to="/policy/termsofservices" className="subnav__item_link">Điều khoản dịch vụ</Link></li>
                                        <li className="subnav__item"><Link to="/policy/returnspolicychange" className="subnav__item_link">Chính sách đổi trả</Link></li>
                                        <li className="subnav__item"><Link to="/policy/rulesofuse" className="subnav__item_link">Quy định sử dụng</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="navbar__item">
                                <Link to="/" className="navbar__item-link">
                                    <span>ƯU ĐÃI</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <form className="col-xs-12 col-sm-12 col-md-5 col-md-offset-0 col-lg-2 col-lg-offset-10 col-hg-2 col-hg-offset-10 header__search">
                        <div className='header__search_group'>
                            <input
                                type="text"
                                className="header__search_input"
                                name="query"
                                title="Nhập từ khoá cần tìm"
                                placeholder="Tìm kiếm ..."
                                required=""
                                value={searchInput}
                                onChange={e => setSearchInput(e.target.value)}
                            />
                            <button className="search-btn">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain