import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import './App.css';
import Navbar2 from './components/Navbar2';
import routes from './routes';

function App() {
  return (
    <Suspense fallback={<CircularProgress color='primary' />}>
      <div className="App">
        <Navbar2 />
        <Routes>
          {
            routes.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))
          }
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
