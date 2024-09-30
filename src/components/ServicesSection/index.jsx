import React from 'react';
import { BiCheckCircle } from 'react-icons/bi'; // Importing the Bootstrap-like icons from react-icons
import './ServicesSection.css'; // Add custom styles in a separate CSS file

const ServicesSection = () => {
  return (
    <div className="container-fluid custom-services-section">
      <div className="row custom-services-row d-flex align-items-center justify-content-center text-white">
        <div className="col-md-6 text-center custom-left-section">
          <h2 className="custom-heading">What do you have in mind? Something different?</h2>
          <p className="custom-subheading">Let us turn your ideas into reality.</p>
          <button className="btn custom-get-in-touch">Get in Touch</button>
        </div>
        <div className="col-md-6 custom-right-section">
          <h3 className="custom-services-title">Services</h3>
          <div className="row">
            {/* Left column of services */}
            <div className="col-md-6">
              <ul className="list-unstyled custom-services-list">
                <li><BiCheckCircle className="custom-icon" /> Website Design and Development</li>
                <li><BiCheckCircle className="custom-icon" /> Content Marketing</li>
                <li><BiCheckCircle className="custom-icon" /> Affiliate Marketing</li>
                <li><BiCheckCircle className="custom-icon" /> Email Marketing</li>
                <li><BiCheckCircle className="custom-icon" /> Inbound Marketing</li>
              </ul>
            </div>
            {/* Right column of services */}
            <div className="col-md-6">
              <ul className="list-unstyled custom-services-list">
                <li><BiCheckCircle className="custom-icon" /> SMM</li>
                <li><BiCheckCircle className="custom-icon" /> SEO/SEM</li>
                <li><BiCheckCircle className="custom-icon" /> PR & Branding</li>
                <li><BiCheckCircle className="custom-icon" /> Pay Per Click</li>
                <li><BiCheckCircle className="custom-icon" /> Outbound Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
