import React, { useState } from 'react'

const ImageDetail = ({ status, img }) => {

    const [mainImg, setMainImg] = useState('');

    const handleChangeMainImg = (item) => {
        setMainImg(item);
    }
    return (
        <div className="group__img row">
            {
                status === 'successed' ?
                    <div className="group__main col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <img src={mainImg !== ''? mainImg : img[0]} alt="mainImg" className="main__img" />
                        {/* <img src="./assets/img/product/product_3-1.webp" alt="mainImg" className="main__img imgZoom" /> */}
                    </div>
                    : <div className='group__main_loading col-xl-12 col-lg-12 col-md-12 col-sm-12'></div>
            }
            {
                status === 'successed' ?
                    img.map(item => {
                        return <div key={item} className="group__carousel col-xl-3 col-lg-3 col-md-3 col-sm-offset-0">
                            <img
                                src={item}
                                alt=''
                                onClick={() => {handleChangeMainImg(item)}}
                                className="carousel__img"
                            />
                        </div>
                    })
                    : <div>
                        <div className='group__carousel_loading col-xl-3 col-lg-3 col-md-3 col-sm-offset-0'></div>
                        <div className='group__carousel_loading col-xl-3 col-lg-3 col-md-3 col-sm-offset-0'></div>
                        <div className='group__carousel_loading col-xl-3 col-lg-3 col-md-3 col-sm-offset-0'></div>
                        <div className='group__carousel_loading col-xl-3 col-lg-3 col-md-3 col-sm-offset-0'></div>
                    </div>
            }
        </div>
    )
}

export default ImageDetail