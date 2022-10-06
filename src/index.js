import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/navbar/Navbar';
import Blog from './pages/Blog';
import Products from './pages/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/products' element={<Products />} />

        <Route path='*' element={<NotFound notfound={"notfound"} />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
