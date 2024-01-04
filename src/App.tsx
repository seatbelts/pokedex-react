import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

function App() {
  return (
    <div style={{ backgroundImage: `url(/bg.png)` }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/details/:pokemonName" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
