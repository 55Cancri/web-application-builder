import React from 'react'
import { Link } from 'react-router-dom'

import './header.sass'
// import 'font-awesome/scss/font-awesome.scss'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/"><i className="fa fa-close fa-spin"></i>Home</Link></li>
        <li><Link to="/stuff">Stuff</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>

)

export default Header
