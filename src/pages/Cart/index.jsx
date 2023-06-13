import React from 'react'
import { Helmet } from 'react-helmet'

const Cart = () => {
    return (
        <div className='cart'>
            <Helmet>
                <title>Giỏ Hàng</title>
            </Helmet>
            <h1>Giỏ Hàng</h1>
            <table className='tableRender'>
                <thead>
                    <tr>
                        <th className='tableRender__Name'>Name</th>
                        <th className='tableRender__Desc'>Description</th>
                        <th className='tableRender__Status'>Status</th>
                        <th className='tableRender__Action'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Cart