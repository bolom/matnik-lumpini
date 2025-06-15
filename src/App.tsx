
import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <LanguageSelector />
        <div className="container">
          <Header />
          <main>
            <Hero />
            <InfoSection />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
