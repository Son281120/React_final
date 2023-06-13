import React from 'react'
import './PopUser.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateStatusLogin, updateUser } from '../../../../../redux/store/userSlice'
const PopUser = () => {
    const dispatch =useDispatch();
    const handleLogout = () => {
        localStorage.setItem('isLogin', JSON.stringify(false));
        localStorage.removeItem('saveAccount');
        const resetUser = {
            id: '',
            name: '',
            avatar: '',
            email: '',
            password: '',
            address: '',
            old: ''
        };
        dispatch(updateUser(resetUser));
        dispatch(updateStatusLogin(false));
    };

    return (
        <div className='pop-user'>
            <div className="pop-user__tilte">Tài khoản</div>
            <ul className="pop-user__list">
                <li className="pop-user_item"><Link to="/">Thông tin tài khoản</Link></li>
                <li className="pop-user_item"><Link to="/">Sản phẩm yêu thích</Link></li>
                <li className="pop-user_item" onClick={handleLogout}><Link to="/">Đăng xuất</Link></li>
            </ul>
        </div>
    )
}

export default PopUser