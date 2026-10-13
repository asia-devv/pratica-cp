import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Home from './pages/Home'


const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
