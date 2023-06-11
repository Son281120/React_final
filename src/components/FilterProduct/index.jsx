import React from 'react'
import RangePrice from './RangePrice'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FilterProduct.scss'
import FilterColor from './FilterColor';
import FilterSize from './FilterSize';
const FilterProduct = () => {

    return (
        <div className='filter-product product col-xs-3 col-sm-0 col-md-0 col-lg-3 col-hg-0'>
            <Row className="filter-group">
                <Col 
                    sm={{span:10, offset:1}}
                    md={{span:10, offset:1}}
                    lg={{span:10, offset:1}}
                    xl={{span:10, offset:1}}
                    className="filter-item"
                >
                    <div className="filter-item__title">
                        <h3>GIÁ THÀNH</h3>
                    </div>
                    <div className="filter-item__input">
                        <RangePrice/>
                    </div>
                </Col>
                <Col 
                    sm={{span:10, offset:1}}
                    md={{span:10, offset:1}}
                    lg={{span:10, offset:1}}
                    xl={{span:10, offset:1}}
                    className="filter-item"
                >
                    <div className="filter-item__title">
                        <h3>MÀU SĂC</h3>
                    </div>
                    <div className="filter-item__input">
                        <FilterColor/>
                    </div>
                </Col>
                <Col 
                    sm={{span:10, offset:1}}
                    md={{span:10, offset:1}}
                    lg={{span:10, offset:1}}
                    xl={{span:10, offset:1}}
                    className="filter-item"
                >
                    <div className="filter-item__title">
                        <h3>KÍCH THƯỚC</h3>
                    </div>
                    <div className="filter-item__input">
                        <FilterSize/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FilterProduct