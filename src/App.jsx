import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./Services/Services";
import MyWork from "./MyWork/MyWork";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
