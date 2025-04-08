import Header from "./Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import JoinUs from "./JoinUs";
import Footer from "./Footer";
import Project from "./Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-4 md:p-8">
    
     <Router>
     <Header/>
     <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/about" element={<Features/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/join" element={<JoinUs/>}/>
      </Routes>
      <Footer/>
     </Router>
      
    </div>
  );
}