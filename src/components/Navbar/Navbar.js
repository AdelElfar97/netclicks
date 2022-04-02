import React from "react";
import { Link } from "react-router-dom";
import ContextLanguageSwitcher from "./ContextLanguageSwitcher";

export default function Navbar() {
  return (
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      {/*
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
  */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        
          <span className="navbar-toggler-icon"></span>
          
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
        
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>

              
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/fav">
              fav
            </Link>

            
          </li>
          <ContextLanguageSwitcher></ContextLanguageSwitcher>

          </ul>
          <h1 style={{margin: 'auto' }}>Netclicks</h1>

        </div>
        
      </div>
      
    </nav>
    
  );
}
