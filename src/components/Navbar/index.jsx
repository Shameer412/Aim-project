import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed">
      <div className="container-fluid px-5 py-2">
        <img src="https://marketpro.ai/wp-content/uploads/2022/11/logo.svg" alt="Logo" style={{width:"70px"}} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0  ">
            <li className="nav-item">
              <Link to="/" className="nav-link active" >Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/web" className="dropdown-item" >Website Development</Link></li>
                <li><Link to="/affiliate" className="dropdown-item">Affiliate Marketing</Link></li>
                <li><Link to="/branding" className="dropdown-item">Branding</Link></li>
                <li><Link to="/email" className="dropdown-item" >Email Marketing</Link></li>
                
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/blog" className="dropdown-item" >Blog</Link></li>
                <li><a className="dropdown-item" href="#">Press Release</a></li>
                <li><a className="dropdown-item" href="#">Case Studies</a></li>
                <li><a className="dropdown-item" href="#">Events</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link  to= "/about" className="nav-link" >About Us</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Careers</a>
            </li>
          </ul>
          <div>
           <Link to="/contact"><button className="free-btn">Free Consultation</button></Link> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
