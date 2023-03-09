import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';
import Menu from './pages/menu/Menu';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='menu' element={<Menu />} />
        <Route path='order' element={<Order />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
