import React from "react";
import './ContactUs.css'; // Add your custom styles here
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const ContactUs = () => {

    return (
        <>
            <Navbar/>
            <div className="contact-us-page">
            <div className="contact-us-banner">
                <h1>Contact us – Market Pro</h1>
                <p>
                    Fill out this form and our sales team will get in touch with you to
                    know more about your marketing requirements.
                </p>
            </div>

            <div className="contact-form-container">
                <form className="contact-form row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name<span>*</span></label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Your Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Company Email<span>*</span></label>
                        <input type="email" className="form-control" id="email" placeholder="Your Company Email" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="companyName" className="form-label">Company Name<span>*</span></label>
                        <input type="text" className="form-control" id="companyName" placeholder="Enter Your Company Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone No<span>*</span></label>
                        <input type="tel" className="form-control" id="phone" placeholder="+123456789" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="projectOverview" className="form-label">Project Overview<span>*</span></label>
                        <textarea className="form-control" id="projectOverview" rows="3" placeholder="Describe Your Project"></textarea>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary contact-submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>

            <Footer/>
        </>
      
    );
};

export default ContactUs;
