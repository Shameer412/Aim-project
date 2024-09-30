import React from 'react'
import './Blog.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const blogPosts = [
  {
    id: 1,
    img: "https://marketpro.ai/wp-content/uploads/2024/09/B1-1-2048x1025.png",
    description: "E-commerce PPC Management: Key...",
    date: "24 Sep 2024",
    tag: "Blog"
  },
  {
    id: 2,
    img: "https://marketpro.ai/wp-content/uploads/2024/09/B1-2-2048x1024.jpg",
    description: "Data Driven B2B Marketing: Evolving from Ineffective...",
    date: "20 Sep 2024",
    tag: "Blog"
  },
  {
    id: 3,
    img: "https://marketpro.ai/wp-content/uploads/2024/09/Blog-Image-3-2048x1024.jpg",
    description: "SEO vs. PPC: What's Right for Your Small Business?",
    date: "18 Sep 2024",
    tag: "Blog"
  },
  {
    id: 4,
    img: "https://marketpro.ai/wp-content/uploads/2024/09/B1-10-2048x1024.jpg",
    description: "A Startup Marketing Guide – Explore the Pain Points...",
    date: "16 Sep 2024",
    tag: "Blog"
  },
  {
    id: 5,
    img: "https://marketpro.ai/wp-content/uploads/2024/09/B1-8-2048x1024.jpg",
    description: "Targeted Success: The Power of Account-Based...",
    date: "13 Sep 2024",
    tag: "Blog"
  },
  {
    id: 6,
    img: "https://marketpro.ai/wp-content/uploads/2024/09/B1-5-2048x1024.jpg",
    description: "The Fundamentals of B2B Growth Marketing Strategy...",
    date: "12 Sep 2024",
    tag: "Blog"
  },
  {
    id: 7,
    img: "https://marketpro.ai/wp-content/uploads/2024/09/B1-9-2048x1024.jpg",
    description: "Convert Traffic into Revenue with Small...",
    date: "24 Aug 2024",
    tag: "Blog"
  },
  {
    id: 8,
    img: "https://marketpro.ai/wp-content/uploads/2024/09/B1-6-2048x1024.jpg",
    description: "Enterprise Marketing: Best Tips And Tricks To...",
    date: "19 Aug 2024",
    tag: "Blog"
  }
];




const Blog = () => {
  return (
   <>
<Navbar/>

 <section className="section1">
  {/* Image Section */}
  <div className="image-sec">
    <img src="https://marketpro.ai/wp-content/uploads/2024/09/B1-2-1568x784.jpg" alt="E-commerce PPC Strategies Image" />
  </div>
  {/* Content Section */}
  <div className="cont">
    <div className="data">
   <img src="https://marketpro.ai/wp-content/uploads/2023/01/email_icon.svg" alt="" />
   <p className='cont-para'>You can keep yourself updated by subscribing to MarketPro newsletter.</p>
    {/* Newsletter Subscription Form */}
    <form action="#" method="post">
      <label htmlFor="email">Subscribe to our newsletter:</label><br /><br />
      <input type="email" id="email" name="email" placeholder="Enter your email" required />
      <button className='button' type="submit">Subscribe</button>
      <p className='cont-para'>Subscribe to get the latest offers, sneak peeks, and updates delivered straight to your inbox! See our Privacy Policy!</p>
    </form>
    <br />
    {/* Social Share Links */}
    <div className="social-share">
      <p>Social Share</p>
      <a href="#"><img src="https://marketpro.ai/wp-content/uploads/2023/02/fb_icon.svg" alt="Facebook" /></a>
      <a href="#"><img src="https://marketpro.ai/wp-content/uploads/2023/02/Group.svg" alt="Instagram" /></a>
      <a href="#"><img src="https://marketpro.ai/wp-content/uploads/2023/02/linked_icon.svg" alt="LinkedIn" /></a>
      <a href="#"><img src="https://marketpro.ai/wp-content/uploads/2024/05/Group-1.svg" alt="YouTube" /></a>
    </div>
    </div>
  </div>

</section>



<div className="blog-list d-flex justify-content-center">
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-item">
          {/* Display image */}
          <img src={post.img} alt="Blog Post" className="blog-image" />
          <div className="main">
          <div className="blog-tag">{post.tag}</div>
          <div className="blog-date">{post.date}</div>
          </div>
          <p className='p'>{post.description}</p>
       
        </div>
       
      ))}
    </div>
<div className='project-button2 my-5'>

    <button>view more</button>

    </div>

{/* ...................... */}
<section>
<div className="project-section">
  <div className="project-content">
    <h2>Starting a new project?</h2>
    <p>
      Why turn around now when you’ve come so far? Let’s talk if you need help 
      in achieving your marketing goals or simply want to learn more about what we do.
    </p>
  </div>
  <div className="project-button">
    <button>Let’s Get Started</button>
  </div>
</div>
</section>

<Footer/>
   </>
  )
}

export default Blog
