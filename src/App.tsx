import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

function App() {
  return (
    <div style={{ backgroundImage: `url(/bg.png)` }}>
      <BrowserRouter>
        <header className="container text-center text-6xl rounded-lg bg-slate-50 w-1/4">
          <Link to="/">Pokedex</Link>
        </header>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/details/:pokemonName" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
