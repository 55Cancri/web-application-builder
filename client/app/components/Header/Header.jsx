import React from 'react'
import { Link } from 'react-router-dom'

import './header.sass'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stuff">Stuff</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
