import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';
import Menu from './pages/menu/Menu';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='menu' element={<Menu />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
