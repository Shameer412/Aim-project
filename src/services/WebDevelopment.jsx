import React from 'react'
import "./WebDevevlopment.css"
import web from "../assets/web-services.png"
const WebDevelopment = () => {const steps = [
    { id: 1, title: "Decide", description: "Services best for your brand" },
    { id: 2, title: "Discuss", description: "Project requirements, business objectives, brand values" },
    { id: 3, title: "Planning", description: "Content creation sitemaps, website functionality" },
    { id: 4, title: "Virtual Design", description: "Exploring different brand designs" },
    { id: 5, title: "Framework", description: "Content hierarchy and website framework" },
    { id: 6, title: "Website Development", description: "Website working codes and content formatting" },
    { id: 7, title: "Testing", description: "Website functionality on different mediums" },
    { id: 8, title: "Launch", description: "Ready for deployment" },
  ];

    const Services=[
        {
            id:1,
            image:"https://marketpro.ai/wp-content/uploads/2022/12/custom_website.png",
            description:"Custom Website Design Services",
        },
        {
            id:2,
            image:"https://marketpro.ai/wp-content/uploads/2022/12/portal-w.png",
            description:"Portal Website Design Services",
        },
        {
            id:3,
            image:"https://marketpro.ai/wp-content/uploads/2022/12/portal-w.png",
            description:"Portal Website Design Services",
        },
        {
            id:4,
            image:"https://marketpro.ai/wp-content/uploads/2022/12/commerence-.png",
            description:"Woocommerce Website Design Services",
        },
        {
            id:5,
            image:"https://marketpro.ai/wp-content/uploads/2022/12/shopify-ic.png",
            description:"Shopify Website Design Services",
        },
        {
            id:6,
            image:"https://marketpro.ai/wp-content/uploads/2022/12/magento_ic.png",
            description:"Magneto Website Design Services",
        },
        {
            id:7,
            image:"https://marketpro.ai/wp-content/uploads/2022/12/drupal-ic.png",
            description:"Drupal Website Design Services",
        },
    ]
  return (
    <div>
        {/* Web Development Banner Section 1 */}
<div className='Web-Banner-1'>
<h1>Increase Sales & Grow <br/> Revenue With Website <br/> Development Company</h1>
<p>Improving the user experience by optimizing your website and page <br/> speed, as well as providing stunning visuals to keep your customers <br/> engaged</p>
<button>Get Start Now</button>
</div>

    {/* Web Development Banner Section 2  */}
    <div className='Web-Banner-2'>
        <h1>Tailoring Web Design and Development <br/>
        to Drive Conversion</h1>
        <p>Improving website traffic, performance and accelerating conversions <br/>
        with website design and development company</p>
        <img src="https://marketpro.ai/wp-content/uploads/2024/01/Group-3521-1.png" alt="" height="auto" width="100%" />
        <p><a href="">Get Started</a></p>
    </div>

{/* Web Development Banner Section 3 */}
<div className='Web-Banner-3'>
<h1>Website Optimization + SEO = Innovation and <br />
Professional Website Design Services</h1>
<p>Our Web Design and Web Development Services Include</p>
{/* Web Development Services Section */}
<div className="services-container">
      {Services.map((service) => (
        <div key={service.id} className="service-card">
          <img src={service.image} alt={service.description} className="service-image" />
          <div className="overlay">
            <div className="service-description">{service.description}</div>
          </div>
        </div>
      ))}
    </div>
    <button>Contact Us Now</button>
</div>
{/* Process Container */}
<div className="timeline-container">
      <h1>What Happens During Our Web <br /> Development Process?</h1>
      <p>We analyze your brand requirements and custom development!</p>
     <img src={web} alt="" height="800px" width="auto"/>
     <button>Contact Us</button>
      
    </div>
    </div>
  )
}

export default WebDevelopment