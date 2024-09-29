import React from 'react'
import "./PPC.css"
const PPC = () => {
 const  ppcData=[
  {
    id:1,
    image:"https://marketpro.ai/wp-content/uploads/2024/04/Rectangle-1878-1.png",
    text1:"YouTube Advertising",
    text2:"Are you among the 50% of marketers who use YouTube ads to maximize their brands’ exposure? If not, why not?"
  },
  {
    id:2,
    image:"https://marketpro.ai/wp-content/uploads/2024/04/Mask-group-5.png",
    text1:"Google Search Ads",
    text2:"On average, 41% of clicks in Google Ads go to the top 3 paid ads on the search results page. Are you missing the placement?"
  },
  {
    id:3,
    image:"https://marketpro.ai/wp-content/uploads/2024/04/Mask-group-2.png",
    text1:"Google Shopping Ads",
    text2:"85% of all product searches start on Amazon or Google. Want to launch Google shopping ads and expose your products to billions?"
  },
  {
    id:4,
    image:"https://marketpro.ai/wp-content/uploads/2024/04/Mask-group-1.png",
    text1:"App Promotion",
    text2:"Looking to boost your customer retention rate? In-app promotion is your go-to strategy that ensures increased retention by 4x."
  },
 ]

  return (
    <div>
        {/* PPC-Banner-1 */}
        <div className='PPC-Banner-1'>
             <h1>
             Paid Search Marketing <br /> & PPC Advertising <br /> Services – Driving <br /> Digital Growth for <br /> Your Business
             </h1>
             <h4>Strategic Placement of Online PPC Ads on <br /> Popular Search Engines</h4>
             <p>Presenting the most relevant paid advertising to coincide with <br /> consumers’ intent to buy for them to take prompt action. <br /> Combining advanced bidding techniques, intent, and <br /> demographics into account to bring in new business and drive <br /> online sales.</p>
             <button>Get Start Now</button>
        </div>
        {/* PPC-Banner-2 */}
        <div className='PPC-Banner-2'>
            <div className='PPC-Banner-2-1'>
                  <h1>Securing More Conversions Through PPC Management <br /> for Your Business</h1>
                  <p>Marketpro works hard at driving cost effective paid search campaigns to help improve traffic and <br /> conversions. Our PPC experts work closely with its SEO team to help clients increase the number of <br /> conversions they get from their PPC ads and their overall online growth.</p>
            </div>

            <button>Lets Get Started</button>
        </div>
          {/* PPC-Banner-3 */}
          <div className='PPC-Banner-3'></div>
           {/* PPC-Banner-4 */}
           <div className="PPC-Banner-4">
            <h1>PPC and SEO – The Ultimate <br />
            Marketing Mix</h1>
            <p>Be baffled with metrics that lead to <br /> financial success, not clicks and <br /> impressions</p>
           </div>
           {/* PPC-Banner-5 */}
           <div className="PPC-Banner-5">
                {
                  ppcData.map((item)=>{
                    return(
                      <div className="PPC-Banner-5-1">
                        <img src={item.image} alt="" />
                        <h2>{item.text1}</h2>
                        <p>{item.text2}</p>
                      </div>
                    )
                  })
                }
                
           </div>

    </div>
       
  )
}

export default PPC