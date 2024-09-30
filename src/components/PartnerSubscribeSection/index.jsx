import React from 'react';
import './PartnerSubscribeSection.css'; // Add the styles in a separate CSS file

const PartnerSubscribeSection = () => {
  return (
    <div>
      {/* Our Partners Section */}
      <section className="custom-partners-section text-center">
        <h2 className="custom-partners-title">Our Partners</h2>
        <div className="custom-partners-logos d-flex justify-content-center">
          <div className="custom-partner-card">
            <img
              src="https://marketpro.ai/wp-content/uploads/2024/02/google-partner-seeklogo.svg"
              alt="Google Partner"
              className="custom-partner-img"
            />
           
          </div>
          <div className="custom-partner-card">
            <img
              src="https://marketpro.ai/wp-content/uploads/2023/06/Outlook-u-1.png"
              alt="Partner Logo"
              className="custom-partner-img"
            />
            
          </div>
        </div>
      </section>

      {/* Subscribe to Our Newsletter Section */}
      <section className="custom-subscribe-section">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-8">
              <h2 className="custom-subscribe-title">Subscribe to Our Newsletter</h2>
              <p className="custom-subscribe-text">
                Join our mailing list to get updates on industry trends, marketing tactics, and much more. You can
                unsubscribe at any time. We respect your privacy and will never share your information.
              </p>
            </div>
            <div className="col-md-4">
              <div className="custom-subscribe-input-container">
                <input type="email" className="custom-subscribe-input" placeholder="Enter your email address" />
                
                
              </div><button className="custom-subscribe-btn mt-3">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerSubscribeSection;
