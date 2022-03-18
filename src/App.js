import './App.css';
import NavBar from './components/NavBar/NavBar';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/starships", name: " Star Wars Starships"}
  ])
  return (
    <>
    <NavBar navItems={navItems} />
    <Routes>
      <Route path='/starships' element={<StarshipList />} />
      <Route path='/starship' element={<StarshipDetails />} />
    </Routes>
    </>
  );
}

export default App;
