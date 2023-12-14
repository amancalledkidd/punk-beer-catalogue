import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import beers from './data/beers'
import './App.scss'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home beers={beers}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
