import React from 'react'
import './New.scss'
import new_1 from '../../assets/img/news/picture1.webp'
import new_2 from '../../assets/img/news/picture2.webp'
import new_3 from '../../assets/img/news/picture3.webp'
import new_4 from '../../assets/img/news/picture4.webp'



const New = () => {
    return (
        <div className="news container">
            <div className="row">
                <div className="new__title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-hg-12">
                    <h2 className="new__title-label">
                        <a href="https://bibeoauthentic.vn/" target='blank' className="label-link">
                            TỔNG HỢP SỰ KIỆN
                        </a>
                    </h2>
                    <p className="new__title-desc">
                        Hot & mới nhất chỉ có tại Penguin Authentic
                    </p>
                </div>
                <div className="new__item col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="new__img">
                        <img src={new_1} alt=""/>
                    </div>
                    <div className="new__info">
                        <h4 className="new__info-name">
                            <a href='https://bibeoauthentic.vn/' target='blank'>Top 5 đôi dày Jordan cho các lễ đầu năm</a>
                        </h4>
                        <div className="new__info-desc">
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                            Không khí lễ hội đang nhộn nhịp hơn bao giờ hết nên đây là lúc thích hợp để mua sắm. Vậy mua cái
                            gì để còn tiền mua những vật dụng khác ? Đó chính là mua giày, một item vừa......
                        </div>
                        <div className="new__info-author">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <span>Như ngọc</span>
                        </div>

                    </div>
                </div>
                <div className="new__item col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="new__img">
                        <img src={new_2} alt=""/>
                    </div>
                    <div className="new__info">
                        <h4 className="new__info-name">
                            <a href='https://bibeoauthentic.vn/' target='blank'>Logo in trên lót - Nỗi ám ảnh của người chơi Jordan</a>
                        </h4>
                        <div className="new__info-desc">
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                            Chất lượng phần logo Jumpman được in trên lót dòng Jordan 1 luôn là nỗi ám ảnh của các anh chị
                            em , người chơi hệ Jordan chúng mình.
                            Sau khi nhận được nhiều ph.....
                        </div>
                        <div className="new__info-author">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <span>Xuân Sơn</span>
                        </div>
                    </div>
                </div>

                <div className="new__item col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="new__img">
                        <img src={new_3} alt=""/>
                    </div>
                    <div className="new__info">
                        <h4 className="new__info-name">
                            <a href='https://bibeoauthentic.vn/' target='blank'>Bí quyết chọn giày đúng chuẩn size chân</a>
                        </h4>
                        <div className="new__info-desc">
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                            Nếu lựa chọn cho mình những đôi giày nhỏ hơn hoặc lớn hơn kích thước bàn chân đều có thể gây tổn
                            thương đến đôi chân và cột sống của bạn. Giữ nguyên tình trạng này trong th......
                        </div>
                        <div className="new__info-author">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <span>Như ngọc</span>
                        </div>

                    </div>
                </div>
                <div className="new__item col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="new__img">
                        <img src={new_4} alt=""/>
                    </div>
                    <div className="new__info">
                        <h4 className="new__info-name">
                            <a href='https://bibeoauthentic.vn/' target='blank'>5 Bước Giặt Giày Sneaker Và 4 Cách Bảo Quản Chuẩn Mực</a>
                        </h4>
                        <div className="new__info-desc">
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                            Sở hữu những đôi giày Sneaker chất lượng là điều vô cùng tuyệt vời đối rất nhiều người mê giày.
                            Tuy nhiên bạn còn phải biết cách giặt giày Sneaker như thế nào, sử......
                        </div>
                        <div className="new__info-author">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <span>Admin PenguinAuthentic</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default New