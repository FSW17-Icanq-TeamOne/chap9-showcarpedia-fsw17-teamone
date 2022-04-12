import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar2 from './components/Navbar2';
import RegisProfile from './pages/RegisterProfile';
import RegisAccount from './pages/RegisterAccount';

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Routes>
        <Route path='/registerAccount' element={<RegisAccount />} />
        <Route path='/registerProfile' element={<RegisProfile />} />
      </Routes>

    </div>
  );
}

export default App;
