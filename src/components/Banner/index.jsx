import React from 'react'

import './Banner.scss'
import banner_1 from '../../assets/img/banner/index_banner_medium_1___1_image.webp'
import banner_2 from '../../assets/img/banner/index_banner_medium_1___2_image.webp'


const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__img">
                <img src={banner_1} alt="" />
            </div>
            <div className="banner__img">
                <img src={banner_2} alt="" />
            </div>
        </div>
    )
}

export default Banner