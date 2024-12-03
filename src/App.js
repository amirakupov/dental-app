import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      {/* Preloader */}
      {loading && <Preloader />}

      {/* Content */}
      {!loading && (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
