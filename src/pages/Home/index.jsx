import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Slider from '../../components/Slider'
import Banner from '../../components/Banner'
import New from '../../components/New/inded'
import CategorySlider from '../../components/CategorySlider'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HelmetProvider>
            <div className='home'>
                <Helmet>
                    <title>Trang chủ</title>
                </Helmet>
                <Slider />
                <CategorySlider />
                <Banner />
                <New />
            </div>
        </HelmetProvider>
    )
}

export default Home