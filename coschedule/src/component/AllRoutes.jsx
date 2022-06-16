import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Calender from '../pages/Calender';
import Footer from './Footer';
import Pricing from '../pages/Pricing';
import Home from "../component/Home";

// import Signup from "../pages/Signup";
const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Routes>
     
        <Route path='/Calender' element={<Calender />} />
        <Route path='/Pricing' element={<Pricing />} />
      </Routes>
      <h2 style={{ marginTop: '50px' }}>
        <Footer />
      </h2>
    </div>
  );
};

export default AllRoutes;
