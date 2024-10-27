import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Hero from "./components/Hero";
import EventsSection from "./components/EventsSection";
import Footer from "./components/Footer";
import Card1 from "./pages/card-1";   //adding the card's page
import Sponsorspage from "./pages/sponsors";



function App() {
  return (
    <Router>
      <div className="App">
        {/* This will load the base page elements */}
        
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Hero />
                <EventsSection />
                <Footer />
              </>
            } 
          />
          
          {/* This will load the card-1 page */}
          <Route path="/card-1" element={<Card1 />} />
          <Route path="/sponsors" element={<Sponsorspage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App