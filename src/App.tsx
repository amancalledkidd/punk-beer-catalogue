import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './components/Home/Home'
import beers from './data/beers'
import { Beer } from './types/types'
import './App.scss'

function App() {
  const [punkBeers, setPunkBeers] = useState<Beer[]>([])

  useEffect(() => {
    getBeers()
  }, [])

  const getBeers = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers')
    const data: Beer[] = await response.json();
    setPunkBeers(data)
    console.log(data)
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home beers={punkBeers}/>}/>
        <Route path="/beers/:beerId"/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
