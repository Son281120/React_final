import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import './CategorySlider.scss'
import { useSelector } from 'react-redux'
const CategorySlider = () => {
    const category = useSelector(state => state.category.category);
    const status = useSelector(state => state.category.status);
    const error = useSelector(state => state.category.error);

    return (
        <Container className="category-slider">
            <Row>
                <Col sm={12} md={12} lg={12} xl={12} className="category__title">
                    <h2 className="category__title-label">
                        <Link to="/category" className="label-link">
                            THƯƠNG HIỆU NỔI BẬT
                        </Link>
                    </h2>
                    <p className="category__title-desc">
                        Top các thương thiệu nổi bật nhất
                    </p>
                </Col>
            </Row>
            <Row className="category__list">
                {
                    status === 'successed' ?
                        category.map(item => {
                            return <Col xl={3} lg={3} md={4} sm={6} key={item.id} className='category__item'>
                                <div className="category__img">
                                    <img src={item.img} alt=""  />
                                </div>
                                <div className="category__info">
                                    <Link to={`/category/${item.id}`}><h4 className="category__info-name">{item.name}</h4></Link>
                                    <span className="category__info-quantity">102 sản phẩm</span>
                                </div>
                            </Col>
                        })
                        : `loading ${error}`
                }
            </Row>
        </Container>
    )
}

export default CategorySlider