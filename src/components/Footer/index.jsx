import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark mt-5 text-light pt-5 pb-3">
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Logo and Description */}
          <div className="col-lg-3 col-md-4 mb-4">
            <img  src="https://marketpro.ai/wp-content/uploads/2023/12/logo.webp" style={{width:"70px"}} alt="MarketPro Logo" className="mb-3" />
            <img src="https://marketpro.ai/wp-content/uploads/2024/02/google-partner-seeklogo.svg" style={{width:"96px", marginLeft:"40px"}} alt="Google Partner" />
            <p>Marketpro is all about delivering promised results. With our smart approaches and human brilliance, we deliver digital growth that matters in the digital world.</p>
          </div>

          {/* Our Services */}
          <div className="col-lg-2 col-md-2 mb-4">
            <h5>Our Services</h5>
            <ul className="list-unstyled services-li">
              <li className='fs-6'>Content Marketing</li>
              <li className='fs-6' >Email Marketing</li>
              <li className='fs-6'>Pay Per Click</li>
              <li  className='fs-6'>Affiliate Marketing</li>
              <li className='fs-6'>Social Media Marketing</li>
              <li className='fs-6'>Website Design And Development</li>
              <li className='fs-6'>Search Engine Optimization</li>
              <li className='fs-6'>PR And Branding</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-2 mb-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li className='fs-6'>Blog</li>
              <li className='fs-6'>Press Release</li>
              <li className='fs-6'>Whitepapers</li>
              <li className='fs-6'>Events</li>
              <li className='fs-6'>Case Studies</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-2 mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li className='fs-6'>Home</li>
              <li className='fs-6'>Careers</li>
              <li className='fs-6'>About Us</li>
              <li className='fs-6'>Contact Us</li>
              <li className='fs-6'>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-lg-3 col-md-4 mb-4 contact-us-footer">
            <h5>Contact Us</h5>
            <p className="text-light">Email: <a href="mailto:sales@marketpro.ai" className="text-light">sales@marketpro.ai</a></p>
            <p className="text-light">Address: 893 R1, Johar Town, Lahore, 54000</p>
            <p className="text-light">Phone: <a href="tel:+923220803918" className="text-light">+92 322 0803918</a></p>
            <p className="text-light">Address: 16192 Coastal Highway, Lewes, Delaware 19958, USA</p>
            <p className="text-light">Phone: <a href="tel:+12093795622" className="text-light">+1 209 3795622</a></p>
            <div className="social-icons">
              <a href="#" className="text-light me-3"><FaFacebookF /></a>
              <a href="#" className="text-light me-3"><FaInstagram /></a>
              <a href="#" className="text-light me-3"><FaLinkedinIn /></a>
              <a href="#" className="text-light me-3"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
