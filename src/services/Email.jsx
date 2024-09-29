import React from 'react'
import { FaEnvelopeOpenText, FaBullhorn, FaVideo, FaEnvelope, FaBuilding, FaDollarSign } from 'react-icons/fa';
import "./Email.css"
const Email = () => {
    const emailTypes = [
        { label: 'Digital Magazine/ Newsletter', icon: <FaEnvelopeOpenText /> },
        { label: 'Brand Story Emails', icon: <FaBullhorn /> },
        { label: 'Social Media Emails', icon: <FaEnvelope /> },
        { label: 'Lead Nurturing Emails', icon: <FaEnvelopeOpenText /> },
        { label: 'New Content Announcement Email', icon: <FaVideo /> },
        { label: 'Drip Campaigns', icon: <FaEnvelope /> },
        { label: 'Product Update Email', icon: <FaEnvelopeOpenText /> },
        { label: 'B2B Email Marketing', icon: <FaBuilding /> },
        { label: 'Dedicated Sends', icon: <FaEnvelope /> },
        { label: 'Event Invitation', icon: <FaEnvelopeOpenText /> },
        { label: 'Transactional Emails', icon: <FaDollarSign /> },
        { label: 'Re-Engagement Emails', icon: <FaEnvelope /> },
        { label: 'Co-marketing Emails', icon: <FaEnvelopeOpenText /> },
      ];
  return (
    <div>
        {/* Email-1 */}
        <div className="Email-Banner-1">
            <h1>Reach Prospects with Best <br /> Email Marketing Agency</h1>
            <h4>Deliver the right email at the right time <br /> with email marketing lead generation</h4>
            <p>Are you looking to reach prospects who are so busy <br /> changing the world that they wouldn’t be able to discover <br /> you?</p>
            <p>MarketPro’s carefully curated email marketing strategy <br /> allows emails to land directly in the inbox of your potential <br /> prospects, ensuring CAN-Spam Act compliance.</p>
<button>Get Started</button>
        </div>
        {/* Email-2 */}
        <div className='Email-Banner-2'> 
             <h1>Stop Scraping, Start Converting with Our <br />
             Email Marketing Service</h1>
             <p>Don’t get lost in the sea of emails with the best email marketing services <br />
and have an awesome open rate and a profound click rate.</p>
              <img src="https://marketpro.ai/wp-content/uploads/2022/11/Group-3383-2048x847.png" alt="" 
              className='Email-Banner-2-Image'/>
        </div>
        {/* Email-3 */}
        <div className="email-banner-3">
            <h1>Become A Viral Success With The Best Email Marketing <br /> Strategy</h1>
            <p>At Market Pro, precision is our strong suit.</p>
            <p>We collaborate closely with your brand to identify and target your precise audience before launching extremely effective data- <br /> driven email marketing campaigns.</p>
      <div className="email-types-container">
        {emailTypes.map((type, index) => (
          <div key={index} className="email-type-item">
            <div className="icon-container">{type.icon}</div>
            <p>{type.label}</p>
          </div>
        ))}
      </div>
      <button >Get Started</button>
    </div>
    {/* Email-4 */}
    <div className="email-banner-4">
        <h1>Our Comprehensive Hyper Personalized <br />
        Email Marketing Campaign</h1>
        <div className="email-banner-4-1">
            
            <div className="text-container">
                <h4>Build Customer Loyalty</h4>
                <p>Create successful email marketing campaigns to <br /> interact with and promote your business. Boost  <br /> with targeted email marketing campaigns while <br /> engaging customers for a personalized <br /> experience.</p>
            </div>
            <img src="https://marketpro.ai/wp-content/uploads/2022/11/build-customer-loyalty.png" alt="" height="350px" />
        </div>
        <div className="email-banner-4-2">
        <img src="https://marketpro.ai/wp-content/uploads/2022/11/b2b.png" alt="" height="350px" />
            <div className="text-container">
                <h4>B2B/B2C Email Campaigns</h4>
                <p>Run both B2C and B2B hyper personalized email marketing <br /> campaigns to convert your prospects. Nurture leads by <br /> sending distinctive discounts, personalized messages, and <br /> running data-driven campaigns.</p>
            </div>
        </div>
        <div className="email-banner-4-3">
        
            <div className="text-container">
                <h4>Save Time and Effort</h4>
                <p>Quickly connect and interact with your intended  <br /> marketing segments to boost sales with our <br /> automated email systems. Send emails instantly as we <br /> have studied the ins and outs of campaign <br /> optimization to produce the best results.</p>
            </div>
            <img src="https://marketpro.ai/wp-content/uploads/2022/11/savetime.png" alt="" height="350px" />
        </div>
        <div className="email-banner-4-4">
            <h2>Run your email marketing campaigns <br />
            now and convert like crazy!</h2>
            <button>Contact Us</button>
        </div>
    </div>
    </div>
  )
}

export default Email