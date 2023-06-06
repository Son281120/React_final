import React from 'react'
import './Header.scss'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'



const Header = () => {
    return (
        <header className="header">
            <HeaderTop/>
            <HeaderMain/>
        </header>
    )
}

export default Header