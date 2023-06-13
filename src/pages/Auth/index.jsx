import React, { useState } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Auth.scss'

const Auth = () => {
    const [swap, setSwap] = useState(true)
    const router = useLocation();
    const nav = useNavigate();

    if (router.pathname === '/auth') {
        return <Navigate to={'/auth/login'} />
    }
    const handleBtnRegisterSwap = () => {
        nav('/auth/register');
        setSwap(!swap);
    };

    const handleBtnLoginSwap = () => {
        nav('/auth/login');
        setSwap(!swap);
    };

    return (
        <div className='full-screen'>
            <div className={swap ? "auth-container" : "auth-container right-panel-active"} id="container">
                <Outlet />
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="title">Hello <br /> friends</h1>
                            <p>if Your have an account, login here and have fun</p>
                            <button className="btn ghost" id="login" onClick={handleBtnLoginSwap}>
                                Login
                                <FontAwesomeIcon icon={faArrowLeft}/>
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="title">Start now <br /> journy now</h1>
                            <p>if you don't have an account yet, join us and start your joumey.</p>
                            <button className="btn ghost" id="register" onClick={handleBtnRegisterSwap}>
                                Register
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth