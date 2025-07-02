
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';

function App() {
  return (
    <>
    <Navbar/>
    <Routes> 
      <Route path="/" element={<Login />} />
    </Routes>
    </>

   
  );
}

export default App;
