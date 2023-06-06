import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './Slider.scss'
import slide_1 from '../../assets/img/slider/slider_1_image.webp'
import slide_2 from '../../assets/img/slider/slider_2_image.webp'
import slide_3 from '../../assets/img/slider/slider_3_image.webp'
import slide_4 from '../../assets/img/slider/slider_4_image.webp'

const Slider = () => {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider