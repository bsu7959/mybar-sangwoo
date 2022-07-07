import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './page/Home';
import Ingredients from './page/Ingredients';
import CocktailDesc from './page/CocktailDesc';
import IngDesc from './page/IngDesc';
import Setting from './page/Setting';
import InsertC from './page/InsertC';

function App() {
  

  return <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ingredients' element={<Ingredients/>} />
        <Route path='/cocktaildesc' element={<CocktailDesc/>}/>
        <Route path='/ingdesc' element={<IngDesc/>}/>
        <Route path='/settings' element={<Setting/>}/>
        <Route path='/insertc' element={<InsertC/>}/>
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
