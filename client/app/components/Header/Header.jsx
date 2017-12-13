import React from 'react'
import { Link } from 'react-router-dom'

import './header.sass'
// import 'font-awesome/scss/font-awesome.scss'

const Header = () => (
  <header>
    <nav className = "navbar">
      <ul>
        <li><Link to = "/"><i className = "fa fa-bars"></i></Link></li>
        <li className = "search">
          <i className = "fa fa-search"></i>
          <input type="text" placeholder="search"/>
        </li>
        <li>Eric<i className = "fa fa-chevron-down"></i></li>
        <li><i className = "fa fa-send"></i></li>
        <li><i className = "fa fa-calendar"></i></li>
        <li><i className = "fa fa-cog"></i></li>
        {/*
          <li><Link to="/stuff">Stuff</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        */}
      </ul>
    </nav>
  </header>

)

export default Header
