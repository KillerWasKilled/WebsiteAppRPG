import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css'

import Login from "./components/form-stuff/Login";
import Register from "./components/form-stuff/Register";

import GameMap from "./components/map-stuff/Map";
import Menu from "./components/Menu";
import LevelMaker from "./components/LevelMaker";
import Options from "./components/Options";
import Characters from "./components/Characters";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/game" element={<GameMap />} />
        <Route path="/game/menu" element={<Menu />} />
        <Route path="/game/characters" element={<Characters />} />
        <Route path="/game/level_maker" element={<LevelMaker />} />
        <Route path="/game/options" element={<Options />} />
      </Routes>
    </BrowserRouter>
  )
}