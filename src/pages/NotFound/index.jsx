import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './NotFound.scss'
const NotFound = () => {
    
        useEffect(() => {
            const timer = setTimeout(() => {
                window.location.href = '/';
            }, 5000);

            return () => clearTimeout(timer);
        }, []);

        return (
            <HelmetProvider>
                <div className='not-found'>
                    <Helmet>
                        <title>404</title>
                    </Helmet>
                    <h1>Not Fornd 404!</h1>
                    <p>Chuyển hướng về trang chủ sau 5 giây...</p>
                </div>
            </HelmetProvider>
        )
    }

    export default NotFound