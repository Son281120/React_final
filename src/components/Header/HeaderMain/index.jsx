import React, { useEffect, useState } from 'react'
import { Link, NavLink, useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilterName } from '../../../redux/store/productSlice'
import './HeaderMain.scss'
import Logo from '../../../assets/img/PenguinLogo.png'

const HeaderMain = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [searchInput, setSearchInput] = useState('');

    const dispatch = useDispatch();
    const statusProduct = useSelector((state) => state.products.status);
    const category = useSelector(state => state.category.category);
    const statusCategory = useSelector(state => state.category.status);


    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (statusProduct === 'successed' && searchInput !== '') {
            dispatch(updateFilterName(searchInput));
            searchParams.set("name", JSON.stringify(searchInput));
            setSearchParams(searchParams);
        }
    }


    useEffect(() => {
        if (statusProduct === 'successed' && !searchInput) {
            dispatch(updateFilterName(searchInput));
        }
    }, [statusProduct, searchInput, dispatch]);

    useEffect(() => {
        if (searchParams.get('name')) {
            const searchNameParams = JSON.parse(searchParams.get("name"));
            setSearchInput(searchNameParams);
        }
    }, [searchParams])


    const activeClass = (params) => {
        return params.isActive ? 'active-item navbar__item-link' : 'navbar__item-link'
    }

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
                                <NavLink to="/" className={activeClass}>
                                    <span>Trang chủ</span>
                                </NavLink>
                            </li>
                            <li className="navbar__item">
                                <NavLink to="/products" className={activeClass}>
                                    <span>Sản phẩm</span>
                                </NavLink>
                            </li>
                            <li className="navbar__item">
                                <NavLink to="/category" className={activeClass}>
                                    <span>Thương hiệu</span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </NavLink>
                                <div className="subnav">
                                    <ul className="subnav__list">
                                        {
                                            statusCategory === 'successed' ?
                                                category.map(item => {
                                                    return <li className="subnav__item" key={item.id}>
                                                        <Link to={`/category/${item.id}`} className="subnav__item_link">{item.name}</Link>
                                                    </li>
                                                })
                                                : 'loading'
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li className="navbar__item">
                                <NavLink to="/policy" className={activeClass}>
                                    <span>Chính sách</span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </NavLink>
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
                                <NavLink to="/" className="navbar__item-link">
                                    <span>ƯU ĐÃI</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <form className="col-xs-12 col-sm-12 col-md-5 col-md-offset-0 col-lg-2 col-lg-offset-10 col-hg-2 col-hg-offset-10 header__search" onSubmit={handleSearchSubmit}>
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