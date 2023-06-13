import React from 'react'
import './PopCart.scss'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const PopCart = () => {
    const selectedProducts = useSelector(state => state.products.selected);

    const handleBtnMinus = () => {

    };

    const handleBtnPlus = () => {
        
    };
    const handleBtnDeletePopUpItem = () => {
        
    };

    return (
        <div className='pop-cart'>
            <span className="pop-cart__title">Sản phẩm có trong giỏ hàng</span>
            <ul className="pop-cart__list">
                {selectedProducts.length !== 0
                    ? selectedProducts.map(item => {
                        return <li className='pop-cart__item' key={item.id}>
                            <img src={item.img[0]} alt="anh san pham" className='pop-cart__item_img' />
                            <div className="pop-cart__item_info">
                                <Link to={`/detail/${item.id}`} className="pop-cart__item_info_name">{item.name}</Link>
                                <div className="pop-cart__item_quantity">
                                    <button className='pop-cart__item_quantity_btnMinus' onClick={() => { handleBtnMinus(item.id) }}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button className='pop-cart__item_quantity_btnPlus' onClick={() => { handleBtnPlus(item.id) }}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                            <button className='pop-cart__item_btnDelete' onClick={() => { handleBtnDeletePopUpItem(item.id) }}>Xoá</button>
                        </li>
                    })
                    : <span> Không có sản phẩm nào </span>
                }
            </ul>
            <div className="pop-cart__total">
                <span>Total: </span>
                {selectedProducts.reduce(((accumulator, currentValue) => {
                    return accumulator + currentValue.price * currentValue.quantity
                }), 0)} $
            </div>
        </div>
    )
}

export default PopCart