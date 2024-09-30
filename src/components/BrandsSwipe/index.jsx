import React from 'react';
import './BrandsSwipe.css'; // For custom styling

const BrandsSwipe = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold" style={{ fontFamily: 'Times New Roman', fontSize:"45px" }}>
      Our Clients are regularly featured
      </h2>
      <h2 className='text-center mb-4 fw-bold' style={{ fontFamily: 'Times New Roman',fontSize:"45px", }}>
      on World-renowned Platforms</h2>

      <div className="carousel-container">
        <div className="carousel-inner d-flex align-items-center">
          <div className="carousel-item active">
            <div className="d-flex justify-content-around">
              <img src="https://marketpro.ai/wp-content/uploads/2022/11/3-Ted.svg" alt="Facia" className="img-fluid brand-swipe" />
              <img src="https://marketpro.ai/wp-content/uploads/2022/11/10-Market-Watch.svg" alt="Gigstimer" className="img-fluid brand-swipe" />
              <img src="https://marketpro.ai/wp-content/uploads/2022/11/9-Buzz-Feed.svg" alt="Whistle" className="img-fluid brand-swipe" />
              <img src="https://marketpro.ai/wp-content/uploads/2022/11/4-Salesforce.svg" alt="Bpro" className="img-fluid brand-swipe" />
              <img src="https://marketpro.ai/wp-content/uploads/2022/11/5-Forbes.svg" alt="Moody" className="img-fluid brand-swipe" />
              <img src="https://marketpro.ai/wp-content/uploads/2022/11/7-Fox-News.svg" alt="Techitz" className="img-fluid brand-swipe" />
              <img src="https://marketpro.ai/wp-content/uploads/2022/11/8-Entrepreneur.svg" alt="Union" className="img-fluid brand-swipe" />
           
            </div>
          </div>
        </div>
      </div>

      <div className='text-center mt-2'>
            <button className="contact-btn">Get Started</button>
          </div>  
    </div>
  );
};

export default BrandsSwipe;
