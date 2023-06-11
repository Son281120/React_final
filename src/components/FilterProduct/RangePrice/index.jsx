import React, { useRef, useState } from 'react'
import Slider from 'react-slider'
import './RangePrice.scss'
import { useDispatch, useSelector } from 'react-redux';
import { showAll, filterByPrice } from '../../../redux/store/displaySlice'




const RangePrice = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.products.products);
    const status = useSelector((state) => state.products.status);
    const MIN = useRef(0);
    const MAX = useRef(20000000);


    const [price, setPrice] = useState([MIN.current, MAX.current]);

    const handleMouseUp = () => {
        if (status === 'successed') {
            dispatch(showAll(productList));
            dispatch(filterByPrice(price));
        }
    };
    

    return (
        <div className='range-price'>
            <div className="min-max-price">
                {price[0].toLocaleString("en-US", { style: "decimal" })}đ - {price[1].toLocaleString("en-US", { style: "decimal" })}đ
            </div>
            <Slider
                className="range-price-slider"
                onChange={setPrice}
                onAfterChange={() => handleMouseUp()}
                value={price}
                min={MIN.current}
                step={100000}
                max={MAX.current}
            />
        </div>
    )
}

export default RangePrice