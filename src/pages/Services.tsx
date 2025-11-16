import React, { useState } from 'react';
import PerfumeBottle from '../assets/hero-perfume-bottle-placeholder.jpg';

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
    // <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
    <div className="min-h-screen ">
      {/* Hero Section */}
      {/* <div className="relative overflow-hidden text-white h-[40vh]" style={{backgroundImage: `url(${PerfumeBottle})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 h-full flex items-center justify-center">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <SparklesIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Mobile Perfume Bar</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Extraordinary Experiences,<br />One Scent at a Time
            </h1>
            <p className="text-xl md:text-2xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
              Transform your celebration into an unforgettable sensory journey with our luxurious mobile perfume bar
            </p>
          </div>
        </div>
      </div> */}
      {/* <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-light text-gray-800 tracking-wide">
            Our <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">Services</span>
          </h1>
        </div>
      </header> */}

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-16">

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each experience is thoughtfully crafted to complement your occasion and create lasting memories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}></div>

              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className={`space-y-3 transition-all duration-300 ${selectedService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 text-rose-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  {selectedService === index ? 'Show less' : 'Learn more'}
                  <span className="text-xl">{selectedService === index ? '↑' : '→'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative overflow-hidden text-white py-20" style={{ background: 'linear-gradient(135deg, #b76e79 0%, #d4a5a5 50%, #e8c4bc 100%)' }}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Our Mobile Perfume Bar
            </h2>
            <p className="text-xl text-rose-100 max-w-2xl mx-auto">
              More than just entertainment, we create moments of connection and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-rose-100 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl p-12 md:p-16 text-center" style={{ background: 'linear-gradient(135deg, #f9d5e5 0%, #fce4ec 50%, #fff0f5 100%)' }}>
          <SparklesIcon className="w-16 h-16 mx-auto mb-6 text-rose-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Charm of Bespoke Fragrance
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            There's something truly magical about creating your own signature scent. Our mobile perfume bar brings the ancient art of perfumery to your celebration, offering guests an intimate, hands-on experience where they become the perfumer. Watch as your guests discover unexpected scent combinations, share moments of delight, and craft fragrances as unique as they are. It's not just an activity—it's a journey of self-expression, creativity, and sensory discovery that turns every guest into an artist.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-700">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
              <CheckIcon className="w-4 h-4 text-rose-500" />
              Interactive & Engaging
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
              <CheckIcon className="w-4 h-4 text-rose-500" />
              Suitable for All Ages
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
              <CheckIcon className="w-4 h-4 text-rose-500" />
              Memorable & Unique
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Create Magic?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's design a bespoke fragrance experience for your next celebration
        </p>
        <button
          className="text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #d4a5a5 0%, #e8c4bc 50%, #f9d5e5 100%)' }}
        >
          Book Your Experience
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;