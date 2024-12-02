import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div id="HOME">
        <Hero />
      </div>
      <div id="LEISTUNGEN">
        <Services />
      </div>
      <div id="TEAM">
        <Team />
      </div>
      <div id="KONTAKT">
        <Footer />
      </div>
    </div>
  );
}

export default App;
