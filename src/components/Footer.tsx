import React, { useState, type JSX } from 'react';
import { Sparkles, Droplet, Home, Car, Heart, Users, Gift, type LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Experience {
  title: string;
  icon: LucideIcon;
  hero: string;
  description: string;
  benefits: Benefit[];
  highlight: string;
}

interface Experiences {
  events: Experience;
  bespoke: Experience;
  lifestyle: Experience;
}

type ExperienceKey = keyof Experiences;

export default function ExperiencesPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState<ExperienceKey>('events');

  const experiences: Experiences = {
    events: {
      title: "Event Perfume Bar",
      icon: Users,
      hero: "Transform Your Celebration",
      description: "Elevate your wedding, party, or special event with an interactive perfume experience your guests will never forget.",
      benefits: [
        {
          icon: Sparkles,
          title: "Interactive Luxury",
          description: "Guests explore six curated signature scents, discovering their perfect fragrance in an elegant, hands-on experience."
        },
        {
          icon: Gift,
          title: "Memorable Favors",
          description: "Each guest takes home a personalized spray bottle filled with their chosen scent—a sophisticated keepsake that captures the essence of your celebration."
        },
        {
          icon: Heart,
          title: "Social Experience",
          description: "Create natural conversation starters and memorable moments as guests bond over fragrance discovery."
        }
      ],
      highlight: "Perfect for weddings, corporate events, birthday celebrations, and intimate gatherings."
    },
    bespoke: {
      title: "Bespoke Fragrances",
      icon: Droplet,
      hero: "Your Signature Scent",
      description: "Discover a fragrance as unique as you are. Our expert perfumers craft one-of-a-kind scents tailored to your personality and preferences.",
      benefits: [
        {
          icon: Heart,
          title: "Truly Personal",
          description: "Express your individuality with a custom fragrance that reflects your style, memories, and essence."
        },
        {
          icon: Sparkles,
          title: "Expert Craftsmanship",
          description: "Collaborate with skilled perfumers who guide you through the art of scent creation, from concept to finished product."
        },
        {
          icon: Gift,
          title: "Exclusive & Timeless",
          description: "Own a signature scent that's exclusively yours—a luxurious statement piece for your fragrance wardrobe."
        }
      ],
      highlight: "Ideal for personal expression, meaningful gifts, or creating a signature scent for your brand."
    },
    lifestyle: {
      title: "Lifestyle Collection",
      icon: Home,
      hero: "Scent Every Moment",
      description: "Extend your fragrance journey beyond the bottle with our curated collection of room mists and car fresheners.",
      benefits: [
        {
          icon: Home,
          title: "Ambient Elegance",
          description: "Transform your living spaces with luxurious room mists that create instant atmosphere and warmth."
        },
        {
          icon: Car,
          title: "Travel in Style",
          description: "Our minimalist car fresheners bring sophisticated fragrance to every journey with sleek, modern design."
        },
        {
          icon: Sparkles,
          title: "Cohesive Luxury",
          description: "Match your personal fragrance across all aspects of life—from body to home to car—for a complete sensory experience."
        }
      ],
      highlight: "Designed for those who appreciate refined aesthetics and quality in every detail."
    }
  };

  const current: Experience = experiences[activeTab];
  const IconComponent: LucideIcon = current.icon;

  return (
    <div className="bg-gradient-to-br from-rose-50 via-white to-amber-50">
   


      {/* Footer */}
      <footer className="min-h-[35vh] px-12 py-16 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #b48c6e 0%, #e6c8b2 50%, #f5e6dc 100%)'
      }}>
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(107, 68, 35, 0.03) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10 flex justify-between gap-12">
          {/* Left Section */}
          <div className="w-[28%] flex flex-col gap-6">
            <div className="text-3xl font-bold italic tracking-wide mb-2" style={{
              color: '#2d2419',
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)'
            }}>
              NSPIRED & CO
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="w-[72%] flex justify-between gap-10">
            {/* Products */}
            <div className="flex-1">
              <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest relative pb-3" style={{ color: '#6b4423' }}>
                Products
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#6b4423] opacity-50"></span>
              </h4>
              <div className="flex flex-col gap-3.5 text-[15px]">
                <a href="#/shop" className="text-[#2d2419] opacity-85 hover:opacity-100 hover:text-[#6b4423] hover:pl-2 transition-all duration-300">Shop</a>
                <a href="#/services" className="text-[#2d2419] opacity-85 hover:opacity-100 hover:text-[#6b4423] hover:pl-2 transition-all duration-300">Services</a>
                <a href="#/experiences" className="text-[#2d2419] opacity-85 hover:opacity-100 hover:text-[#6b4423] hover:pl-2 transition-all duration-300">Experiences</a>
              </div>
            </div>

            {/* About Us */}
            <div className="flex-1">
              <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest relative pb-3" style={{ color: '#6b4423' }}>
                About Us
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#6b4423] opacity-50"></span>
              </h4>
              <div className="flex flex-col gap-3.5 text-[15px]">
                <a href="#/about-us" className="text-[#2d2419] opacity-85 hover:opacity-100 hover:text-[#6b4423] hover:pl-2 transition-all duration-300">Our Story</a>
                <a href="#/what-we-do" className="text-[#2d2419] opacity-85 hover:opacity-100 hover:text-[#6b4423] hover:pl-2 transition-all duration-300">What we do</a>
                <a href="#/mission" className="text-[#2d2419] opacity-85 hover:opacity-100 hover:text-[#6b4423] hover:pl-2 transition-all duration-300">Mission</a>
              </div>
            </div>

            {/* Events */}
            <div className="flex-1">
              <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest relative pb-3" style={{ color: '#6b4423' }}>
                Events
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#6b4423] opacity-50"></span>
              </h4>
              <div className="flex flex-col gap-3.5 text-[15px]">
                <a href="#/bookings" className="text-[#2d2419] opacity-85 hover:opacity-100 hover:text-[#6b4423] hover:pl-2 transition-all duration-300">Bookings</a>
                <a href="#/get-a-quote" className="text-[#2d2419] opacity-85 hover:opacity-100 hover:text-[#6b4423] hover:pl-2 transition-all duration-300">Get a quote</a>
                <a href="#/coverage" className="text-[#2d2419] opacity-85 hover:opacity-100 hover:text-[#6b4423] hover:pl-2 transition-all duration-300">Coverage</a>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="flex-1">
              <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest relative pb-3" style={{ color: '#6b4423' }}>
                Get In Touch
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#6b4423] opacity-50"></span>
              </h4>
              <div className="flex flex-col gap-3.5 text-[15px]">
                <a href="#/contact" className="text-[#2d2419] opacity-85 hover:opacity-100 hover:text-[#6b4423] hover:pl-2 transition-all duration-300">Questions or feedback</a>
                <a href="#/contact" className="text-[#2d2419] opacity-85 hover:opacity-100 hover:text-[#6b4423] hover:pl-2 transition-all duration-300">We'd love to hear from you</a>
                
                {/* Social Icons */}
                <div className="flex gap-4 mt-6">
                  <a 
                    href="https://www.instagram.com/nspired_co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'rgba(107, 68, 35, 0.12)',
                      border: '1px solid rgba(107, 68, 35, 0.2)',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#6b4423';
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(107, 68, 35, 0.25)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) svg.style.color = '#f5e6dc';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(107, 68, 35, 0.12)';
                      e.currentTarget.style.boxShadow = 'none';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) svg.style.color = '#6b4423';
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" style={{ color: '#6b4423', transition: 'color 0.3s ease' }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}