import React from 'react'
import './module_css/navbar.css'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

export default function Navbar() {
  return (
    <BrowserRouter>
    <div className="navbar">
        <div className="menu">
       
        <ul>
          <li> <div className="logo">PORTOFOLIO</div></li>
            <li><Link to='/'>ABOUT</Link></li>
            <li><Link to='#skill' smooth>SKILL</Link></li>
            <li><Link to='#education'smooth>EDUCATION</Link></li>
            <li><Link to='#experience'smooth>EXPERIENCE</Link></li>
            <li><Link to='#project'smooth>PROJECT</Link></li>
            <li><Link to='#certificate'smooth>CERTIFICATE</Link></li>
        </ul>
        </div>
    </div>
    </BrowserRouter>
  )
}
