import { Helmet, HelmetProvider } from 'react-helmet-async'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchingProducts from '../../redux/middleware/index.js';
import ProductList from '../../components/ProductList'
import FilterProduct from '../../components/FilterProduct/index.jsx';

const Products = () => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    console.log(productList, status, error);

    useEffect(() => {
        dispatch(fetchingProducts())
    }, [dispatch]);

    return (
        <HelmetProvider>
            <div className='products container'>
                <Helmet>
                    <title>Sản phẩm</title>
                </Helmet>
                <div className="row">
                <FilterProduct/>
                <ProductList
                    productList={productList}
                    status={status}
                    error={error}
                />
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Products