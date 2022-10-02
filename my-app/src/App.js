
import { useState, useEffect } from "react";
import React from "react";
import Fetch from "./Hooks/useFetch";


import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";

function App() {
  return (
    <>
   <Routes>
   <Route path="/" element={<Fetch />} />
   <Route path="/card/:name" element={<Card />} />
   </Routes>
    </>
  
  );
}

export default App

/* <Fetch /> */


