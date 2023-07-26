import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './component/Cart'
import ProductsList from './component/Products'

function App() {
  
  return (
   <div>
     <ProductsList />
    <Cart />
   </div>
  )
}

export default App
