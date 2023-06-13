import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useHoverItem from '../../../../hook'
import PopUser from './PopUser'
import { updateStatusLogin, updateUser } from '../../../../redux/store/userSlice'

const DisplayUser = () => {

    const dispatch = useDispatch()
    const isLogin = useMemo(()=> {
        return JSON.parse(localStorage.getItem('isLogin'));
    },[]);

    useEffect(()=> {
        if(isLogin){
            const saveAccount = JSON.parse(localStorage.getItem('saveAccount'));
            dispatch(updateUser(saveAccount));
            dispatch(updateStatusLogin(true));
        }
    },[isLogin, dispatch]);

    const user = useSelector(state => state.user.user);
    const { isHover, handleMouseEnter, handleMouseLeave } = useHoverItem();

    return (
        <div
            className="display-user hidden-xs hidden-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={user.avatar}
                className="img-responsive" alt=""
            />
            <span>{user.name}</span>
            <FontAwesomeIcon icon={faCaretDown} />
            { isHover && <PopUser/>}
        </div>
    )
}

export default DisplayUser