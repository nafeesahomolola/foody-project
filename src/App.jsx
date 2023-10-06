import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero';
import Section from './components/Section';
import Menu from './components/Menu';
import Feedback from './components/Feedback';
import Updates from './components/Updates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-[#FFFCF7]">
      <Header />
      <Hero/>
      <Section/>
      <Menu/>
      <Feedback/>
      <Updates/>
      <Footer/>
    </div>
  );
}

export default App