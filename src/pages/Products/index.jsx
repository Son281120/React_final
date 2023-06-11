import { Helmet, HelmetProvider } from 'react-helmet-async'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchingProducts from '../../redux/middleware/index.js';
import ProductList from '../../components/ProductList'
import FilterProduct from '../../components/FilterProduct/index.jsx';
import { showAll } from '../../redux/store/displaySlice.js';

const Products = () => {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    const display = useSelector((state) => state.display);

    useEffect(() => {
        dispatch(fetchingProducts())
    }, [dispatch]);

    useEffect(() => {
        dispatch(showAll(productList));
    }, [dispatch, productList])

    return (
        <HelmetProvider>
            <div className='products container'>
                <Helmet>
                    <title>Sản phẩm</title>
                </Helmet>
                <div className="row">
                <FilterProduct/>
                <ProductList
                    productList={display}
                    status={status}
                    error={error}
                />
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Products