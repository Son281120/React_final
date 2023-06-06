import React from 'react'
import Layout from '../../layout'
import Slider from '../../components/Slider'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
const Home = () => {
    return (
        <Layout>
            <Slider/>
            <ProductList/>
            <Banner/>
        </Layout>
    )
}

export default Home