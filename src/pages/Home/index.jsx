import React from 'react'
import Layout from '../../layout'
import Slider from '../../components/Slider'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import New from '../../components/New/inded'
const Home = () => {
    return (
        <Layout>
            <Slider/>
            <ProductList/>
            <Banner/>
            <New/>
        </Layout>
    )
}

export default Home