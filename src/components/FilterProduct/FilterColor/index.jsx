import React, { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterColors } from '../../../redux/store/productSlice'; 

import './FilterColor.scss'
import { useSearchParams } from 'react-router-dom';

const FilterColor = () => {
    const [colors, setColors] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const status = useSelector((state) => state.products.status);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setColors((prevColors) => [...prevColors, value]);
        } else {
            setColors((prevColors) => prevColors.filter((color) => color !== value));
        }
    };

    useEffect(() => {
        if (status === 'successed') {
            dispatch(updateFilterColors(colors));
            searchParams.set("colors", JSON.stringify(colors));
            setSearchParams(searchParams);
        }
    }, [status, colors, dispatch, searchParams, setSearchParams])

    useEffect(()=>{
        if(searchParams.get('colors')) {
            const searchColorsParams = JSON.parse(searchParams.get("colors"));
            setColors(searchColorsParams);
        }  
    }, [searchParams])

    return (
        <div className='filter-color'>
            <div className='filter-color-item'>
                <input
                    type="checkbox"
                    value="red"
                    checked={colors.includes('red')}
                    onChange={handleCheckboxChange}
                />
                <FontAwesomeIcon icon={faCircle} />
            </div>
            <div className='filter-color-item'>
                <input
                    type="checkbox"
                    value="black"
                    checked={colors.includes('black')}
                    onChange={handleCheckboxChange}
                />
                <FontAwesomeIcon icon={faCircle} />
            </div>
            <div className='filter-color-item'>
                <input
                    type="checkbox"
                    value="blue"
                    checked={colors.includes('blue')}
                    onChange={handleCheckboxChange}
                />
                <FontAwesomeIcon icon={faCircle} />
            </div>
            <div className='filter-color-item'>
                <input
                    type="checkbox"
                    value="green"
                    checked={colors.includes('green')}
                    onChange={handleCheckboxChange}
                />
                <FontAwesomeIcon icon={faCircle} />
            </div>
            <div className='filter-color-item'>
                <input
                    type="checkbox"
                    value="orange"
                    checked={colors.includes('orange')}
                    onChange={handleCheckboxChange}
                />
                <FontAwesomeIcon icon={faCircle} />
            </div>
            <div className='filter-color-item'>
                <input
                    type="checkbox"
                    value="yellow"
                    checked={colors.includes('yellow')}
                    onChange={handleCheckboxChange}
                />
                <FontAwesomeIcon icon={faCircle} />
            </div>
            <div className='filter-color-item'>
                <input
                    type="checkbox"
                    value="purple"
                    checked={colors.includes('purple')}
                    onChange={handleCheckboxChange}
                />
                <FontAwesomeIcon icon={faCircle} />
            </div>
            <div className='filter-color-item'>
                <input
                    type="checkbox"
                    value="pink"
                    checked={colors.includes('pink')}
                    onChange={handleCheckboxChange}
                />
                <FontAwesomeIcon icon={faCircle} />
            </div>
            <div className='filter-color-item'>
                <input
                    type="checkbox"
                    value="gray"
                    checked={colors.includes('gray')}
                    onChange={handleCheckboxChange}
                />
                <FontAwesomeIcon icon={faCircle} />
            </div>
            <div className='filter-color-item'>
                <input
                    type="checkbox"
                    value="white"
                    checked={colors.includes('white')}
                    onChange={handleCheckboxChange}
                />
                <FontAwesomeIcon icon={faCircle} />
            </div>
        </div>
    )
}

export default FilterColor