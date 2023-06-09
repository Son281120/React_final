import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import Support from './Support'
import Introduce from './Introduce'
import ImageDetail from './ImageDetail'
import './Detail.scss'

const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [status, setStatus] = useState('loading');
    const [error, setError] = useState('');
    const [checkedSize, setCheckedSize] = useState({ size: '', quantity: 1 })
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://peguinauth.onrender.com/products/${id}`);
                const data = await response.data;
                setData(data);
                if (data) {
                    setStatus('successed');
                }
            } catch (error) {
                setError(`Đã xảy ra lỗi khi tải dữ liệu. ${error}`);
            }
        };
        fetchData()
    }, [id])

    useEffect(() => {
        setQuantity(1);
    }, [checkedSize])

    const sumQuantity = () => {
        if (status === 'successed') {
            return data.sizes.reduce((accumulator, currentValue) => (accumulator + currentValue.quantity), 0)
        }
    }

    const handleSubtractionBtn = (e) => {
        e.preventDefault();
        setQuantity(prevQuantity => prevQuantity - 1)
    };

    const handleChangeInputQuantity = (e) => {
        if (!checkedSize.size) {
            alert('Vui lòng chọn size giày!')
        } else {
            if (e.target.value < 1) {
                alert('Không được nhập giá trị âm hoặc 0!');
                setQuantity(1);
            } else {
                setQuantity(e.target.value);
            }
        }
    };


    const handleAdditionBtn = (e) => {
        e.preventDefault();
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleAddtoCart = () => { }

    return (
        <HelmetProvider>
            <div className='detail'>
                <Helmet>
                    <title>Chi tiết sản phẩm {error}</title>
                </Helmet>
                <div className="detail__container container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <ImageDetail
                                status={status}
                                img={data.img}
                            />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-7 col-sm-7 product__info">
                            <h3 className="product__name">{data.name}</h3>
                            <div className="product__review product__form_label">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="product__brand product__form_label">
                                <label htmlFor="" className="product__type_label">Hãng:</label>
                                <Link href="#" className="product__type_link">{data.category_id}</Link>
                            </div>
                            <div className="product__quantity product__form_label">
                                <label htmlFor="" className="product__type_label">Số lượng còn lại:</label>
                                <span className="product__type_span italic">
                                    {
                                        sumQuantity() || '()'
                                    }
                                </span>
                            </div>
                            <div className="product__price product__form_label">
                                <span className="product__price--new">{data.newPrice}</span>
                                <span className="product__price--old">{data.oldPrice}</span>
                            </div>
                            <div className="product__size product__form_label">
                                <label htmlFor="" className="product__type_label label-padding">Size:</label>
                                <div className="group__size">
                                    {
                                        status === 'successed' ?
                                            data.sizes.map(item => {
                                                return <div key={item.size} className="group__size_item">
                                                    <input
                                                        type="radio"
                                                        name="group__size_item"
                                                        checked={checkedSize.size === item.size}
                                                        onChange={() => setCheckedSize(item)}
                                                        disabled={item.quantity === 0}
                                                        className="size__radio"
                                                    />
                                                    <label
                                                        className={item.quantity === 0 ? 'lable-disabled' : ''}
                                                    >
                                                        {item.size}
                                                    </label>
                                                </div>
                                            })
                                            : 'Loading Size'
                                    }
                                </div>
                            </div>
                            <div className="add-product-quantity product__form_label">
                                <label htmlFor="" className="product__type_label label-padding-18">Số lượng:</label>
                                <form action="" className="form-quantity">
                                    <button
                                        className="subtraction__btn"
                                        disabled={quantity === 1}
                                        onClick={handleSubtractionBtn}
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <input
                                        type="text"
                                        value={quantity}
                                        onChange={handleChangeInputQuantity}
                                        className="form-input input-quantity"
                                    />
                                    <button
                                        className="addition__btn"
                                        disabled={quantity === checkedSize.quantity}
                                        onClick={handleAdditionBtn}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </form>
                            </div>
                            <div className="addToCart">
                                {
                                    sumQuantity() !== 0 ?
                                        <button
                                            className="addToCart__btn btn"
                                            onClick={() => {
                                                handleAddtoCart()
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faBagShopping} />
                                            MUA NGAY
                                        </button>
                                        : <button
                                            className="addToCart__btn_disable"
                                        >
                                            HẾT HÀNG
                                        </button>
                                }

                            </div>
                        </div>
                        <Introduce />
                    </div>
                    <Support />
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Detail