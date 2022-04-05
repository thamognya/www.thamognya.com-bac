import React from 'react';
import './App.sass';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<h1>Hello</h1>} />
            <Route path="/contact" element={<h1>Hello contact</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
