import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home/Home'
import { Beer } from './types/types'
import './App.scss'
import BeerInfo from './container/BeerInfo/BeerInfo'

function App() {
  const [punkBeers, setPunkBeers] = useState<Beer[]>([])


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home beers={punkBeers} setPunkBeers={setPunkBeers}/>}/>
        <Route path="/beers/:beerId" element={<BeerInfo beers={punkBeers}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
