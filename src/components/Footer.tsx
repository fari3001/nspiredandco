export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white py-16 px-6 border-t border-stone-200">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-extralight text-gray-900 mb-4 tracking-tight">
              NSPIRED & CO
            </h3>
            <p className="text-gray-600 font-light leading-relaxed max-w-sm">
              Crafting bespoke fragrance experiences that inspire and captivate.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-light uppercase tracking-widest text-gray-900 mb-6">
              Products
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#/shop" className="text-gray-600 hover:text-rose-400 font-light transition-colors duration-300">
                Shop
              </a>
              <a href="#/services" className="text-gray-600 hover:text-rose-400 font-light transition-colors duration-300">
                Services
              </a>
              <a href="#/experiences" className="text-gray-600 hover:text-rose-400 font-light transition-colors duration-300">
                Experiences
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-light uppercase tracking-widest text-gray-900 mb-6">
              About
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#/about-us" className="text-gray-600 hover:text-rose-400 font-light transition-colors duration-300">
                Our Story
              </a>
              <a href="#/what-we-do" className="text-gray-600 hover:text-rose-400 font-light transition-colors duration-300">
                What We Do
              </a>
              <a href="#/mission" className="text-gray-600 hover:text-rose-400 font-light transition-colors duration-300">
                Mission
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-light uppercase tracking-widest text-gray-900 mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#/contact" className="text-gray-600 hover:text-rose-400 font-light transition-colors duration-300">
                Contact Us
              </a>
              <a href="#/bookings" className="text-gray-600 hover:text-rose-400 font-light transition-colors duration-300">
                Book an Event
              </a>
            </div>

            {/* Social */}
            <div className="mt-6">
              <a
                href="https://www.instagram.com/nspired_co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-white border border-stone-300 hover:border-rose-300 hover:bg-gradient-to-br hover:from-rose-50 hover:to-amber-50 transition-all duration-300 group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700 group-hover:text-rose-400 transition-colors duration-300">
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 font-light">
              © {new Date().getFullYear()} NSPIRED & CO. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#/privacy" className="text-sm text-gray-500 hover:text-rose-400 font-light transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#/terms" className="text-sm text-gray-500 hover:text-rose-400 font-light transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
