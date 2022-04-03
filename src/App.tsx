import React from 'react';
import './App.sass';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
