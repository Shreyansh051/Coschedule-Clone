import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Calender from '../pages/Calender';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Pricing from '../pages/Pricing';
import Home from "../component/Home"
import GetADemo from '../pages/GetADemo';
import CreateCalendar from '../pages/CreateCalendar';
import Signin from '../pages/Signin';
const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      {/* <Home/> */}
      <Routes>
        <Route path='/Calender' element={<Calender />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/signin' element={<Signin />} />
        <Route path="/getADemo" element={<GetADemo />} />
        <Route path="/createCalendar" element={<CreateCalendar />} />
      </Routes>
      <Box></Box>
      <h2 style={{ marginTop: '50px' }}>
        <Footer />
      </h2>
    </div>
  );
};

export default AllRoutes;
