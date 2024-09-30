import React, { useState } from 'react';
import './MidNavbar.css'; // Updated for custom CSS

const MidNavbar = () => {
    const webdata = [
        {
          id: 1,
          title: "Web Design and Development",
          info: "The appearance, usability, and accessibility of your website are more crucial than ever since 85% of customers visit a company’s website before they make a purchase. Our developers offer high-performing, user-friendly, and secure web design and development services to our clients that deliver tangible business results.",
          img: "https://marketpro.ai/wp-content/uploads/2024/07/Web-Design-and-Development-1.svg"
        },
        {
          id: 2,
          title: "SEO Marketing",
          info: "If your audience can’t find your grand narrative, it won’t matter how brilliant it is. What places you on Google and other search engines continuously evolves with more complex algorithms. Our SEO team has tried-and-tested ranking techniques at their fingertips, which means more traffic, better opportunities, and more conversions for you.",
          img: "https://marketpro.ai/wp-content/uploads/2024/07/SEO-Marketing-2-1.png"
        },
        {
          id: 3,
          title: "Social Media Management/ Optimization",
          info: "Brand loyalty, customer satisfaction, and conversion rates are all dependent on social media marketing strategy since 67% of consumers now run to social sites for customer service. Market Pro lets social media services work its magic for you by increasing reach and overseeing strategy to deliver high-impact social media campaigns.",
          img: "https://marketpro.ai/wp-content/uploads/2024/07/Social-Media-Optimization-2333.png"
        },
        {
          id: 4,
          title: "Pay Per Click",
          info: "Sometimes you are so ahead of the game that no one is out there searching for what you are offering. That’s where PPC Management increases your search engine visibility and gives you faster results. Our skilled PPC ads management team runs data-rich campaigns, giving you granular ad control for the highest ROI from PPC ads and paid searches.",
          img: "https://marketpro.ai/wp-content/uploads/2024/07/Pay-Per-Click-1.png"
        },
        {
          id: 5,
          title: "Email Marketing",
          info: "3.9 billion people use email every day. Understanding the nuances of your leads and timing can be challenging. Market Pro reestablishes contact and goodwill by promoting the next event, soliciting consumer feedback, or simply wowing potential customers with 7 different types of emails, sending special deals, and greetings.",
          img: "https://marketpro.ai/wp-content/uploads/2024/07/Email-Marketing-1-1.png"
        },
        {
          id: 6,
          title: "PR and Branding",
          info: "In a world of crowded markets, we create a distinctive corporate image that sticks out from the rest. Need a brand lift? Publish your official remarks and announcements on credible news websites to promote interest in your upcoming releases, create buzz, and establish a favorable perception of the brand in the marketplace.",
          img: "https://marketpro.ai/wp-content/uploads/2024/07/Branding-1.png"
        },
        {
          id: 7,
          title: "Content Marketing",
          info: "Customers nowadays expect consistent, and first-class content from their desired brands. But what themes, subjects, and content marketing services are essential to the success of your brand? Market Pro brings you a content marketing strategy that is practical, flexible, and actionable to improve conversions, generate leads, and build relationships.",
          img: "https://marketpro.ai/wp-content/uploads/2024/07/Content-Marketing-1.png"
        }
      ];

  // State to track the currently selected item
  const [selectedItem, setSelectedItem] = useState(webdata[0]);

  // Function to handle click on nav item
  const handleNavClick = (title) => {
    const item = webdata.find((data) => data.title === title);
    setSelectedItem(item);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="custom-navbar navbar-expand-lg">
        <div className="custom-container">
          <ul className="custom-navbar-nav mx-auto">
            {webdata.map((item) => (
              <li className="custom-nav-item" key={item.id}>
                <a
                  className={`custom-nav-link ${selectedItem.title === item.title ? 'active' : ''}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default behavior
                    handleNavClick(item.title);
                  }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Dynamic Content Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Right Side - Text */}
          <div className="col-md-6">
            <h2 className="display-5 font-weight-bold mb-3" style={{ fontFamily: 'Times New Roman' }}>
              {selectedItem.title}
            </h2>
            <p className="lead text-muted mb-4">{selectedItem.info}</p>
            <a href="" className="free-audit">Know More</a>
          </div>
          {/* Left Side - Image */}
          <div className="col-md-6">
            <img
              src={selectedItem.img}
              alt={selectedItem.title}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MidNavbar;
