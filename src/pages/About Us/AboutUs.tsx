import { useState, useEffect } from 'react';
import PerfumeBottle from '../../assets/hero-perfume-bottle-placeholder.jpg';

export default function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

        .modern-about-container {
          min-h-screen;
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
          color: #1f2937;
        }

        .modern-about-section-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modern-about-section-content p {
          font-size: 1.125rem;
          line-height: 1.75;
          color: #4b5563;
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
          background: linear-gradient(to bottom right, rgb(254 205 211), rgb(253 230 138));
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
          color: #1f2937;
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
          color: #ef4444;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .modern-about-value-title {
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .modern-about-value-description {
          font-size: 1rem;
          line-height: 1.75;
          color: #4b5563;
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
          color: #1f2937;
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

        .modern-about-highlight {
        }

        .modern-about-highlight p {
          position: relative;
          color: #1f2937;
          font-size: 1.125rem;
          font-weight: 300;
          line-height: 1.75;
          max-width: 48rem;
          margin: 0 auto;
        }

        .modern-about-cta {
          text-align: center;
          padding-bottom: 4rem;
        }

        .modern-about-cta-button {
          padding: 1.25rem 3.5rem;
          background: linear-gradient(to right, #1f2937, #374151);
          color: white;
          border-radius: 0;
          border: none;
          font-size: 0.875rem;
          font-weight: 300;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.5s ease;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        }

        .modern-about-cta-button:hover {
          background: linear-gradient(to right, #fb7185, #fbbf24);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
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

      <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Decorative blur elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block mb-6">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-8" />
              </div>
              <h1 className="text-6xl md:text-7xl font-extralight text-gray-900 mb-8 tracking-tight">
                About Nspired
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
                Crafting bespoke fragrance experiences that inspire and captivate
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto" />
        </div>

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
                    <div className="modern-about-value-icon bg-gradient-to-br from-rose-100 to-amber-100 border border-rose-300/40 mb-8 group-hover:border-rose-400/70 group-hover:from-rose-200/60 group-hover:to-amber-200/60 transition-all duration-500">
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
                    <div className="modern-about-value-icon bg-gradient-to-br from-rose-100 to-amber-100 border border-rose-300/40 mb-8 group-hover:border-rose-400/70 group-hover:from-rose-200/60 group-hover:to-amber-200/60 transition-all duration-500">
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
                    <div className="modern-about-value-icon bg-gradient-to-br from-rose-100 to-amber-100 border border-rose-300/40 mb-8 group-hover:border-rose-400/70 group-hover:from-rose-200/60 group-hover:to-amber-200/60 transition-all duration-500">
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

            {/* Highlight Section */}
            <div className="modern-about-highlight bg-gradient-to-br from-rose-100 to-amber-100 border border-stone-300/60 rounded-xl p-16 text-center mb-20">
              <p>
                Thank you for choosing Nspired. We invite you to explore our collection
                and discover the perfect scent that inspires you.
              </p>
            </div>

            {/* CTA Section */}
            <div className="modern-about-cta">
              <button className="modern-about-cta-button">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
