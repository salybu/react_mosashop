import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import TopNavigation from './Navigation/TopNavigation';
import MenuNavigation from './Navigation/MenuNavigation';

function App() {
  return (
    <BrowserRouter>
      <TopNavigation></TopNavigation>
      <MenuNavigation></MenuNavigation>
    </BrowserRouter>
  );
}

export default App;
