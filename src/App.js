import { Route, Routes } from 'react-router-dom';
import publicRouter from './router'
import './App.scss'


function App() {

  return (
    <div>
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

    </div>
  );
}

export default App;
