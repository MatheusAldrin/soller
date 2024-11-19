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
    <div className="px-6 overflow-hidden sm:px-20">
      <Header />
      <Hero />
      <PickTheSun />
      <Services />
      <Features />
      <div className="sm:-mx-20 -mx-6">
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
