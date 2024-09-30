import React from 'react';
import './StatisticsSection.css'; // For custom styling

const StatisticsSection = () => {
  return (
    <>
    <section className="statistics-section py-5">
      <div className="container">
        <div className="row text-center justify-content-center">
          {/* First Row */}
          <div className="col-6 col-md-2 mb-4 statistic-box">
            <h3 className="display-6 font-weight-bold">10+</h3>
            <p>International Clients</p>
          </div>
          <div className="col-6 col-md-2 mb-4 statistic-box">
            <h3 className="display-6 font-weight-bold">7+</h3>
            <p>Startups introduced to the world</p>
          </div>
          <div className="col-6 col-md-2 mb-4 statistic-box">
            <h3 className="display-6 font-weight-bold">100+</h3>
            <p>Team Members</p>
          </div>
          <div className="col-6 col-md-2 mb-4 statistic-box">
            <h3 className="display-6 font-weight-bold">600+</h3>
            <p>Press Releases Published</p>
          </div>
          <div className="col-6 col-md-2 mb-4 statistic-box">
            <h3 className="display-6 font-weight-bold">1500+</h3>
            <p>Successful Marketing Campaigns</p>
          </div>
        </div>

        <hr className="divider my-4" />

        <div className="row text-center justify-content-center">
          {/* Second Row */}
          <div className="col-6 col-md-2 mb-4 statistic-box">
            <h3 className="display-6 font-weight-bold">10K+</h3>
            <p>Live Webpages</p>
          </div>
          <div className="col-6 col-md-2 mb-4 statistic-box">
            <h3 className="display-6 font-weight-bold">100K+</h3>
            <p>Emails Sent</p>
          </div>
          <div className="col-6 col-md-2 mb-4 statistic-box">
            <h3 className="display-6 font-weight-bold">01</h3>
            <p>Billion Words produced</p>
          </div>
          <div className="col-6 col-md-2 mb-4 statistic-box">
            <h3 className="display-6 font-weight-bold">$50</h3>
            <p>Million in Revenue Generated for Clients</p>
          </div>
        </div>
      </div>
    </section>
    
    <section className="d-flex flex-column align-items-center justify-content-center text-center p-5" style={{ backgroundColor: '#f8f9fa' }}>
      <h1 className="display-6 fw-bold" style={{fontFamily:"Time New Roman"}}>
        Maximize Your Brand’s Potential & Get 10X Results
       <br/>  with Our Bespoke Digital Marketing Services
      </h1>
      <p className="lead mt-3 " style={{color: "rgba(17, 13, 16, 0.56)"}}>
        Explore our digital marketing solutions to see why you need them and how we excel beyond the competition. 
        <br />
        Click now to discover the difference.
      </p>
    </section>
    </>
  );
};

export default StatisticsSection;
