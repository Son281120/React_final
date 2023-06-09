import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchingCategory, fetchingProducts } from './redux/middleware'
import Footer from './components/Footer';
import Header from './components/Header';
import './App.scss'
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingCategory())
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchingProducts())
}, [dispatch]);


  return (
    <div>
      <Header />
      <div className='header__margin'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
