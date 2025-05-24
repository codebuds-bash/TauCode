import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TauCompiler from './pages/TauCompiler';
import User from './pages/UserManual';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compiler" element={<TauCompiler />} />
        <Route path="/documentation" element={<User />} />
       
      </Routes>
    </Router>
  );
}

export default App;