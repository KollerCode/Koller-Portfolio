import React from "react";
// import "bootstrap"
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects"

function App() {

  return (
    <>
      <Router>
        <div>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route to="/" element={<Home />} />
            <Route to="/projects" element={<Projects />} />
            <Route to="/about-me" element={<About />} />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
