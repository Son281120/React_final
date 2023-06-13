import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slider'
import './RangePrice.scss'
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterPrice } from '../../../redux/store/productSlice'; 
import { useSearchParams } from 'react-router-dom';




const RangePrice = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.products.status);
    const MIN = useRef(0);
    const MAX = useRef(20000000);
    let [searchParams, setSearchParams] = useSearchParams();



    const [price, setPrice] = useState([MIN.current, MAX.current]);

    const handleMouseUp = () => {
        if (status === 'successed') {
            dispatch(updateFilterPrice(price));
            searchParams.set("price", JSON.stringify(price));
            setSearchParams(searchParams);
        }
    };
    
    useEffect(()=>{
        if(searchParams.get('price')) {
            const searchPriceParams = JSON.parse(searchParams.get("price"));
            setPrice(searchPriceParams);
        }
    }, [searchParams])

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