import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'

const ProductItem = ({ id,name, img, newPrice, oldPrice }) => {

    return (
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 product__item">
            <NavLink to={`/detail/${id}`} className="product__item_link">
                <div className="product__img">
                    <img src={img} alt="" />
                </div>
                <div className="product__description">
                    <div className="product__id">128235-0029</div>
                    <div className="product__name">{name}</div>
                    <div className="product__price">
                        <span>Từ:</span>
                        <span className="product__price--new">{newPrice}</span>
                        <span className="product__price--old">{oldPrice}</span>
                    </div>
                </div>
                <div className="group__icon">
                    <button className="icon__btn icon--heart">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="icon__btn icon--search">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </NavLink>
        </div>
    )
}

export default ProductItem