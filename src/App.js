import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link as ScrollLink, Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Clients from './pages/Clients';
import Client from './components/Client';
import Contacts from './pages/Contacts';
import MobileNav from './components/MobileNav';
import { useState } from 'react';
import Portfolio from './pages/Portfolio';
import Project from './components/Project';

function App() {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const color = "green"
  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };
  const closeMobileNav = () => {
    setMobileNavVisible(false);
  };

  return (
    <Router>
      <div className="App">

        <Navbar bgcolor={color} toggleMobileNav={toggleMobileNav} />
        <MobileNav color={color} mobileNavVisible={mobileNavVisible} closeMobileNav={closeMobileNav} />
        <Element name="home">
          <Homepage color={color} />
        </Element>
        <Element name="about">
          <About color={color} />
        </Element>
        <Element name="work">
          <Work color={color} />
        </Element>
        <Element name="resume">
          <Resume color={color} />
        </Element>
        <Element name="portfolio">
          <Portfolio color={color} />
        </Element>
        <Element name="clients">
          <Clients color={color} />
        </Element>
        <Element name="contact">
          <Contacts color={color} />
        </Element>

        <Routes>
          <Route path="/as" element={<Project />} />
        </Routes>


      </div>
    </Router>

  );
}

export default App;
