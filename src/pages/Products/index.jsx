import { Helmet, HelmetProvider } from 'react-helmet-async'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterData } from '../../redux/store/productSlice'

import FilterProduct from '../../components/FilterProduct/index.jsx';
import ProductList from '../../components/ProductList'

const Products = () => {

    const dispatch = useDispatch();
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    const filterItem = useSelector((state) => state.products.filterItem);
    const display = useSelector((state) => state.products.displayProducts);
    


    useEffect(() => {
        dispatch(filterData(filterItem));
    }, [dispatch, filterItem])

    return (
        <HelmetProvider>
            <div className='products container'>
                <Helmet>
                    <title>Sản phẩm</title>
                </Helmet>
                <div className="row">
                    <FilterProduct />
                    <ProductList
                        display={display}
                        status={status}
                        error={error}
                    />
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Products