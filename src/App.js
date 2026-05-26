// App.js

import React from "react";
import Navbar from "./Comp/Navbar";
import Home from "./Comp/Home";
import About from "./Comp/About";
import Services from "./Comp/Services";
import Portfolio from "./Comp/Portfolio";
import Contact from "./Comp/Contact";
import Footer from "./Comp/Footer";
import "./App.css";

export default function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </>
  );
}