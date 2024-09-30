import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const Testimonial = () => {
    const webData = [
        {
            id: 1,
            img: "https://marketpro.ai/wp-content/uploads/2024/07/image3-1-1-1.png",
            info: "From the outset, Market Pro demonstrated unparalleled expertise and dedication to understanding our unique needs as a software development company. Their team conducted thorough market research, deeply analyzed our industrial landscape and target audience to craft a bespoke marketing strategy aligned with our project models. I highly recommend Market Pro to anyone looking for digital marketing services.",
            author: "Tehniyat Daud",
            role: "Head of People and Culture at Programme Force",
        },
        {
            id: 2,
            img: "https://marketpro.ai/wp-content/uploads/2024/07/image1-1000.jpg",
            info: "MPRO has been excellent with their overall service delivery. There are a few things to lookout for when working with an agency; feedback incorporation, timely deadlines and campaign execution. I have found the team not only competitive but very cooperative as well. They helped us rank on some tough keywords with their SEO and we're looking forward to more fruitful results.",
            author: "Mark Bain",
            role: "CEO at The KYB",
        },
        {
            id: 3,
            img: "https://marketpro.ai/wp-content/uploads/2024/07/image2-22.jpg",
            info: "From the outset, Market Pro demonstrated unparalleled expertise and dedication to understanding our unique needs as a software development company. Their team conducted thorough market research, deeply analyzed our industrial landscape and target audience to craft a bespoke marketing strategy aligned with our project models. I highly recommend Market Pro to anyone looking for digital marketing services.",
            author: "Mark Bain",
            role: "CEO at The KYB",
        },
        {
            id: 4,
            img: "https://marketpro.ai/wp-content/uploads/2024/07/storage_emulated_0_Pictures_Remini_1709644160427-scaled-1-2.jpg",
            info: "From the outset, Market Pro demonstrated unparalleled expertise and dedication to understanding our unique needs as a software development company. Their team conducted thorough market research, deeply analyzed our industrial landscape and target audience to craft a bespoke marketing strategy aligned with our project models. I highly recommend Market Pro to anyone looking for digital marketing services.",
            author: "Maimoona Majid",
            role: "Managing Director - Techub",
        }
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % webData.length);
        }, 4000); // Change testimonial every 4 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    const currentTestimonial = webData[currentTestimonialIndex];

    return (
        <div className="testimonial-container">
            <div className="testimonial-content">
                {/* Image Section */}
                <div className="testimonial-image">
                    <img src={currentTestimonial.img} alt={currentTestimonial.author} />
                </div>

                {/* Text Section */}
                <div className="testimonial-text">
                    <p className="testimonial-quote">{currentTestimonial.info}</p>
                    <p className="testimonial-author">{currentTestimonial.author}</p>
                    <p className="testimonial-role">{currentTestimonial.role}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
