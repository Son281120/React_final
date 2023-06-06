import { Route, Routes, useLocation } from 'react-router-dom';
import publicRouter from './router'
import './App.scss'
import { useEffect } from 'react';


function App() {
  const location = useLocation();
  useEffect(() => {
    if(location.pathname === "/"){
      document.title = 'Trang chủ';
    } else if(location.pathname === '/products') {
      document.title = 'Toàn bộ sản phẩm';
    } else if(location.pathname === '/category') {
      document.title = 'Thương hiệu'
    } else if(location.pathname === '/detail') {
      document.title = 'Chi tiết sản phẩm'
    } else if(location.pathname === '/cart') {
      document.title = 'Giỏ hàng'
    } else {
      document.title = '404'
    }

  }, [location])

  return (
      <Routes>
        {publicRouter.map((route, index) => {
          const Page = route.component
          return <Route
            key={index}
            path={route.path}
            element={<Page />}
          />
        })}
      </Routes>
  );
}

export default App;
