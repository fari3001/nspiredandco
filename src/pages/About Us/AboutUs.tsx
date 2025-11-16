import { useState, useEffect } from 'react';
import PerfumeBottle from '../../assets/hero-perfume-bottle-placeholder.jpg';

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

        .modern-about-container {
          // background: linear-gradient(180deg, #fef3e8 0%, #ffffff 50%, #faf5f0 100%);
          min-h-screen;
        }

        .modern-about-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .modern-about-hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transition: transform 0.3s ease;
        }

        .modern-about-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modern-about-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, transparent 50%, rgba(255, 255, 255, 0.9) 100%);
        }

        .modern-about-hero-content {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modern-about-hero-text {
          text-align: center;
          padding: 0 1.5rem;
          max-width: 64rem;
        }

        .modern-about-hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 300;
          color: white;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
          font-family: 'Dancing Script', cursive;
        }

        .modern-about-hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 300;
          letter-spacing: 0.05em;
        }

        .modern-about-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce-arrow 2s infinite;
        }

        @keyframes bounce-arrow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        .modern-about-scroll-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: white;
        }

        .modern-about-content {
          max-width: 90rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .modern-about-section {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem;
          align-items: center;
          padding: 4rem 0;
        }

        .modern-about-section:first-of-type {
          padding-top: 4rem;
        }

        .modern-about-section-text {
          order: 2;
        }

        .modern-about-section:nth-child(even) .modern-about-section-text {
          order: 1;
        }

        .modern-about-section-image-wrapper {
          order: 1;
        }

        .modern-about-section:nth-child(even) .modern-about-section-image-wrapper {
          order: 2;
        }

        .modern-about-section-title {
          font-size: 3rem;
          font-weight: 300;
          margin-bottom: 2rem;
          color: var(--header-color);
        }

        .modern-about-section-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modern-about-section-content p {
          font-size: 1.125rem;
          line-height: 1.75;
          color: var(--paragraph-color);
          margin: 0;
          font-weight: 300;
        }

        .modern-about-image-wrapper {
          position: relative;
        }

        .modern-about-image-glow {
          position: absolute;
          top: -1rem;
          left: -1rem;
          right: -1rem;
          bottom: -1rem;
          background: linear-gradient(90deg, rgba(251, 191, 36, 0.3), rgba(168, 162, 158, 0.3));
          border-radius: 0.5rem;
          opacity: 0.3;
          filter: blur(2.5rem);
          transition: opacity 0.5s ease;
        }

        .modern-about-image-wrapper:hover .modern-about-image-glow {
          opacity: 0.5;
        }

        .modern-about-section-image {
          position: relative;
          border-radius: 0.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          width: 100%;
          height: 500px;
          object-fit: cover;
        }

        .modern-about-values {
          text-align: center;
          padding: 4rem 0;
        }

        .modern-about-values-title {
          font-size: 3rem;
          font-weight: 300;
          margin-bottom: 4rem;
          color: var(--header-color);
        }

        .modern-about-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .modern-about-value-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modern-about-value-icon-wrapper {
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }

        .modern-about-value-card:hover .modern-about-value-icon-wrapper {
          transform: scale(1.1);
        }

        .modern-about-value-icon {
          width: 5rem;
          height: 5rem;
          margin: 0 auto;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modern-about-value-icon svg {
          width: 2.5rem;
          height: 2.5rem;
          color: white;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .modern-about-value-icon.quality {
          background: linear-gradient(135deg, rgb(251, 191, 36), rgb(168, 162, 158));
        }

        .modern-about-value-icon.sustainability {
          background: linear-gradient(135deg, rgb(74, 222, 128), rgb(5, 150, 105));
        }

        .modern-about-value-icon.passion {
          background: linear-gradient(135deg, rgb(251, 113, 133), rgb(219, 39, 119));
        }

        .modern-about-value-title {
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 1rem;
          color: var(--header-color);
        }

        .modern-about-value-description {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--paragraph-color);
          font-weight: 300;
        }

        .modern-about-gallery {
          padding: 4rem 0;
        }

        .modern-about-gallery-title {
          font-size: 3rem;
          font-weight: 300;
          margin-bottom: 4rem;
          text-align: center;
          color: var(--header-color);
        }

        .modern-about-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .modern-about-gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          height: 24rem;
          cursor: pointer;
        }

        .modern-about-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .modern-about-gallery-item:hover img {
          transform: scale(1.1);
        }

        .modern-about-gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .modern-about-gallery-item:hover .modern-about-gallery-overlay {
          opacity: 1;
        }

        .modern-about-cta {
          text-align: center;
          padding: 4rem 0;
        }

        .modern-about-cta-title {
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 1.5rem;
          color: var(--header-color);
        }

        .modern-about-cta-description {
          font-size: 1.125rem;
          color: var(--paragraph-color);
          margin: 0 auto 2.5rem;
          max-width: 48rem;
          line-height: 1.75;
          font-weight: 300;
        }

        .modern-about-cta-button {
          padding: 1rem 2.5rem;
          background-color: var(--header-color);
          color: white;
          border-radius: 9999px;
          border: none;
          font-size: 1.125rem;
          font-weight: 300;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modern-about-cta-button:hover {
          background-color: #2d2d2d;
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .modern-about-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 3rem 0;
          }

          .modern-about-section-text,
          .modern-about-section:nth-child(even) .modern-about-section-text {
            order: 2;
          }

          .modern-about-section-image-wrapper,
          .modern-about-section:nth-child(even) .modern-about-section-image-wrapper {
            order: 1;
          }

          .modern-about-values-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .modern-about-gallery-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .modern-about-section:first-of-type {
            padding-top: 3rem;
          }

          .modern-about-values,
          .modern-about-gallery,
          .modern-about-cta {
            padding: 3rem 0;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .modern-about-values-grid {
            gap: 2rem;
          }

          .modern-about-gallery-grid {
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="modern-about-container">
        {/* Story Section */}
        <div className="modern-about-content">
          <div className="modern-about-section">
            <div className="modern-about-section-text">
              <h2 className="modern-about-section-title">Our Story</h2>
              <div className="modern-about-section-content">
                <p>
                  Welcome to Nspired, where we believe in the power of scent to evoke emotions, 
                  create memories, and inspire confidence. Our journey began with a simple idea: 
                  to craft unique, high-quality fragrances that resonate with individuality and elegance.
                </p>
                <p>
                  We understand that fragrance is a deeply personal experience. That's why we offer 
                  a diverse range of scents, from fresh and floral to warm and woody, ensuring that 
                  there is something for everyone.
                </p>
              </div>
            </div>
            <div className="modern-about-section-image-wrapper">
              <div className="modern-about-image-wrapper">
                <div className="modern-about-image-glow" />
                <img 
                  src={PerfumeBottle}
                  alt="Perfume craftsmanship"
                  className="modern-about-section-image"
                />
              </div>
            </div>
          </div>

          {/* Craftsmanship Section */}
          <div className="modern-about-section">
            <div className="modern-about-section-image-wrapper">
              <div className="modern-about-image-wrapper">
                <div className="modern-about-image-glow" />
                <img 
                  src={PerfumeBottle}
                  alt="Artisanal perfume creation"
                  className="modern-about-section-image"
                />
              </div>
            </div>
            <div className="modern-about-section-text">
              <h2 className="modern-about-section-title">The Art of Perfumery</h2>
              <div className="modern-about-section-content">
                <p>
                  At Nspired, we are passionate about the art of perfumery. Each of our fragrances 
                  is meticulously crafted using the finest ingredients sourced from around the world.
                </p>
                <p>
                  Our team of expert perfumers combines traditional techniques with modern innovation 
                  to create scents that are both timeless and contemporary.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="modern-about-values">
            <h2 className="modern-about-values-title">Our Commitment</h2>
            <div className="modern-about-values-grid">
              <div className="modern-about-value-card">
                <div className="modern-about-value-icon-wrapper">
                  <div className="modern-about-value-icon quality">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="modern-about-value-title">Quality</h3>
                <p className="modern-about-value-description">
                  Only the finest ingredients from around the world, ensuring every scent is exceptional.
                </p>
              </div>

              <div className="modern-about-value-card">
                <div className="modern-about-value-icon-wrapper">
                  <div className="modern-about-value-icon sustainability">
                    <svg viewBox="0 0 24 24">
                      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="modern-about-value-title">Sustainability</h3>
                <p className="modern-about-value-description">
                  Committed to ethical sourcing and environmentally friendly practices in everything we do.
                </p>
              </div>

              <div className="modern-about-value-card">
                <div className="modern-about-value-icon-wrapper">
                  <div className="modern-about-value-icon passion">
                    <svg viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="modern-about-value-title">Passion</h3>
                <p className="modern-about-value-description">
                  Creating fragrances that inspire confidence and resonate with your unique individuality.
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="modern-about-gallery">
            <h2 className="modern-about-gallery-title">Experience Nspired</h2>
            <div className="modern-about-gallery-grid">
              <div className="modern-about-gallery-item">
                <img 
                  src={PerfumeBottle}
                  alt="Perfume bottle"
                />
                <div className="modern-about-gallery-overlay" />
              </div>
              <div className="modern-about-gallery-item">
                <img 
                  src={PerfumeBottle}
                  alt="Perfume ingredients"
                />
                <div className="modern-about-gallery-overlay" />
              </div>
              <div className="modern-about-gallery-item">
                <img 
                  src={PerfumeBottle}
                  alt="Perfume collection"
                />
                <div className="modern-about-gallery-overlay" />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="modern-about-cta">
            <h2 className="modern-about-cta-title">
              Discover Your Signature Scent
            </h2>
            <p className="modern-about-cta-description">
              Thank you for choosing Nspired. We invite you to explore our collection 
              and discover the perfect scent that inspires you.
            </p>
            <button className="modern-about-cta-button">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </>
  );
}