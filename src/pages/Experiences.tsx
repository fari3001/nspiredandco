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
    // <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
    <div className="min-h-screen ">
      {/* Header */}
      {/* <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-light text-gray-800 tracking-wide">
            Our <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">Experiences</span>
          </h1>
        </div>
      </header> */}

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-4 flex-wrap justify-center">
          {(Object.entries(experiences) as [ExperienceKey, Experience][]).map(([key, exp]) => {
            const TabIcon: LucideIcon = exp.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-rose-400 to-amber-400 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:shadow-md hover:scale-102'
                }`}
              >
                <TabIcon size={20} />
                <span className="font-light">{exp.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full mb-6">
            <IconComponent size={48} className="text-rose-500" />
          </div>
          <h2 className="text-5xl font-light text-gray-800 mb-4">
            {current.hero}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {current.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {current.benefits.map((benefit: Benefit, index: number) => {
            const BenefitIcon: LucideIcon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center mb-6">
                  <BenefitIcon size={28} className="text-rose-500" />
                </div>
                <h3 className="text-2xl font-light text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="bg-gradient-to-r from-rose-400 to-amber-400 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-white text-lg font-light">
            {current.highlight}
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-white text-gray-800 px-10 py-4 rounded-full text-lg font-light hover:shadow-xl transition-all duration-300 hover:scale-105 border border-rose-200">
            Book Your Experience
          </button>
        </div>
      </div>

      {/* Footer tagline */}
      <div className="text-center py-12 px-6">
        <p className="text-gray-500 font-light italic">
          Where fragrance becomes an unforgettable experience
        </p>
      </div>
    </div>
  );
}