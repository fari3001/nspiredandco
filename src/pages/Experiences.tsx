import React, { useState, useEffect, type JSX } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
              Our Experiences
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Discover bespoke fragrance journeys crafted to inspire and delight
            </p>
          </div>
        </div>
      </div>

      {/* Separator after hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="h-px w-42 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto" />
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex gap-3 flex-wrap justify-center">
          {(Object.entries(experiences) as [ExperienceKey, Experience][]).map(([key, exp]) => {
            const TabIcon: LucideIcon = exp.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 px-10 py-4 transition-all duration-500 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-2xl'
                    : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-stone-300/50'
                }`}
              >
                <TabIcon size={20} strokeWidth={1.5} />
                <span className="font-light tracking-wide">{exp.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Container with Experience Hero and Benefits */}
        <div className="relative mb-24">
          {/* Background gradient blur */}
          <div className="absolute -inset-4 bg-gradient-to-br from-rose-100/40 via-white to-amber-100/40 rounded-2xl blur-xl" />

          {/* Main container with border */}
          <div className="relative bg-white/80 backdrop-blur-sm border border-stone-300/70 rounded-2xl p-12 md:p-16">
            {/* Experience Hero */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-rose-100 to-amber-100 border border-rose-300/40 mb-10 group-hover:border-rose-400/60 transition-all duration-500">
                <IconComponent size={44} className="text-rose-500" strokeWidth={1.2} />
              </div>
              <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 tracking-tight leading-tight">
                {current.hero}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Separator */}
            <div className="mb-16">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-rose-300/70 to-transparent mx-auto" />
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-10">
              {current.benefits.map((benefit: Benefit, index: number) => {
                const BenefitIcon: LucideIcon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-amber-100 border border-rose-300/40 mb-8 group-hover:border-rose-400/70 group-hover:from-rose-200/60 group-hover:to-amber-200/60 transition-all duration-500">
                      <BenefitIcon size={28} className="text-rose-500 group-hover:text-rose-600 transition-colors duration-500" strokeWidth={1.2} />
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light px-4">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Separator before highlight */}
        {/* <div className="mb-20">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-rose-200/60 to-transparent mx-auto" />
        </div> */}

        {/* Highlight Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-rose-100 to-amber-100 border border-stone-300/60 rounded-xl p-16 text-center mb-20">
          <p className="relative text-gray-800 text-lg font-light leading-relaxed max-w-3xl mx-auto">
            {current.highlight}
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-14 py-5 text-sm font-light tracking-widest uppercase hover:shadow-2xl hover:shadow-gray-900/20 hover:from-rose-400 hover:to-amber-400 transition-all duration-500">
            Book Your Experience
          </button>
        </div>
      </div>
    </div>
  );
}