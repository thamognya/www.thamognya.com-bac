import React from 'react';
import './App.sass';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import Error from './components/Error';
import StartPage from './components/StartPage';
import ThemeToggle from './components/ThemeToggle';

function App() {
    // makes the theme persist by getting the item theme from local storage
    // converting to string and assigning it to document.body.className
    const themeRaw: string = localStorage.getItem('theme')!;
    const iconRaw: string = localStorage.getItem('iconName')!;
    // incase I might use it in the future.
    document.body.className = themeRaw;
    // change the css to use .dark
    // change theme icon if dark to faregsun and vice versa
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Route>
            <Route path="/startpage" element={<StartPage />} />
      </Routes>
    </div>
  );
}

export default App;
