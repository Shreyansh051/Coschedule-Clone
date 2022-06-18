import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
// import Calender from "../pages/Calender";
import Footer from "./Footer";
import Pricing from "../pages/Pricing";
import Home from "../component/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
// import Actionable from "../pages/Actionable_Marketing/Actionable";
// import Signup from "../pages/Signup";
const AllRoutes = () => {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path ="/" element ={ <Home />}/>
        {/* <Route path="/Calender" element={<Calender />} /> */}
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        {/* <Route path="/Actionable" element={<Actionable />} /> */}
      </Routes>
      <h2 style={{ marginTop: "50px" }}>
        <Footer />
      </h2>
    </div>
  );
};

export default AllRoutes;
