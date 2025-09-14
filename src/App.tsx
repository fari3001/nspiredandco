import StarPlaceholder from './assets/StarPlaceholder.png';
import PerfumeBottle from './assets/hero-perfume-bottle-placeholder.jpg';

import './App.css'
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
 <header>
  <div className="header-inner">
    <a href="index.html" className="logo-link">
        <div className="logo">
      {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="100%" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve">
    <path fill="#000000" opacity="1.000000" stroke="none" 
        d="
    M200.402435,223.755051 
        C226.188354,223.736099 251.520142,223.816666 276.850067,223.635849 
        C281.189728,223.604874 283.880493,225.124252 286.349701,228.611374 
        C338.822998,302.717072 391.505859,376.674591 443.900513,450.835754 
        C477.932800,499.006195 511.398407,547.577209 545.472168,595.718018 
        C559.215149,615.134644 572.415222,635.079529 590.071838,651.399353 
        C612.094788,671.754883 638.083130,684.070862 667.860718,686.505676 
        C733.374023,691.862671 782.258972,663.528870 817.913818,609.936890 
        C829.246216,592.903381 837.181335,574.211914 843.619080,554.857544 
        C844.144226,553.278625 844.543823,551.651917 845.161438,550.111450 
        C845.713074,548.735535 846.323425,547.165649 848.312622,547.597107 
        C850.228882,548.012817 850.322021,549.604675 850.300110,551.141296 
        C850.199524,558.190674 848.529297,565.018860 846.676880,571.715759 
        C831.916321,625.076294 799.676758,664.006470 749.553345,687.666321 
        C729.858337,696.963013 708.878967,702.033386 687.189209,704.451111 
        C674.914001,705.819336 662.656860,706.765259 650.338318,706.271790 
        C603.812561,704.408020 562.980042,688.847351 529.237854,655.991760 
        C513.861755,641.019775 501.149811,623.943542 488.794464,606.553345 
        C440.455292,538.515564 392.170715,470.438934 343.864319,402.377869 
        C318.986115,367.325928 294.107605,332.274200 269.217407,297.230774 
        C267.674286,295.058197 266.065704,292.929108 264.414612,290.837341 
        C263.405121,289.558472 262.431335,287.831177 260.429016,288.492310 
        C258.239868,289.215149 258.307922,291.298035 258.370697,293.118256 
        C258.5083</div>62,297.108643 259.034302,301.098907 258.962463,305.081268 
        C258.126617,351.400299 258.503632,397.724335 258.257172,444.045441 
        C258.074493,478.376801 258.576324,512.698792 259.491821,547.007202 
        C260.148102,571.600708 260.921509,596.249451 264.446472,620.645569 
        C267.120911,639.155396 271.963562,656.911804 286.771973,670.068115 
        C295.445923,677.774475 305.366425,682.765625 316.848969,684.825378 
        C319.603271,685.319458 324.530884,684.497131 324.179504,688.814392 
        C323.848419,692.882141 319.314453,691.242371 316.616516,691.249817 
        C277.786682,691.356934 238.956436,691.340637 200.126358,691.290222 
        C197.136032,691.286377 192.718262,692.335876 192.278732,688.234558 
        C191.876480,684.481140 196.384674,684.492126 199.085327,683.804321 
        C224.935867,677.221008 238.451218,659.926880 242.670837,634.295410 
        C246.491074,611.090027 247.806107,587.751770 247.750931,564.240906 
        C247.554596,480.581573 247.777374,396.921204 247.551422,313.262024 
        C247.514709,299.668671 246.348053,286.048950 243.456345,272.666107 
        C238.467331,249.576889 222.339737,234.359360 198.473190,230.383682 
        C196.010178,229.973389 193.456924,229.924469 192.378967,226.770920 
        C194.314529,224.233521 197.271149,224.327011 200.402435,223.755051 
    z"/>
    <path fill="#000000" opacity="1.000000" stroke="none" 
        d="
    M560.381836,267.358521 
        C578.093506,251.263992 597.691895,238.832443 619.731384,230.401566 
        C638.157043,223.353088 657.169983,219.097351 676.926453,217.542786 
        C713.280029,214.682236 747.884827,220.514938 780.504150,236.934662 
        C805.055115,249.293015 826.654053,265.445801 843.527039,287.468658 
        C845.345154,289.841644 846.352173,292.154388 846.344910,295.182373 
        C846.280518,322.014130 846.324524,348.846130 846.333130,375.678070 
        C846.333374,376.510986 846.315125,377.344879 846.272766,378.176636 
        C846.181824,379.959320 845.668335,381.584503 843.699280,381.970642 
        C841.632385,382.375977 840.609314,380.848877 840.069702,379.238800 
        C837.532166,371.666595 835.041504,364.077301 832.652405,356.457031 
        C826.016785,335.291901 819.068359,314.218384 807.347412,295.204193 
        C786.623230,261.584717 757.757935,237.946060 718.479492,231.057678 
        C660.535583,220.895813 611.011353,236.985916 573.647278,284.188263 
        C555.469971,307.151794 546.166138,334.174011 539.362305,362.235107 
        C532.314819,391.301514 530.808777,420.927490 532.536133,450.517151 
        C535.752441,505.610748 550.966370,557.195740 581.384766,603.778198 
        C585.301636,609.776367 589.158081,615.814331 592.992371,621.865601 
        C593.670654,622.935974 594.632935,624.024292 593.890137,625.882019 
        C591.208557,626.070435 589.946350,623.915161 588.505493,622.334656 
        C576.821594,609.518066 566.062378,595.943787 555.686279,582.058350 
        C536.015747,555.734985 517.968323,528.375793 502.148590,499.537903 
        C486.961273,471.852997 482.245819,442.394012 485.569366,411.229553 
        C490.562042,364.413544 510.611176,324.369324 539.969971,288.400208 
        C546.095337,280.895660 552.914490,274.057068 560.381836,267.358521 
    z"/>
    </svg> */}

    {/* UNCOMMENT ONCE THE WEBSITE IS RUNNING ON GITHUB */}
    {/* <svg
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  width="100%"
  viewBox="0 0 1024 1024"
  enableBackground="new 0 0 1024 1024"
  xmlSpace="preserve"
>
  <path
    fill="#000000"
    opacity="1"
    stroke="none"
    d="M200.402435,223.755051 
       C226.188354,223.736099 251.520142,223.816666 276.850067,223.635849 
       C281.189728,223.604874 283.880493,225.124252 286.349701,228.611374 
       C338.822998,302.717072 391.505859,376.674591 443.900513,450.835754 
       C477.932800,499.006195 511.398407,547.577209 545.472168,595.718018 
       C559.215149,615.134644 572.415222,635.079529 590.071838,651.399353 
       C612.094788,671.754883 638.083130,684.070862 667.860718,686.505676 
       C733.374023,691.862671 782.258972,663.528870 817.913818,609.936890 
       C829.246216,592.903381 837.181335,574.211914 843.619080,554.857544 
       C844.144226,553.278625 844.543823,551.651917 845.161438,550.111450 
       C845.713074,548.735535 846.323425,547.165649 848.312622,547.597107 
       C850.228882,548.012817 850.322021,549.604675 850.300110,551.141296 
       C850.199524,558.190674 848.529297,565.018860 846.676880,571.715759 
       C831.916321,625.076294 799.676758,664.006470 749.553345,687.666321 
       C729.858337,696.963013 708.878967,702.033386 687.189209,704.451111 
       C674.914001,705.819336 662.656860,706.765259 650.338318,706.271790 
       C603.812561,704.408020 562.980042,688.847351 529.237854,655.991760 
       C513.861755,641.019775 501.149811,623.943542 488.794464,606.553345 
       C440.455292,538.515564 392.170715,470.438934 343.864319,402.377869 
       C318.986115,367.325928 294.107605,332.274200 269.217407,297.230774 
       C267.674286,295.058197 266.065704,292.929108 264.414612,290.837341 
       C263.405121,289.558472 262.431335,287.831177 260.429016,288.492310 
       C258.239868,289.215149 258.307922,291.298035 258.370697,293.118256 
       C259.034302,301.098907 258.962463,305.081268 
       C258.126617,351.400299 258.503632,397.724335 258.257172,444.045441 
       C258.074493,478.376801 258.576324,512.698792 259.491821,547.007202 
       C260.148102,571.600708 260.921509,596.249451 264.446472,620.645569 
       C267.120911,639.155396 271.963562,656.911804 286.771973,670.068115 
       C295.445923,677.774475 305.366425,682.765625 316.848969,684.825378 
       C319.603271,685.319458 324.530884,684.497131 324.179504,688.814392 
       C323.848419,692.882141 319.314453,691.242371 316.616516,691.249817 
       C277.786682,691.356934 238.956436,691.340637 200.126358,691.290222 
       C197.136032,691.286377 192.718262,692.335876 192.278732,688.234558 
       C191.876480,684.481140 196.384674,684.492126 199.085327,683.804321 
       C224.935867,677.221008 238.451218,659.926880 242.670837,634.295410 
       C246.491074,611.090027 247.806107,587.751770 247.750931,564.240906 
       C247.554596,480.581573 247.777374,396.921204 247.551422,313.262024 
       C247.514709,299.668671 246.348053,286.048950 243.456345,272.666107 
       C238.467331,249.576889 222.339737,234.359360 198.473190,230.383682 
       C196.010178,229.973389 193.456924,229.924469 192.378967,226.770920 
       C194.314529,224.233521 197.271149,224.327011 200.402435,223.755051 
       z"
  />
  <path
    fill="#000000"
    opacity="1"
    stroke="none"
    d="M560.381836,267.358521 
       C578.093506,251.263992 597.691895,238.832443 619.731384,230.401566 
       C638.157043,223.353088 657.169983,219.097351 676.926453,217.542786 
       C713.280029,214.682236 747.884827,220.514938 780.504150,236.934662 
       C805.055115,249.293015 826.654053,265.445801 843.527039,287.468658 
       C845.345154,289.841644 846.352173,292.154388 846.344910,295.182373 
       C846.280518,322.014130 846.324524,348.846130 846.333130,375.678070 
       C846.333374,376.510986 846.315125,377.344879 846.272766,378.176636 
       C846.181824,379.959320 845.668335,381.584503 843.699280,381.970642 
       C841.632385,382.375977 840.609314,380.848877 840.069702,379.238800 
       C837.532166,371.666595 835.041504,364.077301 832.652405,356.457031 
       C826.016785,335.291901 819.068359,314.218384 807.347412,295.204193 
       C786.623230,261.584717 757.757935,237.946060 718.479492,231.057678 
       C660.535583,220.895813 611.011353,236.985916 573.647278,284.188263 
       C555.469971,307.151794 546.166138,334.174011 539.362305,362.235107 
       C532.314819,391.301514 530.808777,420.927490 532.536133,450.517151 
       C535.752441,505.610748 550.966370,557.195740 581.384766,603.778198 
       C585.301636,609.776367 589.158081,615.814331 592.992371,621.865601 
       C593.670654,622.935974 594.632935,624.024292 593.890137,625.882019 
       C591.208557,626.070435 589.946350,623.915161 588.505493,622.334656 
       C576.821594,609.518066 566.062378,595.943787 555.686279,582.058350 
       C536.015747,555.734985 517.968323,528.375793 502.148590,499.537903 
       C486.961273,471.852997 482.245819,442.394012 485.569366,411.229553 
       C490.562042,364.413544 510.611176,324.369324 539.969971,288.400208 
       C546.095337,280.895660 552.914490,274.057068 560.381836,267.358521 
       z"
  />
</svg> */}

    
        </div>
    </a>

    <nav className="nav-menu">
        <Link to="/shop">Shop</Link>
        <Link to="/services">Services</Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
    </nav>

    <div className="search-icon" role="search">
      <button aria-label="Search">
<svg width="1.8rem" height="1.8rem" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.029 16.5295L19.5 19.0005" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      </button>
    </div>
  </div>
</header>

<main>
<div className="hero-section box-shadow-base">
{/* TAKING OUT FOR NOW UNTIL FRAME IS READY
  <div className="hero-content">
        <h1>Your Signature, Distilled.</h1>
        <p>Experience the ultimate luxury—a fragrance born from your own story, crafted by our master perfumers.</p>
        <div className="hero-button-wrapper">
            <button className="hero-button" onclick="window.location.href='/form-intro'">Begin your creation →</button>
        </div>
    </div> */}
</div> 
<div className="benefit-highlights-wrapper">
    <div className="benefit-card">
        <img src={StarPlaceholder} alt="placeholder image" style={{ height: '2rem' }}/>
        <p>Create a fragrance that’s uniquely yours.</p>
    </div>
       <div className="benefit-card">
        <img src={StarPlaceholder} alt="placeholder image" style={{ height: '2rem' }}/>
        <p>Premium ingredients, ethically sourced.</p>
    </div>
       <div className="benefit-card">
        <img src={StarPlaceholder} alt="placeholder image" style={{ height: '2rem' }}/>
        <p>Truly immersive perfume experience.</p>
    </div>
</div>

    <div className="core-offerings-wrapper box-shadow-base">
        <div className="card-wrapper">
            <div className="image-container">
                <img src={PerfumeBottle} alt="Tech Conference" className="event-image" />
            </div>
            <div className="content-wrapper">
                <div className="text-card-content">
                    <h3>Products</h3>
                    <p>Lorem Ipsum is simply dummy text of the printley oectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="button-card-wrapper">
                    <button>Services</button>
                </div>
            </div>
        </div>
               <div className="card-wrapper">
            <div className="image-container">
                <img src={PerfumeBottle} alt="Tech Conference" className="event-image" />
            </div>
            <div className="content-wrapper">
                <div className="text-card-content">
                    <h3>Services</h3>
                    <p>Lorem Ipsum is simply dummy text of the printley oectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="button-card-wrapper">
                    <button>Services</button>
                </div>
            </div>
        </div>
               <div className="card-wrapper">
            <div className="image-container">
                <img src={PerfumeBottle} alt="Tech Conference" className="event-image" />
            </div>
            <div className="content-wrapper">
                <div className="text-card-content">
                    <h3>Experiences</h3>
                    <p>Lorem Ipsum is simply dummy text of the printley oectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="button-card-wrapper">
                    <button>Services</button>
                </div>
            </div>
        </div>
    </div>
    <div className="product-offerings-wrapper">
            <div className="product-card">
                <img src={PerfumeBottle} alt="Product 1" className="product-image" />
                <h4>Category Product 1</h4>
            </div>
            <div className="product-card">
                <img src={PerfumeBottle} alt="Product 2" className="product-image" />
                <h4>Category Product 2</h4>
            </div>
            <div className="product-card">
                <img src={PerfumeBottle} alt="Product 3" className="product-image" />
                <h4>Category Product 3</h4>
            </div>
    </div>
    <div className="book-now-wrapper">

    </div>

<button onClick={() => (window.location.href='/form-intro')}>Form Intro</button>
    </main>
    <footer>
        <div className="footer-inner">
            <div className="footer-left-wrapper">
                <div className="footer-logo">Nspired and Co</div>
                <div className="contract-wrapper"></div>
            </div>
            <div className="footer-right-wrapper">
                <div className="footer-column">
                    <h4>Products</h4>
                    <div className="footer-links">
                        <a href="">Shop</a>
                        <a href="">Services</a>
                        <a href="">Experiences</a>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>About Us</h4>
                    <div className="footer-links">
                        <a href="">Our Story</a>
                        <a href="">What we do</a>
                        <a href="">Mission</a>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Events</h4>
                    <div className="footer-links">
                        <a href="">Bookings</a>
                        <a href="">Get a quote</a>
                        <a href="">Coverage</a>
                    </div>  
                    </div>
                <div className="footer-column">
                    <h4>Get In Touch</h4>
                    <div className="footer-links">
                        <a href="">Questions or feedback</a>
                        <a href="">We'd love to hear from you</a>

                        <div className="footer-social-links">
                            <a href="https://www.instagram.com/nspired_co/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Instagram icon">
                                    <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                                    <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Facebook icon">
                                    <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.1l.4-3H13V9c0-.6.4-1 1-1z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="">
                                <svg fill="#000000" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default App
