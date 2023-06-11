import { Link } from 'react-router-dom';
import ProductItem from './ProductItem'


import './ProductList.scss'
const ProductList = ({ display, status, error }) => {


    return (
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
                    display.map(item => {
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
    )
}

export default ProductList