import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import React from "react";
import Home from './pages/Home'

import Contact from './components/Contact'
import UserData from './UserData';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showDataOnlyTheUserItsPrivateNoOneCanSeeitSamPactOnlyData" element={<UserData />} />

          <Route path="/contact" element={
            <div className="pt-20">
              <Contact />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App 