import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductItem = () => {
    return (
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 product__item">
            <NavLink to="/products/id" className="product__item_link">
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
            </NavLink>
        </div>
    )
}

export default ProductItem