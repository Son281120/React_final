import { faFacebookF, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleRegister = async (name, email, password) => {
        try {
            const response = await fetch('https://peguinauth.onrender.com/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, email: email, password: password })
            });
            if (response.ok) {
                // Tạo người dùng thành công
                alert('Tạo người dùng thành công');
                // Xử lý các hành động sau khi tạo người dùng thành công
            } else {
                // Xử lý lỗi khi tạo người dùng
                alert('Lỗi khi tạo người dùng');
            }
        } catch (error) {
            alert('Lỗi khi gọi API: ' + error);
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Tên phải dài trên 3 kí tự!')
                .max(25, 'Tên phải ngắn dưới 25 ký  tự!')
                .required('Bạn phải điền vào phần này!'),
            email: Yup.string()
                .email('Email không hợp lệ!')
                .required('Bạn phải điền vào phần này!'),
            password: Yup.string()
                .min(8, 'Mật khẩu phải dài trên 8 ký !')
                .required('Bạn phải điền vào phần này!'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Nhập lại mật khẩu không đúng!')
                .required('Bạn phải điền vào phần này!'),
        }),
        onSubmit: (values) => {
            handleRegister(values.name, values.email, values.password)
        }
    });

    return (
        <HelmetProvider>
            <Helmet>
                <title>Đăng ký</title>
            </Helmet>
            <div className="form-container register-container">
                <form action="#" method="POST" id="form-register" onSubmit={formik.handleSubmit}>
                    <h1>Register here.</h1>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-input fullname"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="name" className="form-label">Name</label>
                        {
                            formik.errors.name && formik.touched.name && (<span className="form-message">{formik.errors.name}</span>)
                        }
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
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
                    <div className="form-group group-password">
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
                    <div className="form-group group-password">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            className="form-input password_confirmation"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="confirmPassword" className="form-label">Password Confirmation</label>
                        <FontAwesomeIcon
                            icon={faEyeSlash}
                            className={showConfirmPassword ? 'show-password' : 'show-password active'}
                            onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}
                        />
                        <FontAwesomeIcon
                            icon={faEye}
                            className={showConfirmPassword ? 'hide-password  active' : 'hide-password'}
                            onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}
                        />
                        {
                            formik.errors.confirmPassword && formik.touched.confirmPassword && (<span className="form-message">{formik.errors.confirmPassword}</span>)
                        }
                    </div>
                    <button className="btn">Register</button>
                    <span>or use your account</span>
                    <div className="social-container">
                        <a href="https://www.facebook.com/" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.facebook.com/" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="https://www.facebook.com/" className="social"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <div className="link-container">
                        <span>Already have an account?</span>
                        <a href="https://www.facebook.com/" className="register-link">
                            Login
                        </a>
                    </div>
                </form>
            </div>
        </HelmetProvider>
    )
}

export default Register