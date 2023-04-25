import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Products from './pages/products/Products'
import Cart from './pages/cart/Cart'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='' element={<Products />} />
      <Route path='cart' element={<Cart />} />
      <Route path='*' element={<div>Error Page</div>} />
    </Routes>
    </>
  )
}

export default App
