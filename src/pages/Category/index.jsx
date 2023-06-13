import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'


const Category = () => {
    return (
        <HelmetProvider>
            <div className='category'>
                <Helmet>
                    <title>Thương hiệu</title>
                </Helmet>
                Thuong hieu
            </div>
        </HelmetProvider>
    )
}

export default Category