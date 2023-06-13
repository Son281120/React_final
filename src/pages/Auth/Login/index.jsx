import React, { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import { updateStatusLogin, updateUser } from '../../../redux/store/userSlice';
const Login = () => {
    const localAccount = useMemo(()=>{
        return JSON.parse(localStorage.getItem('account'))
    },[]);

    const [checkSaveAccount, setCheckSaveAccount] = useState(localAccount ? true : false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()

    const nav = useNavigate();

    const handleCheckLogin = async (values) => {
        try {
            const response = await fetch('https://peguinauth.onrender.com/user');
            const dataUser = await response.json();
            const user = dataUser.find(user => user.email === values.email && user.password === values.password);
            if (user) {
                dispatch(updateUser(user));
                dispatch(updateStatusLogin(true))
                localStorage.setItem('isLogin', JSON.stringify(true));
                localStorage.setItem('saveAccount', JSON.stringify(user));
                nav('/');
                if(checkSaveAccount) {
                    localStorage.setItem('account', JSON.stringify(values));
                }
            } else {
                alert('Sai tài khoản hoặc mật khẩu!');
            }
        } catch (error) {
            console.log('Lỗi khi gọi API: ' + error);
        }
    };


    const formik = useFormik({
        initialValues: {
            email: localAccount ? localAccount.email: '',
            password: localAccount ? localAccount.password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Email không hợp lệ!')
                .required('Bạn phải điền vào phần này!'),
            password: Yup.string()
                .min(8, 'Mật khẩu của bạn phải ít nhất có 8 ký tự')
                .required('Bạn phải điền vào phần này!'),

        }),
        onSubmit: (values) => {
            handleCheckLogin(values)
        }
    });

    return (
        <HelmetProvider>
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>
            <div className="form-container login-container">
                <form action="#" method="POST" id="form-login" onSubmit={formik.handleSubmit}>
                    <h1>Login here.</h1>
                    <div className="form-group">
                        <input
                            type="text"
                            name="email"
                            className="form-input email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="email" className="form-label">Email</label>
                        {
                            formik.errors.email && formik.touched.email && (<span className="form-message">{formik.errors.email}</span>)
                        }
                    </div>
                    <div className="form-group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            className="form-input password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="password" className="form-label">Password</label>
                        <FontAwesomeIcon
                            icon={faEyeSlash}
                            className={showPassword ? 'show-password' : 'show-password active'}
                            onClick={() => { setShowPassword(!showPassword) }}
                        />
                        <FontAwesomeIcon
                            icon={faEye}
                            className={showPassword ? 'hide-password  active' : 'hide-password'}
                            onClick={() => { setShowPassword(!showPassword) }}
                        />
                        {
                            formik.errors.password && formik.touched.password && (<span className="form-message">{formik.errors.password}</span>)
                        }
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
        </HelmetProvider>
    )
}

export default Login