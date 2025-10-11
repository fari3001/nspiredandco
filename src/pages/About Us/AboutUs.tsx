import React from 'react';
// Replace with the correct path to your image file
import PerfumeBottle from '../../assets/hero-perfume-bottle-placeholder.jpg';


const AboutUs: React.FC = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-header-image">
                <img src={PerfumeBottle} alt="placeholder image" style={{ height: '2rem' }}/>
                
                {/* <div className="hero-section box-shadow-base" /> */}
            </div>
            <div className="about-us-text">
                <p>
                    Welcome to Nspired, where we believe in the power of scent to evoke emotions, create memories, and inspire confidence. Our journey began with a simple idea: to craft unique, high-quality fragrances that resonate with individuality and elegance.
                </p>
                <p>
                    At Nspired, we are passionate about the art of perfumery. Each of our fragrances is meticulously crafted using the finest ingredients sourced from around the world. Our team of expert perfumers combines traditional techniques with modern innovation to create scents that are both timeless and contemporary.
                </p>
                <p>
                    We understand that fragrance is a deeply personal experience. That's why we offer a diverse range of scents, from fresh and floral to warm and woody, ensuring that there is something for everyone. Whether you're looking for a signature scent or a special gift, Nspired has you covered.
                </p>
                <p>
                    Sustainability is at the heart of everything we do. We are committed to ethical sourcing practices and environmentally friendly packaging. Our goal is to not only create beautiful fragrances but also to make a positive impact on the world around us.
                </p>
                <p>
                    Thank you for choosing Nspired. We invite you to explore our collection and discover the perfect scent that inspires you.
                </p>
            </div>
            <div className="about-us-image-gallery">
                <img src="/images/about-us-header.jpg" alt="About Us Header" />
                <img src="/images/about-us-header.jpg" alt="About Us Header" />
                <img src="/images/about-us-header.jpg" alt="About Us Header" />
            </div>
        </div>
    );
};

export default AboutUs;