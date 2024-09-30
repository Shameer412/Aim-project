import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';  // Import Bootstrap check-circle icon
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section d-flex align-items-center" style={{ height: '100vh' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 ">
            <h1 className="hero-title">You are One Click Closer to Transform Your Digital Future</h1>
            <p className="hero-subtitle">
              We are a full-stack digital marketing agency envisioned to connect brands with potential customers,
              grow sales, and enhance their online presence by up to 10X.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 ">
            <ul className="list-unstyled">
              <li><BsCheckCircleFill className="icon" /> Website Design and Development</li>
              <li><BsCheckCircleFill className="icon" /> Search Engine Optimization – SEO</li>
              <li><BsCheckCircleFill className="icon" /> PR & Branding</li>
              <li><BsCheckCircleFill className="icon" /> Email Marketing</li>
              <li><BsCheckCircleFill className="icon" /> Inbound Marketing</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="list-unstyled">
              <li><BsCheckCircleFill className="icon" /> Social Media Marketing</li>
              <li><BsCheckCircleFill className="icon" /> Pay Per Click</li>
              <li><BsCheckCircleFill className="icon" /> Content Marketing</li>
              <li><BsCheckCircleFill className="icon" /> Affiliate Marketing</li>
              <li><BsCheckCircleFill className="icon" /> Outbound Marketing</li>
            </ul>
          </div>
        </div>
        <div>
            <button className="contact-btn">Contact Us</button>
          </div>  
      </div>
      
    </div>
  );
}

export default HeroSection;
