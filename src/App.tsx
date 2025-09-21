import './App.css'
import { Link, Route, Routes, useLocation  } from 'react-router-dom';
import Shop from './pages/Shop';
import Footer from './components/Footer';

import { Logo } from "./assets/Logo";

import Services from './pages/Services';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  const location = useLocation();

  // Hide header only on the homepage
  const showComponent = location.pathname !== '/';

  return (
    <>
     {showComponent && (
        <header>
          <div className="header-inner">
            <a href="index.html" className="logo-link">
              <div className="logo">{Logo}</div>
            </a>

            <nav className="nav-menu">
              {/* To be removed later  */}
              <Link to="/shop">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/services">Services</Link>
              <Link to="/experiences">Experiences</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            <div className="search-icon" role="search">
              <button aria-label="Search">
                <svg
                  width="1.8rem"
                  height="1.8rem"
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.029 16.5295L19.5 19.0005"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
      )}
    <main>
        <Routes>
            <Route path="/" element={<UnderConstruction />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/services" element={<Services />} />
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
