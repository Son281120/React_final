import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


import './Footer.scss'
import logo from '../../assets/img/PenguinLogo.png'

const Footer = () => {
    const [emailInput, setEmailInput] = useState('')

    return (
        <footer className="footer">
            <div className="footer__top container-fluid">
                <img src="https://bizweb.dktcdn.net/100/347/064/themes/717243/assets/section_privacy___image__1.png?1677949317964"
                    alt="" />
                <span className="footer__top-title">HỖ TRỢ VẬN CHUYỂN COD TOÀN QUỐC:</span>
                <span className="footer__top-desc">trợ giá bảo hiểm cho mọi mặt hàng</span>

            </div>
            <div className="footer__main">
                <div className="containner">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 footer__logo">
                            <NavLink to="/" className="footer__logo-link">
                                <img src={logo} alt="logo" className="footer__logo-img" />
                                <span className="footer__logo-text">PENGUIN</span>
                                <span className="footer__logo-text auth">AUTH</span>
                            </NavLink>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                            <div className="footer__info">
                                <h4 className="footer__title">
                                    <span>CỬA HÀNG CHUYÊN HÀNG CHÍNH HÃNG</span>
                                </h4>
                                <ul>
                                    <li>
                                        Địa chỉ: Số 103 Yên Sở , Hoài Đức , Hà Nội
                                    </li>
                                    <li>
                                        Hotline: <a href="tel:0822696888">0822696888</a>
                                    </li>
                                    <li>
                                        Email: <a href="mailto:bi1508.97@gmail.com">bi1508.97@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 footer__item">
                            <div className="footer__info">
                                <h4 className="footer__title">
                                    <span>GIỚI THIỆU</span>
                                </h4>
                                <ul>
                                    <li className="f-item">
                                        <Link to="/policy/shoppingguide">Hướng dẫn mua hàng</Link>
                                    </li>
                                    <li className="f-item">
                                        <Link to="/policy/termsofservices">Điều khoản dịch vụ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 footer__item">
                            <div className="footer__info">
                                <h4 className="footer__title">
                                    <span>CHÍNH SÁCH</span>
                                </h4>
                                <ul>
                                    <li className="f-item">
                                        <Link to="/policy/returnspolicychange">Chính sách đổi trả</Link>
                                    </li>
                                    <li className="f-item">
                                        <Link to="/policy/rulesofuse">Quy định sử dụng</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 footer__item">
                            <div className="footer__info">
                                <h4 className="footer__title">
                                    <span>HỖ TRỢ</span>
                                </h4>
                                <ul>
                                    <li className="f-item">
                                        <Link to="/">Tìm kiếm</Link>
                                    </li>
                                    <li className="f-item">
                                        <Link to="/">Đăng nhập</Link>
                                    </li>
                                    <li className="f-item">
                                        <Link to="/">Đăng ký</Link>
                                    </li>
                                    <li className="f-item">
                                        <Link to="/cart">Giỏ hàng</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 footer__item">
                            <div className="footer__info">
                                <div className="social-media">
                                    <h4 className="footer__title">
                                        <span>KẾT NỐI CHÚNG TÔI</span>
                                    </h4>
                                    <ul className="social-media-list">
                                        <li className="social-media-item">
                                            <a href="https://www.facebook.com/nguyenxuan.son.2811" target='blank'>
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li className="social-media-item">
                                            <a href="https://bibeoauthentic.vn/" target='blank'>
                                                <FontAwesomeIcon icon={faGoogle} />
                                            </a>
                                        </li>
                                        <li className="social-media-item">
                                            <a href="https://www.youtube.com/" target='blank'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </li>
                                        <li className="social-media-item">
                                            <a href="https://www.instagram.com/bibeo.authentic/?hl=en" target='blank'>
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </a>
                                        </li>
                                        <li className="social-media-item"></li>
                                    </ul>
                                </div>
                                <div className="receive-infomation">
                                    <h4 className="footer__title">
                                        <span>NHẬN TIN KHIẾN MẠI</span>
                                    </h4>
                                    <form action="">
                                        <input
                                            type="email"
                                            placeholder="Email của bạn"
                                            className="email-contact"
                                            value={emailInput}
                                            onChange={e => setEmailInput(e.target.value)}

                                        />
                                        <button className="email-btn">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer