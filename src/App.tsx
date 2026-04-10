// Styles
import './App.css';

// React Router
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

// React
import { useState, useEffect } from 'react';

// Assets
import { Logo } from "./assets/Logo";
import SearchIcon from './assets/SearchIcon';

// Components
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Experiences from './pages/Experiences';
import ProductPage from './pages/Product/ProductPage';

// About Us pages
import AboutUs from './pages/About Us/AboutUs';
import OurStory from './pages/About Us/OurStory';
import WhatWeDo from './pages/About Us/WhatWeDo';
import Mission from './pages/About Us/Mission';

// Event Information pages
import Bookings from './pages/Event Information/Bookings';
import GetAQuote from './pages/Event Information/GetAQuote';
import Coverage from './pages/Event Information/Coverage';

// Other
import Contact from './pages/Contact';
// import UnderConstruction from './pages/UnderConstruction';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);

  // Hide header only on the homepage
  const showComponent = location.pathname !== '/';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSearchClick = () => {
    if (showSearchInput && searchQuery.trim()) {
      // If search is open and has text, submit the search
      navigate('/shop');
    } else {
      // Otherwise toggle the search bar
      setShowSearchInput(!showSearchInput);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/shop');
    }
  };

  return (
    <>
     {/* {showComponent && ( */}
        <header>
          <div className="header-inner">
            <a href="index.html" className="logo-link">
              <div className="logo">{Logo}</div>
            </a>

            <nav className="nav-menu">
              {/* To be removed later  */}
              <Link to="/home">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/services">Services</Link>
              <Link to="/experiences">Experiences</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            <div className="search-container" role="search">
              <form onSubmit={handleSearchSubmit} className={`search-box ${showSearchInput ? 'active' : ''}`}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={() => {
                    if (!searchQuery.trim()) {
                      setShowSearchInput(false);
                    }
                  }}
                  placeholder="Search products..."
                  className="search-input"
                  autoFocus={showSearchInput}
                />
                <button
                  type="button"
                  className="search-btn"
                  onClick={handleSearchClick}
                  aria-label={showSearchInput ? "Submit search" : "Open search"}
                >
                  <SearchIcon width="1.1rem" height="1.1rem" />
                </button>
              </form>
            </div>
          </div>
        </header>
      {/* )} */}
    <main>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop searchQuery={searchQuery} />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/get-a-quote" element={<GetAQuote />} />
            <Route path="/coverage" element={<Coverage />} />
        </Routes>
        {/* <MainBody /> */}
    </main>
    {showComponent && (
    <Footer />
    )}
    </>
  )
}

export default App
