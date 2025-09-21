import StarPlaceholder from '../assets/StarPlaceholder.png';
import PerfumeBottle from '../assets/hero-perfume-bottle-placeholder.jpg';

export function MainBody() {
    return (
        <>
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
        </>
    );
}

export default MainBody;