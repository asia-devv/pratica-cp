import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>AsiaToys</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"} className="">Home</Link>
          </li>
          <li>
            <Link to={"/contato"} className="">Contato</Link>
          </li>
          <li>
            <Link to={"/sobre"} className="">Sobre</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header
