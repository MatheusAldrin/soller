import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PickTheSun from './components/pickTheSun';
import Services from './components/Services';
import Features from './components/Features';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="mx-20">
      <Header />
      <Hero />
      <PickTheSun />
      <Services />
      <Features />
      <Quotes />
    </div>
  );
}

export default App;
