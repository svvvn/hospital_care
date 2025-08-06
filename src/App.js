// import React from 'react';
// import './App.css';
// import Navbars from './components/Nav/Navbar';
// import Home from './components/Home/Home';
// import FAQ from './components/Pages/FAQ’S/FAQ’S';
// import LatestNews from './components/LatestNews';

// function App() {
//   return (
//     <>
//     <Navbars/>
//     <Home/>j
//     <FAQ/>
//     <LatestNews/>
//     </>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services/services';
import Sdetails from './components/Sdetails/sdetails';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const HomePlaceholder = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Home Page</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/services/:serviceId" element={<Sdetails />} />
          <Route path="/home" element={<HomePlaceholder />} />
        </Routes>
  
      </div>
    </Router>
  );
}

export default App;
