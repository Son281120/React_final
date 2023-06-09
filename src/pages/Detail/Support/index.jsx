import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faShieldHalved, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Support = () => {
    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 panel__group">
                <div className="panel__detail panel__item">
                    <div className="panel__detail_title panel__title">
                        <label htmlFor="" className="detail__title_label">
                            <Link to="/products" className="detail__title_link title__link ">
                                <FontAwesomeIcon icon={faCircleInfo} />
                                CHI TIẾT SẢN PHẨM
                            </Link>
                        </label>
                    </div>
                    <div className="panel__detail_desc panel__desc">
                        <span className="detail__desc_span">
                            Đối với các sản phẩm hết size , bạn có thể liên hệ shop để có thể
                            <Link to="/policy/shoppingguide" className="detail__desc_link">ORDER</Link>
                            size bạn muốn !
                        </span>
                    </div>
                </div>

                <div className="panel__shopping_guide panel__item">
                    <div className="panel__shopping_guide_title panel__title">
                        <label htmlFor="" className="shopping_guide__title_label">
                            <Link to="/policy/shoppingguide" className="shopping_guide__title_link title__link">
                                <FontAwesomeIcon icon={faShieldHalved} />
                                HƯỚNG DẪN MUA HÀNG
                            </Link>
                        </label>
                    </div>
                    <div className="panel__shopping_guide_desc panel__desc">
                        <p><strong>Bước 1:</strong> Truy cập website và lựa chọn sản
                            phẩm cần mua để mua hàng</p>
                        <p><strong>Bước 2:</strong> Click và sản phẩm muốn mua, màn
                            hình hiển thị ra pop up với các lựa chọn sau</p>
                        <p>Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua
                            hàng để lựa chọn thêm sản phẩm vào giỏ hàng</p>
                        <p>Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem
                            giỏ hàng</p>
                        <p>Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui
                            lòng bấm vào: Đặt hàng và thanh toán</p>
                        <p><strong>Bước 3:</strong> Lựa chọn thông tin tài khoản thanh
                            toán</p>
                        <p>Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng
                            nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống</p>
                        <p>Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng
                            điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ
                            dàng theo dõi được đơn hàng của mình</p>
                        <p>Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp
                            chuột vào mục đặt hàng không cần tài khoản</p>
                        <p><strong>Bước 4:</strong> Điền các thông tin của bạn để nhận
                            đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình</p>
                        <p><strong>Bước 5:</strong> Xem lại thông tin đặt hàng, điền
                            chú thích và gửi đơn hàng</p>
                        <p>Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng
                            cách gọi điện lại để xác nhận lại đơn hàng và địa chỉ của bạn.</p>
                        <p>Trân trọng cảm ơn.</p>
                    </div>
                </div>

                <div className="panel__review panel__item">
                    <div className="panel__review_title panel__title">
                        <label htmlFor="" className="review__title_label">
                            <Link to="/review" className="review__title_link title__link">
                                <FontAwesomeIcon icon={faStar} />
                                ĐÁNH GIÁ
                            </Link>
                        </label>
                    </div>
                    <div className="panel__review_desc panel__desc">
                        <span className="review__desc_span">Đánh giá sản phẩm</span>
                        <button className="review__btn">Viết đánh giá</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support