import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PickTheSun from './components/pickTheSun';
import Services from './components/Services';
import Features from './components/Features';
import Quotes from './components/Quotes';
import Power from './components/Power';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-hidden px-20">
      <Header />
      <Hero />
      <PickTheSun />
      <Services />
      <Features />
      <div className="-mx-20">
        <Quotes />
      </div>
      <div className="-mx-20">
        <Power />
      </div>
      <Footer />
    </div>
  );
}

export default App;
