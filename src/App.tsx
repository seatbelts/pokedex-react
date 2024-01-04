import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList/PokemonList';

function App() {
  return (
    <div style={{ backgroundImage: `url(/bg.png)` }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
