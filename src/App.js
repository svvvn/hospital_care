import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";

import About from "./Componantes/About/About"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (  
      <BrowserRouter>
        <Routes>
          <Route path="about" element={<About />} />
      </Routes>

     
    </BrowserRouter>
    );
}

export default App;
