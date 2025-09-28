// Styles
import './App.css';

// React Router
import { Link, Route, Routes, useLocation } from 'react-router-dom';

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

  // Hide header only on the homepage
  const showComponent = location.pathname !== '/';

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

            <div className="search-icon" role="search">
              <button aria-label="Search">
                  <SearchIcon />
              </button>
            </div>
          </div>
        </header>
      {/* )} */}
    <main>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
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
    <Footer companyName='Nspirerd and Co' />
    )}
    </>
  )
}

export default App
