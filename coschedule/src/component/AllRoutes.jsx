import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import CreateCalendar from "../pages/CreateCalendar";
import Footer from "./Footer";
import Pricing from "../pages/Pricing";
import Home from "../component/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import GetADemo from "../pages/GetADemo";
import Actionable from "../pages/Actionable_Marketing/Actionable";
import Customer from "../pages/Customer_Stories/Customer";
// import Signup from "../pages/Signup";
const AllRoutes = () => {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path ="/" element ={ <Home />}/>
        <Route path="/CreateCalendar" element={<CreateCalendar />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Actionable" element={<Actionable />} />
        <Route path="/GetADemo" element={<GetADemo />} />
        <Route path="/Customer" element={<Customer/>}/>
        
      </Routes>
      <h2 style={{ marginTop: "50px" }}>
        <Footer />
      </h2>
    </div>
  );
};

export default AllRoutes;
