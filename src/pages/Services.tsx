import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

// Simple SVG Icons
const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const GiftIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ServicesPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Weddings & Engagements",
      description: "Transform your special day into an unforgettable sensory journey",
      features: [
        "Personalized signature scent creation for the couple",
        "Interactive fragrance bar for guests",
        "Custom-labeled bottles as unique favors",
        "Complimentary bridal party scent consultations"
      ],
      gradient: "from-rose-400 to-pink-500"
    },
    {
      icon: <GiftIcon className="w-8 h-8" />,
      title: "Birthday Celebrations",
      description: "Create magical memories with a bespoke fragrance experience",
      features: [
        "Age-appropriate scent workshops",
        "Personalized birthday scent creation",
        "Beautiful gift packaging included",
        "Fun and educational fragrance journey"
      ],
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Corporate Events",
      description: "Elevate your brand with sophisticated olfactory experiences",
      features: [
        "Team-building fragrance workshops",
        "Custom corporate scent development",
        "Professional setup and presentation",
        "Branded bottles with company logo"
      ],
      gradient: "from-rose-500 to-amber-400"
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: "Bridal & Baby Showers",
      description: "Pamper your guests with an intimate perfume crafting session",
      features: [
        "Guided scent blending experience",
        "Elegant presentation and setup",
        "Take-home fragrance creations",
        "Themed decor coordination"
      ],
      gradient: "from-amber-400 to-rose-400"
    },
    {
      icon: <StarIcon className="w-8 h-8" />,
      title: "Private Parties",
      description: "Add a touch of luxury to any gathering or celebration",
      features: [
        "Customizable experience for any occasion",
        "Expert fragrance guidance",
        "Premium ingredient selection",
        "Memorable interactive entertainment"
      ],
      gradient: "from-pink-500 to-amber-500"
    },
    {
      icon: <CalendarIcon className="w-8 h-8" />,
      title: "Pop-Up Events",
      description: "Bring the art of perfumery to markets, festivals, and venues",
      features: [
        "Professional mobile bar setup",
        "High-traffic event experience",
        "Quick turnaround scent creation",
        "Brand visibility and engagement"
      ],
      gradient: "from-rose-400 to-pink-400"
    }
  ];

  const benefits = [
    {
      title: "Unique Entertainment",
      description: "Move beyond traditional party activities with an immersive sensory experience that guests will remember long after the event ends."
    },
    {
      title: "Personalized Keepsakes",
      description: "Every guest leaves with their own custom-crafted fragrance, a meaningful memento that captures the essence of your celebration."
    },
    {
      title: "Expert Guidance",
      description: "Our perfume artisans guide each guest through the art of scent composition, making the experience accessible and enjoyable for all."
    },
    {
      title: "Effortless Hosting",
      description: "We handle everything from setup to cleanup, allowing you to enjoy your event while we create magic for your guests."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-8" />
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2 rounded-full border border-rose-200/30">
                <SparklesIcon className="w-4 h-4 text-rose-400" />
                <span className="text-sm font-light tracking-widest uppercase text-gray-700">Mobile Perfume Bar</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-extralight text-gray-900 mb-8 tracking-tight leading-tight">
              Extraordinary Experiences,
              <br />
              <span className="font-light">One Scent at a Time</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed tracking-wide mb-16">
              Transform your celebration into an unforgettable sensory journey with our luxurious mobile perfume bar
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extralight text-gray-900 mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Each experience is thoughtfully crafted to complement your occasion and create lasting memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
              className="group relative bg-white/60 backdrop-blur-sm border border-stone-200/50 hover:border-rose-200/50 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Decorative gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="p-10">
                {/* Icon */}
                <div className="mb-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${service.gradient} bg-opacity-10 text-gray-800 group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-extralight text-gray-900 mb-4 tracking-wide">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features - Expandable */}
                <div className={`space-y-3 transition-all duration-500 ${selectedService === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 text-rose-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-light text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Expand Button */}
                <button className="text-gray-700 font-light text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300 uppercase tracking-wider">
                  {selectedService === index ? 'Show less' : 'View details'}
                  <span className="text-sm">{selectedService === index ? '↑' : '→'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative overflow-hidden py-24 bg-gradient-to-br from-stone-100 via-rose-50/30 to-amber-50/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-8 mx-auto" />
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
              Why Choose Our Mobile Perfume Bar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              More than just entertainment, we create moments of connection and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-stone-200/50 p-10 hover:bg-white/80 hover:border-rose-200/50 transition-all duration-500"
              >
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">{benefit.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden bg-gradient-to-br from-rose-50/50 via-white to-amber-50/50 border border-stone-200/50 p-16 md:p-20 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl"></div>

          <div className="relative">
            <SparklesIcon className="w-12 h-12 mx-auto mb-8 text-rose-400 stroke-1" />
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 tracking-tight leading-tight">
              The Charm of Bespoke Fragrance
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-12">
              There's something truly magical about creating your own signature scent. Our mobile perfume bar brings the ancient art of perfumery to your celebration, offering guests an intimate, hands-on experience where they become the perfumer. Watch as your guests discover unexpected scent combinations, share moments of delight, and craft fragrances as unique as they are. It's not just an activity—it's a journey of self-expression, creativity, and sensory discovery that turns every guest into an artist.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-light text-gray-700">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-stone-200/50 px-5 py-3 rounded-full">
                <CheckIcon className="w-4 h-4 text-rose-400" />
                <span className="tracking-wide">Interactive & Engaging</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-stone-200/50 px-5 py-3 rounded-full">
                <CheckIcon className="w-4 h-4 text-rose-400" />
                <span className="tracking-wide">Suitable for All Ages</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-stone-200/50 px-5 py-3 rounded-full">
                <CheckIcon className="w-4 h-4 text-rose-400" />
                <span className="tracking-wide">Memorable & Unique</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden py-24 bg-gradient-to-br from-stone-100 via-rose-50/20 to-amber-50/20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/60 backdrop-blur-sm border border-stone-300 p-16 md:p-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200/30 mb-8">
                <Calendar size={32} className="text-rose-400" strokeWidth={1.2} />
              </div>

              <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
                Ready to Book?
              </h2>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                Let's create an unforgettable fragrance experience for your event. Book our mobile perfume bar and make your celebration truly memorable.
              </p>

              <button
                onClick={() => navigate('/bookings')}
                className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-12 py-5 text-sm font-light tracking-widest uppercase hover:shadow-2xl hover:shadow-gray-900/20 hover:from-rose-400 hover:to-amber-400 transition-all duration-500 inline-flex items-center gap-3"
              >
                <Calendar size={18} strokeWidth={1.5} />
                Book Your Experience
              </button>

              <p className="text-sm text-gray-500 font-light mt-8">
                We'll respond within 24 hours to confirm your date
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;