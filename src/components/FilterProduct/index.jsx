import React, { useState } from 'react'

const FilterProduct = () => {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const handleMinChange = (event) => {
        const value = parseInt(event.target.value);
        setMinValue(value);
        if (value > maxValue) {
            setMaxValue(value);
        }
    };

    const handleMaxChange = (event) => {
        const value = parseInt(event.target.value);
        setMaxValue(value);
        if (value < minValue) {
            setMinValue(value);
        }
    };

    return (
        <div className='filter-product product col-xs-3 col-sm-0 col-md-0 col-lg-3 col-hg-0'>
            <div className="filter-group row">
                <div className="filter-item col-xs-12 col-sm-12 col-md-12 col-lg-12 col-hg-12">
                    <div className="filter-item__title">
                        <h3>GIÁ THÀNH</h3>
                    </div>
                    <div className="filter-item__input">
                        <input
                            type="number"
                            min={0}
                            max={maxValue}
                            step={1}
                            value={minValue}
                            onChange={handleMinChange}
                        />
                        <input
                            type="number"
                            min={minValue}
                            max={100}
                            step={1}
                            value={maxValue}
                            onChange={handleMaxChange}
                        />
                    </div>
                </div>
                <div className="filter-item col-xs-12 col-sm-12 col-md-12 col-lg-12 col-hg-12">

                </div>
                <div className="filter-item col-xs-12 col-sm-12 col-md-12 col-lg-12 col-hg-12">

                </div>
            </div>
        </div>
    )
}

export default FilterProduct