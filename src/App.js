import React from "react";
// import "bootstrap"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Projects from "./components/Projects"
import NavBar from "./components/NavBar";
import Toggle from "./components/Toggle";

function App() {

  return (
    <>
      <Router>
        <div>
          <header>
            {/* <Toggle /> */}
            <NavBar />
          </header>
          <Routes>
            {/* <Home />
          <About /> */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <footer>
            {/* <Footer /> */}
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
