import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/store/productSlice';
import { Link } from 'react-router-dom';

import './ProductList.scss'
const ProductList = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    console.log(productList, status, error);

    useEffect(() => {
        dispatch(fetchProducts)
    },[dispatch]);

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