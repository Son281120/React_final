import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const NotFound = () => {
    return (
        <HelmetProvider>
            <div className='not-found'>
                <Helmet>
                    <title>404</title>
                </Helmet>
                NotFound
            </div>
        </HelmetProvider>
    )
}

export default NotFound