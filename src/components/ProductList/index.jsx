import React from 'react'
import { useSelector } from 'react-redux'

import './ProductList.scss'
import { Link } from 'react-router-dom';
const ProductList = () => {
    const productList = useSelector(state => state.product);
    console.log(productList);
    return (
        <div className="product container">
            <div className="row">
                <div className="product__title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-hg-12">
                    <h2 className="product__title-label">
                        <Link to="" className="label-link">
                            SẢN PHẨM NỔI BẬT
                        </Link>
                    </h2>
                    <p className="product__title-desc">
                        Top các thương thiệu nổi bật nhất
                    </p>
                </div>
            </div>
            <div className="row product__list">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 product__item">
                    <Link to="/products" className="product__item_link">
                        <div className="product__img">
                            <img src="./assets/img/product/product_4-1.webp" alt="" />
                        </div>
                        <div className="product__description">
                            <div className="product__id">128235-0029</div>
                            <div className="product__name"><a href="./detail.html">Jordan 1 High Zoom Air CMFT Pink Glaze (CT0979-601)</a></div>
                            <div className="product__price">
                                <span>Từ:</span>
                                <span className="product__price--new">3.000.000đ</span>
                                <span className="product__price--old">7.989.000đ</span>
                            </div>
                        </div>
                        <div className="group__icon">
                            <button className="icon__btn icon--heart">
                                <i className="fa-solid fa-heart"></i>
                            </button>
                            <button className="icon__btn icon--search">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                        <button className="add-cart-btn">Thêm vào giỏ hàng</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductList