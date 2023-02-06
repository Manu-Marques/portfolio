import React from "react";
import "./styles.css";
import { Routes, Route } from 'react-router-dom';
import Home from '../home';
import Projects from "../projects";
import Skills from "../skills";
import Contact from "../contact";
import Background from "../background";


export default function App() {
  return (
    <div className="App">
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}