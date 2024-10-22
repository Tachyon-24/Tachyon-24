import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventsSection from "./components/EventsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* checking PR's */}
      <div className="section">
        <EventsSection />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
