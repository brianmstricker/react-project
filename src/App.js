import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';
import Main from './pages/main/Main';

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Main />
      <Footer />
    </>
  );
}

export default App;
