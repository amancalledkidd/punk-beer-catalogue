import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home/Home'
import { Beer } from './types/types'
import './App.scss'
import BeerInfo from './container/BeerInfo/BeerInfo'

// App stores the Routes and the state for the punk beer data, so it can be past to all components
function App() {
  const [punkBeers, setPunkBeers] = useState<Beer[]>([])


  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home beers={punkBeers} setPunkBeers={setPunkBeers}/>}/>
        <Route path="/beers/:beerId" element={<BeerInfo beers={punkBeers}/>}/>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
