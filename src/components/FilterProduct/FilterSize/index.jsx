import React, { useEffect } from 'react'
import { useState } from 'react'
import './FilterSize.scss'
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterSizes } from '../../../redux/store/productSlice'

const FilterSize = () => {
    const [sizes, setSizes] = useState([]);

    const dispatch = useDispatch();
    const status = useSelector((state) => state.products.status);
    
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setSizes((prevColors) => [...prevColors, value]);
        } else {
            setSizes((prevColors) => prevColors.filter((color) => color !== value));
        }
    };

    useEffect(() => {
        if (status === 'successed') {
            dispatch(updateFilterSizes(sizes));
        }
    }, [status, sizes, dispatch])
    
    return (
        <div className='filter-size'>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="36"
                    checked={sizes.includes('36')}
                    onChange={handleCheckboxChange}
                />
                <label>36</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="36.5"
                    checked={sizes.includes('36.5')}
                    onChange={handleCheckboxChange}
                />
                <label>36.5</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="37"
                    checked={sizes.includes('37')}
                    onChange={handleCheckboxChange}
                />
                <label>37</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="37.5"
                    checked={sizes.includes('37.5')}
                    onChange={handleCheckboxChange}
                />
                <label>37.5</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="38"
                    checked={sizes.includes('38')}
                    onChange={handleCheckboxChange}
                />
                <label>38</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="38.5"
                    checked={sizes.includes('38.5')}
                    onChange={handleCheckboxChange}
                />
                <label>38.5</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="39"
                    checked={sizes.includes('39')}
                    onChange={handleCheckboxChange}
                />
                <label>39</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="39.5"
                    checked={sizes.includes('39.5')}
                    onChange={handleCheckboxChange}
                />
                <label>39.5</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="40"
                    checked={sizes.includes('40')}
                    onChange={handleCheckboxChange}
                />
                <label>40</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="40.5"
                    checked={sizes.includes('40.5')}
                    onChange={handleCheckboxChange}
                />
                <label>40.5</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="41"
                    checked={sizes.includes('41')}
                    onChange={handleCheckboxChange}
                />
                <label>41</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="41.5"
                    checked={sizes.includes('41.5')}
                    onChange={handleCheckboxChange}
                />
                <label>41.5</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="42"
                    checked={sizes.includes('42')}
                    onChange={handleCheckboxChange}
                />
                <label>42</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="42.5"
                    checked={sizes.includes('42.5')}
                    onChange={handleCheckboxChange}
                />
                <label>40</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="43"
                    checked={sizes.includes('43')}
                    onChange={handleCheckboxChange}
                />
                <label>43</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="43.5"
                    checked={sizes.includes('43.5')}
                    onChange={handleCheckboxChange}
                />
                <label>40</label>
            </div>
            <div className='filter-size-item'>
                <input
                    type="checkbox"
                    value="44"
                    checked={sizes.includes('44')}
                    onChange={handleCheckboxChange}
                />
                <label>44</label>
            </div>
        </div>
    )
}

export default FilterSize