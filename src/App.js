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
import Sponsorspage from "./pages/sponsors";
import FAB from "./components/FAB";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
import AboutPage from "./pages/AboutPage";

// Scroll to top functionality
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
          <Route path="/sponsors" element={<Sponsorspage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <FAB />
      </div>
    </Router>
  );
}

export default App;
