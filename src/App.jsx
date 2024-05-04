import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./Services/Services";
import MyWork from "./MyWork/MyWork";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Back from "./Back/Back";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Back />
      <Footer />
    </div>
  );
};

export default App;
