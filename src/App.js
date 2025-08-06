import React from 'react';
import './App.css';
import Navbars from './components/Nav/Navbar';
import Home from './components/Home/Home';
import FAQ from './components/Pages/FAQ’S/FAQ’S';
import LatestNews from './components/LatestNews';

function App() {
  return (
    <>
    <Navbars/>
    <Home/>
    <FAQ/>
    <LatestNews/>
    </>
  );
}

export default App;
