import { Routes } from 'react-router-dom';
import './App.css';
import Navbar2 from './components/Navbar2';
import RegisProfile from './pages/RegisterProfile';
import RegisUser from './pages/RegisterUser';

function App() {
  return (
    <div className="App">
      <Routes>      
      </Routes>

      <Navbar2 />
      <RegisUser />
      <RegisProfile />
    </div>
  );
}

export default App;
