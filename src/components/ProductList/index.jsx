import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate'

import ProductItem from './ProductItem'

import './ProductList.scss'

const ProductList = ({ display, status, error }) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [perPage] = useState(12);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * perPage;
    const paginatedProducts = display.slice(offset, offset + perPage);

    return (
        <>
            <div className="product col-xs-9 col-sm-12 col-md-12 col-lg-9 col-hg-12">
                <div className="row">
                    <div className="product__title col-xs-12 col-sm-12 col-md-12 col-lg-12 col-hg-12">
                        <h2 className="product__title-label">
                            <Link to="/products" className="label-link">
                                SẢN PHẨM
                            </Link>
                        </h2>
                        <p className="product__title-desc">
                            Toàn bộ sản phẩm
                        </p>
                    </div>
                </div>
                <div className="row product__list">
                    {
                        paginatedProducts.map(item => {
                            return <ProductItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                img={item.img[0]}
                                newPrice={item.newPrice}
                                oldPrice={item.newPrice}
                            />
                        })
                    }

                </div>
            </div>
            <div className="product col-xs-9 col-sm-12 col-md-12 col-lg-9 col-hg-12">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(display.length / perPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    className='product__pagination'
                />
            </div>
        </>
    )
}

export default ProductList