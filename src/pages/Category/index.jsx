import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Category = () => {
    return (
        <HelmetProvider>
            <div className='category'>
                <Helmet>
                    <title>Thương hiệu</title>
                </Helmet>
                Category
            </div>
        </HelmetProvider>
    )
}

export default Category