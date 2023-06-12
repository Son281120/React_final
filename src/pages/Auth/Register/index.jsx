import React from 'react'

const Register = () => {
    return (
        <div className="form-container register-container">
            <form action="#" method="POST" id="form-register">
                <h1>Register here.</h1>
                <div className="form-group">
                    <input type="text" name="fullname" className="form-input fullname" />
                    <label htmlFor="fullname" className="form-label">Name</label>
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <input type="email" name="email" className="form-input email" />
                    <label htmlFor="email" className="form-label">Email</label>
                    <span className="form-message"></span>
                </div>
                <div className="form-group group-password">
                    <input type="password" name="password" className="form-input password" />
                    <label htmlFor="password" className="form-label">Password</label>
                    <i className="fa-regular fa-eye show-password active"></i>
                    <i className="fa-regular fa-eye-slash hide-password"></i>
                    <span className="form-message"></span>
                </div>
                <div className="form-group group-password">
                    <input type="password" name="password_confirmation" className="form-input password_confirmation" />
                    <label htmlFor="password_confirmation" className="form-label">Password Confirmation</label>
                    <i className="fa-regular fa-eye show-password active"></i>
                    <i className="fa-regular fa-eye-slash hide-password"></i>
                    <span className="form-message"></span>
                </div>
                <button className="btn">Register</button>
                <span>or use your account</span>
                <div className="social-container">
                    <a href="https://www.facebook.com/" className="social"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.facebook.com/" className="social"><i className="fa-brands fa-google"></i></a>
                    <a href="https://www.facebook.com/" className="social"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="link-container">
                    <span>Already have an account?</span>
                    <a href="https://www.facebook.com/" className="register-link">
                        Login
                    </a>
                </div>
            </form>
        </div>
    )
}

export default Register