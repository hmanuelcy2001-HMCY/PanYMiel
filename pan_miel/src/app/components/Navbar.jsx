import React from 'react'
import "../css/navbar.css"
//import logo from '../images/Logo.png';


const Navbar = () => {
  return (
   <div className="header-container">
      <div className="logo-container">
        {/* Aquí reemplazar 'Logo' con un SVG o una imagen real */}
        <span className="logo-text"><img src="/images/Logo.svg" alt="" className="logo-img" /></span>
      </div>
      <nav className="nav-menu hidden md:flex">
        <a href="#home" className="nav-link active">
          Esencia
        </a>
        <a href="#about" className="nav-link">
          Casa Nuestra
        </a>
        <a href="#education" className="nav-link">
          Colmena
        </a>
        <a href="#experience" className="nav-link">
          Haz tu pedido
        </a>

        <a href="#contact" className="nav-link">
          Logos
        </a>
      </nav>
      {/* Botón de menú para móviles, si lo necesitas
      <button className="menu-button md:hidden">
        {/* Ícono de menú (SVG) }
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button> */}
    </div>
  )
}

export default Navbar
