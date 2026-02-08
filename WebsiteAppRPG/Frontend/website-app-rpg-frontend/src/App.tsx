// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Game from './components/Game'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css'

import Login from "./components/form-stuff/Login";
import Register from "./components/form-stuff/Register";
import GameMap from "./components/map-stuff/Map";

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<GameMap />} />
      </Routes>
    </BrowserRouter>
  )
}


// <Route path="/register" element={<Register />} />