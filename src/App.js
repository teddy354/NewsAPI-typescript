import './App.css';
// import Card from './components/Card.tsx';
import Navbar from './component/Navbar.tsx';
import Detail from './component/Detail.tsx';
import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';

function App() {

  const [utils, setUtils]=useState("");
  

  return (
    <>
    <Navbar utils={utils} setUtils={setUtils}/>
    <Routes>
      <Route path="/" element={<Detail utils={utils} setUtils={setUtils}/>}/>
    </Routes>
    </>
  );
}

export default App;
