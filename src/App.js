import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Link as ScrollLink, Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Progress from './components/Progress';
import WorkDescription from './components/WorkDescription';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Clients from './pages/Clients';
import Client from './components/Client';
import Contacts from './pages/Contacts';

function App() {
  const color = "green"

  return (
    <Router>
      <div className="App">
        <Navbar bgcolor={color} />
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
        <Element name="clients">
          <Clients color={color} />
        </Element>
        <Element name="contact">
          <Contacts color={color} />
        </Element>

        <Routes>
          {/* <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About color="red"/>} />
          <Route path="/work" element={<Work />} /> */}
          <Route path="/as" element={<Client />} />
        </Routes>


      </div>
    </Router>

  );
}

export default App;
