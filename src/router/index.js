import Home from '../pages/Home'
import Products from '../pages/Products'
import Category from '../pages/Category'
import Detail from '../pages/Detail'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'
import Policy from '../pages/Policy'



const publicRouter = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/category', component: Category },
    { path: '/detail', component: Detail },
    { path: '/cart', component: Cart },
    { path: '/policy', component: Policy },
    { path: '/*', component: NotFound }
];

export default publicRouter