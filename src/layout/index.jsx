import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <div className='header__margin'>
                <Outlet/>
            </div>
            <Footer />
        </div>
    )
}

export default Layout