import React from 'react';
import './App.sass';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
    // makes the theme persist by getting the item theme from local storage
    // converting to string and assigning it to document.body.className
    const themeRaw: string = localStorage.getItem('theme')!;
    document.body.className = themeRaw;
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
