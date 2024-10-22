import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventsSection from "./components/EventsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Card1 from "./pages/card-1";   //adding the card's page

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<><Header /> <Hero /> <EventsSection /> <AboutSection /> <Footer /></>} /> {/* this route loads the base page elements*/}
          <Route path = "/card-1" element = {<Card1 />} /> {/* this route loads the card page's elements */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
