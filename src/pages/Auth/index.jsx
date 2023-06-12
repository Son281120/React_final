import React from 'react'
import './Auth.scss'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
const Auth = () => {

    const router = useLocation();
    const nav = useNavigate();

    if(router.pathname === '/auth') {
        return <Navigate to={'/auth/login'}/>
    }

    return (
        <div className='full-screen'>
            <div className="auth-container" id="container">
                <Outlet/>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="title">Hello <br /> friends</h1>
                            <p>if Your have an account, login here and have fun</p>
                            <button className="btn ghost" id="login" onClick={() => {nav('/auth/login')}}>
                                Login
                                <i className="fa-solid fa-arrow-left login"></i>
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="title">Start now <br /> journy now</h1>
                            <p>if you don't have an account yet, join us and start your joumey.</p>
                            <button className="btn ghost" id="register" onClick={() => {nav('/auth/register')}}>
                                Register
                                <i className="fa-solid fa-arrow-right register"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth