import React from 'react';
import './VisionSection.css'; // Import for any custom styles

const VisionSection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6">
          <img 
            src="https://marketpro.ai/wp-content/uploads/2024/07/Rectangle-1820-4-1-1.png" 
            alt="Team Meeting" 
            className="img-fluid rounded" 
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-6">
          <h2 className="display-5 font-weight-bold mb-3" style={{ fontFamily: 'Times New Roman' }}>
            Grow Your Digital Vision
          </h2>
          <p className="lead text-muted mb-4">
            Market Pro is all about offering a transparent environment and focusing on results that matter. 
            We believe that there is always a better way to do something. That’s why we are always researching, 
            experimenting, and listening to discover what that really is. Our top priority is having the heart 
            of a teacher, both within the team and with the clients.
          </p>

          {/* Call to Action Button */}
          <a href="#audit" className="free-audit ">
            Free Website Audit
          </a>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
