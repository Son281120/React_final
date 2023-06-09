import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import chart from '../../../assets/img/chart.png'

const Introduce = () => {
    return (
        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
            <div className="product__introduce product__form_label">
                <label htmlFor="" className="product__type_label label-block">GIỚI THIỆU</label>
                <span className="introduce__desc">(Đang cập nhật)</span>
            </div>
            <div className="product__qr product__form_label">
                <label htmlFor="" className="product__type_label label-block">QUÉT MÃ QR CODE</label>
                <img src={chart} alt="qr code" className="qr__img" />
            </div>
            <div className="social-media">
                <ul className="social-media-list">
                    <li className="social-media-item social-media-item-boder">
                        <a href="https://www.facebook.com/nguyenxuan.son.2811" target='blank'>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li className="social-media-item social-media-item-boder">
                        <a href="https://bibeoauthentic.vn/" target='blank'>
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                    </li>
                    <li className="social-media-item social-media-item-boder">
                        <a href="https://www.youtube.com/" target='blank'>
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </li>
                    <li className="social-media-item social-media-item-boder">
                        <a href="https://www.instagram.com/bibeo.authentic/?hl=en" target='blank'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="people">
                <i className="fa-solid fa-users"></i>
                <span>Đang có 19 người cùng xem sản phẩm này</span>
            </div>
        </div>
    )
}

export default Introduce