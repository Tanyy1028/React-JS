  import React from 'react'
import './Navbar.css'

  export default function Navbar() {
    return (
        <div className="container-fluid">
  <header className="main d-flex align-items-center justify-content-between py-3 mb-4 border-bottom">


    
    <a href="/" className="Logo d-flex align-items-center mb-0 text-dark text-decoration-none">
      <svg className="bi me-2" width={40} height={32}>
        <use xlinkHref="#bootstrap" />
      </svg>
      <span className="fs-4">PATO Restaurant</span>
    </a>

    <ul className="nav mb-0">
      <li><a href="#" className="nav-link px-2 link-dark">Home</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">Menu</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
    </ul>

    <div className="text-end">
      <button type="button" className="btn btn-outline-dark me-3">Login</button>
      <button type="button" className="btn btn-outline-dark me-3">Sign-up</button>
    </div>
    
  </header>
</div>

    )
  }
