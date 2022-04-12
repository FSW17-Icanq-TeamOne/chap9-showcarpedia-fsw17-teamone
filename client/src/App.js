import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar2 from './components/Navbar2';
import RegisProfile from './pages/RegisterProfile';
import RegisAccount from './pages/RegisterAccount';
import LoginPage from './pages/login';

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path='/registerAccount' element={<RegisAccount />} />
        <Route path='/registerProfile' element={<RegisProfile />} />
      </Routes>
    </div>
  );
}

export default App;
