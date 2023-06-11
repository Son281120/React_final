import React, { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { showAll, filterByColor } from '../../../redux/store/displaySlice'

import './FilterColor.scss'

const FilterColor = () => {
    const [colors, setColors] = useState([]);
    
    const dispatch = useDispatch();
    const productList = useSelector(state => state.products.products);
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
            dispatch(showAll(productList));
            if (colors.length === 0) {
                dispatch(showAll(productList));
            } else {
                dispatch(filterByColor(colors));
            }
        }
    }, [status, productList, colors, dispatch])

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