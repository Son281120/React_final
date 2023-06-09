import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.scss'

function App() {

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
