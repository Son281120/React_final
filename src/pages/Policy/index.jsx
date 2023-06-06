import React from 'react'
import Layout from '../../layout'
import ShoppingGuide from './ShoppingGuide'
import './Policy.scss'
import TermsOfServices from './TermsOfServices'
import ReturnsPolicyChange from './ReturnsPolicyChange'
import RulesOfUse from './RulesOfUse'
import { Route, Routes } from 'react-router-dom'
const Policy = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/shoppinguide' element={<ShoppingGuide />} />
                <Route path='/termsofservices' element={<TermsOfServices />} />
                <Route path='/returnspolicychange' element={<ReturnsPolicyChange />} />
                <Route path='/rulesofuse' element={<RulesOfUse />} />
            </Routes>
        </Layout>
    )
}

export default Policy