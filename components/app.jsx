import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import HeroSection from "./hero section";
import Features from "./feature section";
import ProductRow from "./products";
import Testimonials from "./rating";
import AboutUs from "./about";
import Contact from "./contact";
import Footer from "./footer";
import SignIn from "./sign";     
import Register from "./register";
import PaymentPage from "./payment";
import Lamber from "./pop";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><HomePage/></div>} /> 
        <Route path="/sign" element={<SignIn />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

{/* <HomePage /> */}
const HomePage = () =>{
  return <div> 
    <Lamber />
    <Header />
    <HeroSection />
    <Features /> 
    <ProductRow /> 
    <Testimonials />
    <AboutUs />
    <Contact />
    <Footer />  
  </div>
}

export default App;
