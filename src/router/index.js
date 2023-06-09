import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Products from '../pages/Products'
import Category from '../pages/Category'
import Detail from '../pages/Detail'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'
import Policy from '../pages/Policy'
import ShoppingGuide from '../pages/Policy/ShoppingGuide'
import TermsOfServices from '../pages/Policy/TermsOfServices'
import ReturnsPolicyChange from '../pages/Policy/ReturnsPolicyChange'
import RulesOfUse from '../pages/Policy/RulesOfUse'
import App from "../App";


const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/category",
                element: <Category />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "",
                element: <Policy />,
                children: [
                    {
                        path: '/policy/shoppingguide',
                        element: <ShoppingGuide />
                    },
                    {
                        path: '/policy/termsofservices',
                        element: <TermsOfServices />
                    },
                    {
                        path: '/policy/returnspolicychange',
                        element: <ReturnsPolicyChange />
                    },
                    {
                        path: '/policy/rulesofuse',
                        element: <RulesOfUse />
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }

]);

export default router