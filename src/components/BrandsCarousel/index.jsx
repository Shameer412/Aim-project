import React from 'react';
import './BrandsCarousel.css'; // For custom styling

const BrandsCarousel = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ fontFamily: 'Times New Roman' }}>
  Brands that trust us to drive more revenue
</h2>

      <div className="carousel-container">
        <div className="carousel-inner d-flex align-items-center">
          <div className="carousel-item active">
            <div className="d-flex justify-content-around">
              <img src="https://marketpro.ai/wp-content/uploads/2024/07/Group-3598-3.svg" alt="Facia" className="img-fluid brand-logo" />
              <img src="https://marketpro.ai/wp-content/uploads/2024/05/thekyb.svg" alt="Gigstimer" className="img-fluid brand-logo" />
              <img src="https://marketpro.ai/wp-content/uploads/2024/05/facia.svg" alt="Whistle" className="img-fluid brand-logo" />
              <img src="https://marketpro.ai/wp-content/uploads/2024/05/gigstimer-1.svg" alt="Bpro" className="img-fluid brand-logo" />
              <img src="https://marketpro.ai/wp-content/uploads/2024/05/whislte-1.svg" alt="Moody" className="img-fluid brand-logo" />
              <img src="https://marketpro.ai/wp-content/uploads/2024/05/bpro.svg" alt="Techitz" className="img-fluid brand-logo" />
              <img src="https://marketpro.ai/wp-content/uploads/2024/05/Union.svg" alt="Union" className="img-fluid brand-logo" />
              <img src="https://marketpro.ai/wp-content/uploads/2024/05/Group-3594.svg" alt="Another" className="img-fluid brand-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsCarousel;
