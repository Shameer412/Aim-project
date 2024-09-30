import React from 'react'
import "./Affiliate.css"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const Affiliate = () => {
    const services = [
        {
            id: 1,
            url: 'https://marketpro.ai/wp-content/uploads/2022/11/marketing-affliate-1.png',
            text: "Unattached Affiliate Marketing"
        },
        {
            id: 2,
            url: 'https://marketpro.ai/wp-content/uploads/2022/11/related-c.png',
            text: "Related Affiliate Marketing"
        },
        {
            id: 3,
            url: 'https://marketpro.ai/wp-content/uploads/2022/11/involved-c.png',
            text: "Involved Affiliate Marketing"
        }
    ]
    return (

        <div>
            <Navbar/>
            {/* Affilate-Banner-1 */}
            <div className='Affilate-Banner-1'>
                <h1>Scale, Launch and <br /> Manage Sales-Driven <br /> Affiliate Marketing <br /> Programs</h1>
                <h3>Brands at Every Stage of the Journey</h3>
                <p>Helping businesses to connect with influencers and design <br /> campaigns that are mutually beneficial for both parties with  <br /> properly defined KPIs from launching a new affiliate program to <br /> achieving business exponential growth.</p>
                <button>Get Start Now</button>
            </div>
            {/* image part */}

            <div className="layout">
                <div className="image-container">
                    <img src="https://marketpro.ai/wp-content/uploads/2022/11/affliate-marketing.png" alt="Description" />
                </div>
                <div className="text-container">
                    <h1>Affiliate Marketing – A <br /> Key to Business Success</h1>
                    <p>
                        Finding the right affiliate marketing agencyand <br /> formulating multiple strategies aimed at creating <br /> perfect business relationships is what Market Pro <br /> specializes in. We offer a range of affiliate marketing <br /> services, from full-service to  strategic advice, to  <br />
                        accommodate businesses of all shapes and sizes.
                    </p>
                    <button>Get Started</button>
                </div>
            </div>

            <div className='Affilate-Banner-2'>
                <h1>Long-Term Partnerships With The Right People <br /> To Create Highly Successful Campaigns</h1>
                <p>Partner with World’s Top- Publishers, Influencers and Marketing Agencies to Boost <br /> Sales Across International Markets Through Performance Based Strategies</p>
                <div className='services-container1'>

                    {services.map((service) => (
                        <div key={service.id} className="service-card1">
                            <img src={service.url} alt={service.text} className="service-image" />
                            <div className="overlay">
                                <div className="service-text">{service.text}</div>
                            </div>
                        </div>
                    ))}

                </div>
                <button>Find Out More</button>
            </div>

            <Footer/>
        </div>
    )
}

export default Affiliate