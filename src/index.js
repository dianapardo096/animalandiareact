   
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Perros from './pages/perros/Perros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Routes>
          <Route path='' element={<Perros/>} ></Route>
          <Route path='' element={<Perros/>} ></Route>
      </Routes>
    </BrowserRouter>
    
);