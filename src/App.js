import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Component imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventsSection from "./components/EventsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Card1 from "./pages/card-1";   //adding the card's page



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          {/* Home page route */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <EventsSection />
                <AboutSection />
                <Footer />
              </>
            } 
          />
          
          {/* Individual page routes */}
          <Route path="/card-1" element={<Card1 />} />
        </Routes>
        <FAB />
      </div>
    </Router>
  );
}

export default App;