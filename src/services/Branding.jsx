import React from 'react'
import "./Branding.css"
const Branding = () => {
    const servicesData = [
        { id: 1, title: 'Creating Brand Awareness', imgSrc: 'https://marketpro.ai/wp-content/uploads/2022/11/creating.png' },
        { id: 2, title: 'Marketing and Advertising', imgSrc: 'https://marketpro.ai/wp-content/uploads/2022/11/Rectangle-1888-2.png' },
        { id: 3, title: 'Researching Consumer Habits', imgSrc: 'https://marketpro.ai/wp-content/uploads/2022/11/researching.png' },
        { id: 4, title: 'Influencing Consumer Behaviour', imgSrc: 'https://marketpro.ai/wp-content/uploads/2022/11/consumer.png' },
        { id: 5, title: 'Curating Brand Advertisement', imgSrc: 'https://marketpro.ai/wp-content/uploads/2022/12/m-ma1.png' },
        { id: 6, title: 'Strategies', imgSrc: 'https://marketpro.ai/wp-content/uploads/2022/11/strategies.png' },
        { id: 7, title: 'Building Company Relationships', imgSrc: 'https://marketpro.ai/wp-content/uploads/2022/11/company.png' },
        { id: 8, title: 'Increasing Visibility', imgSrc: 'https://marketpro.ai/wp-content/uploads/2022/11/visibility.png' },
      ];
      const servicesData1 = [
        {
          image: "https://marketpro.ai/wp-content/uploads/2022/11/planning.png", // Update with your actual image path
          altText: "PR Strategy & Planning",
          title: "PR Strategy & Planning"
        },
        {
          image: "https://marketpro.ai/wp-content/uploads/2022/11/public.png", // Update with your actual image path
          altText: "Public Relations Consultations",
          title: "Public Relations Consultations"
        },
       
      ];
    const  serviceData2=[
      {
        image: "https://marketpro.ai/wp-content/uploads/2022/11/events.png", // Update with your actual image path
        altText: "Events, Conferences & Awards",
        title: "Events, Conferences & Awards"
      },
      {
        image: "https://marketpro.ai/wp-content/uploads/2022/11/press.png", // Update with your actual image path
        altText: "Press Release Distribution",
        title: "Press Release Distribution"
      }
    ]
  return (
    <div>
        <div className="Branding-Banner-1">
            <h1>Your Next Marketing <br /> Break through with <br /> MarketPro’s Branding <br /> and PR Campaigns</h1>
            <h4>Generating Leads, Increasing Sales, Scaling and <br /> Expanding your Business Internationally</h4>
            <p>Creating outstanding content and leveraging digital media <br /> outlets to get the word out about your brand nationally <br /> and internationally. We are constantly growing, building <br /> credibility and reaching new audiences with insights <br /> driven PR strategy

Get Started</p>
<button>Get Started</button>
        </div>
        <div className='Branding-Banner-2'>
            <h1>Create a Tornado of Leads with Our <br /> Marketing and PR Services</h1>
        <div className="container">
            
      {servicesData.map((service) => (
        <div key={service.id} className="item">
          <img src={service.imgSrc} alt={service.title} className="image" />
          <h3 className="title">{service.title}</h3>
        </div>
      ))}
    </div>
    <button>Get Started</button>
        </div>
        <div className="Branding-Banner-3">
      <h1>Create High Value Awareness Among Your <br /> Audience With Branding and PR Agency</h1>
      <p>A Comprehensive Marketing to Position Your <br /> Business for Market Success</p>

      <div className="services-grid">
        {servicesData1.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.altText} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
    <div className="Branding-Banner-3">
      

      <div className="services-grid">
        {serviceData2.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.altText} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Branding