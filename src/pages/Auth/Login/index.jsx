import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Login = () => {

    const [checkSaveAccount, setCheckSaveAccount] = useState(false)
    const nav = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        nav('/')
    };

    return (
        <div className="form-container login-container">
            <form action="#" method="POST" id="form-login" onSubmit={handleLogin}>
                <h1>Login here.</h1>
                <div className="form-group">
                    <input type="text" name="email" className="form-input email" />
                    <label htmlFor="email" className="form-label">Email</label>
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-input password" />
                    <label htmlFor="password" className="form-label">Password</label>
                    <FontAwesomeIcon icon={faEye} />
                    <FontAwesomeIcon icon={faEyeSlash} />
                    <span className="form-message"></span>
                </div>
                <div className="content">
                    <div className="ckeckbox">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            checked={checkSaveAccount}
                            onChange={() => { setCheckSaveAccount(!checkSaveAccount) }}
                        />
                        <label>Remember me</label>
                    </div>
                    <div className="pass-link">
                        <a href="https://www.facebook.com/">Forgot password?</a>
                    </div>
                </div>
                <button className="btn">Login</button>
                <span>or use your account</span>
                <div className="social-container">
                    <a href="https://www.facebook.com/" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.facebook.com/" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
                    <a href="https://www.facebook.com/" className="social"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <div className="link-container">
                    <span>Don't have an account?</span>
                    <Link to="/auth/register" className="login-link">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login