// import { ThemeProvider } from "@mui/material";
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { LoginPage } from './pages/login';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

