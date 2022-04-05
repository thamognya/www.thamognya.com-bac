import React from 'react';
import './App.sass';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<h1>Hello contact</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
