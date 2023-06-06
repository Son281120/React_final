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
                
            </div>
        </div>
    )
}

export default ProductList