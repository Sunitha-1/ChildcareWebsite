import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Reports from "./components/Reports/Reports";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./components/Students/Students";
import Daily from "./components/Daily/Daily";
import Accidents from "./components/Accidents/Accidents";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/daily" element={<Daily />}></Route>
          <Route path="/accidents" element={<Accidents />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
