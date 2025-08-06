import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login.tsx';
import Signup from './pages/signup.tsx';
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    );
}

export default App;