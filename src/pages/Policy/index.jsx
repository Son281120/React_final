import React from 'react'
import { Outlet} from 'react-router-dom'
import './Policy.scss'

const Policy = () => {
    return (
        <div className='policy'>
            <h1 className='title-policy'>Chính sách</h1>
            <Outlet />
        </div>
    )
}

export default Policy