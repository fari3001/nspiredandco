import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PerfumeBottle from '../assets/hero-perfume-bottle-placeholder.jpg';
import { products } from '../data/products';

// ── Typography & Colour tokens ─────────────────────────────────────────────
const T = {
  playfair: '"Playfair Display", Georgia, serif',
  cormorant: '"Cormorant Garamond", "Times New Roman", serif',
  jost: '"Jost", system-ui, sans-serif',
};

const C = {
  ink: '#1a1714',
  ivory: '#f5f0e8',
  ivoryDim: '#ede8de',
  gold: '#b49a6e',
  goldFaint: 'rgba(180, 154, 110, 0.15)',
  goldMid: 'rgba(180, 154, 110, 0.35)',
  stone: '#8a7e72',
  ivoryRgb: '245, 240, 232',
};

// ── Reusable hover handlers ────────────────────────────────────────────────
const hoverStyle = (
  el: EventTarget & (HTMLButtonElement | HTMLDivElement),
  styles: Partial<CSSStyleDeclaration>
) => Object.assign(el.style, styles);

// ── Sub-components ─────────────────────────────────────────────────────────
const SectionEyebrow = ({ label, align = 'left' }: { label: string; align?: 'left' | 'center' }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '20px',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
    }}
  >
    <div style={{ width: '32px', height: '1px', background: C.gold, flexShrink: 0 }} />
    <span
      style={{
        fontFamily: T.jost,
        fontSize: '0.65rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase' as const,
        color: C.stone,
      }}
    >
      {label}
    </span>
    {align === 'center' && (
      <div style={{ width: '32px', height: '1px', background: C.gold, flexShrink: 0 }} />
    )}
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────
const Home = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Inject Google Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap';
    document.head.appendChild(fontLink);

    // Inject marquee keyframes
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes nsp-marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      .nsp-marquee-inner {
        display: flex;
        width: max-content;
        animation: nsp-marquee 28s linear infinite;
      }
      .nsp-marquee-inner:hover { animation-play-state: paused; }
    `;
    document.head.appendChild(styleEl);

    const timer = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = products.slice(0, 3);

  const pillars = [
    {
      num: '01',
      title: 'Signature Perfumes',
      desc: 'Beautifully crafted fragrances that become the invisible thread of your identity. Each bottle holds a world waiting to be worn.',
      link: '/shop',
      cta: 'Explore the Collection',
    },
    {
      num: '02',
      title: 'Reed Diffusers',
      desc: 'Transform any room into a sanctuary. Our diffusers release fragrance with quiet, sustained elegance — atmosphere made tangible.',
      link: '/shop',
      cta: 'Discover Home Scents',
    },
    {
      num: '03',
      title: 'Bespoke Experiences',
      desc: 'A perfume bar for weddings and events. Guests create their own signature scent, guided by our perfumers — an unforgettable gift.',
      link: '/services',
      cta: 'Book an Experience',
    },
  ];

  const steps = [
    { num: '01', title: 'Consultation', desc: 'We listen to your story, preferences, and vision with care.' },
    { num: '02', title: 'Creation', desc: 'Our perfumers blend premium, ethically sourced ingredients to craft your scent.' },
    { num: '03', title: 'Refinement', desc: 'Together we perfect every note until the fragrance is entirely yours.' },
    { num: '04', title: 'Delivery', desc: 'Your bespoke fragrance arrives in elegant, custom packaging.' },
  ];

  const testimonials = [
    {
      quote: 'The fragrance they created for our wedding was beyond our wildest dreams. Every guest was enchanted, and I wore it as my something new.',
      author: 'Sarah & Michael',
      role: 'Wedding Clients',
    },
    {
      quote: 'The mobile perfume bar transformed our corporate event into something truly memorable. Nspired brought a level of artistry I didn\'t know was possible.',
      author: 'David Chen',
      role: 'Corporate Client',
    },
    {
      quote: 'Creating my own perfume with their guidance was one of the most personal and meaningful experiences of my life.',
      author: 'Jessica Thompson',
      role: 'Bespoke Client',
    },
  ];

  const reveal = (delay: number): React.CSSProperties => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
  });

  return (
    <div style={{ background: C.ivory, color: C.ink, overflowX: 'hidden' }}>

      {/* ══════════════════════════════════════════════════════════
          HERO — split: dark text panel | image
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          display: 'flex',
          height: 'calc(100vh - 82px)',
          minHeight: '560px',
        }}
      >
        {/* Left panel */}
        <div
          style={{
            width: '55%',
            background: C.ink,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(40px, 6vw, 80px) clamp(32px, 5vw, 72px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner marks */}
          {[
            { top: 32, left: 32 },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: pos.top,
                left: pos.left,
                width: 36,
                height: 36,
                borderTop: `1px solid ${C.goldMid}`,
                borderLeft: `1px solid ${C.goldMid}`,
              }}
            />
          ))}

          {/* Eyebrow */}
          <div
            style={{
              ...reveal(100),
              fontFamily: T.jost,
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: C.gold,
              marginBottom: '2.5rem',
            }}
          >
            Premium Fragrance House
          </div>

          {/* Headline */}
          <h1
            style={{
              ...reveal(200),
              fontFamily: T.playfair,
              fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: C.ivory,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              margin: '0 0 2rem 0',
            }}
          >
            The Art of<br />
            <span style={{ color: C.gold }}>Scent</span>
          </h1>

          {/* Gold rule */}
          <div
            style={{
              ...reveal(350),
              width: '100%',
              height: '1px',
              background: `linear-gradient(to right, ${C.gold}, transparent)`,
              marginBottom: '2rem',
            }}
          />

          {/* Subtext */}
          <p
            style={{
              ...reveal(400),
              fontFamily: T.cormorant,
              fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
              fontWeight: 300,
              color: `rgba(${C.ivoryRgb}, 0.7)`,
              lineHeight: 1.85,
              margin: '0 0 3rem 0',
              maxWidth: '460px',
            }}
          >
            Beautifully crafted perfumes, home diffusers, and bespoke fragrance bar experiences for weddings and extraordinary events.
          </p>

          {/* CTA row */}
          <div
            style={{
              ...reveal(520),
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => navigate('/shop')}
              style={{
                fontFamily: T.jost,
                fontSize: '0.7rem',
                fontWeight: 400,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: C.ink,
                background: C.gold,
                border: 'none',
                padding: '15px 36px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'background 0.35s, color 0.35s',
              }}
              onMouseEnter={e =>
                hoverStyle(e.currentTarget, { background: C.ivory, color: C.ink })
              }
              onMouseLeave={e =>
                hoverStyle(e.currentTarget, { background: C.gold, color: C.ink })
              }
            >
              Explore Collection
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>

            <button
              onClick={() => navigate('/services')}
              style={{
                fontFamily: T.jost,
                fontSize: '0.7rem',
                fontWeight: 400,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: `rgba(${C.ivoryRgb}, 0.6)`,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: 0,
                transition: 'color 0.3s',
              }}
              onMouseEnter={e =>
                hoverStyle(e.currentTarget, { color: C.ivory })
              }
              onMouseLeave={e =>
                hoverStyle(e.currentTarget, { color: `rgba(${C.ivoryRgb}, 0.6)` })
              }
            >
              Book an Experience
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </button>
          </div>

          {/* Rotated label */}
          <div
            style={{
              position: 'absolute',
              bottom: 36,
              right: 28,
              fontFamily: T.jost,
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              color: C.stone,
              textTransform: 'uppercase',
              writingMode: 'vertical-rl',
              opacity: 0.6,
            }}
          >
            Est. 2024
          </div>
        </div>

        {/* Right panel — image */}
        <div style={{ width: '45%', position: 'relative', overflow: 'hidden' }}>
          <img
            src={PerfumeBottle}
            alt="Luxury fragrance"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transition: 'transform 10s ease',
              transform: isLoaded ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          {/* Warm vignette */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, rgba(26,23,20,0.35) 0%, transparent 55%)`,
            }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MARQUEE TICKER
      ══════════════════════════════════════════════════════════ */}
      <div
        style={{
          background: C.gold,
          padding: '13px 0',
          overflow: 'hidden',
          userSelect: 'none',
        }}
      >
        <div className="nsp-marquee-inner">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: T.jost,
                fontSize: '0.6rem',
                fontWeight: 400,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: C.ink,
                whiteSpace: 'nowrap',
                marginRight: '5rem',
              }}
            >
              Signature Perfumes &nbsp;·&nbsp; Reed Diffusers &nbsp;·&nbsp; Bespoke Perfume Bars &nbsp;·&nbsp; Wedding Experiences &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          THREE PILLARS — what we offer
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 130px) 0 clamp(60px, 8vw, 100px)', background: C.ivory }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(24px, 5vw, 72px)' }}>

          <div style={{ marginBottom: 72 }}>
            <SectionEyebrow label="What We Offer" />
            <p
              style={{
                fontFamily: T.cormorant,
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                fontWeight: 300,
                color: C.stone,
                margin: 0,
                lineHeight: 1.7,
                maxWidth: 480,
              }}
            >
              Three distinct offerings, one unified vision: fragrance as a personal art form.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 2,
              background: C.goldMid,
            }}
          >
            {pillars.map((pillar, i) => (
              <div
                key={i}
                onClick={() => navigate(pillar.link)}
                style={{
                  padding: 'clamp(36px, 4vw, 56px) clamp(28px, 3.5vw, 48px)',
                  background: C.ivory,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'background 0.4s ease',
                }}
                onMouseEnter={e => hoverStyle(e.currentTarget as HTMLDivElement, { background: C.ivoryDim })}
                onMouseLeave={e => hoverStyle(e.currentTarget as HTMLDivElement, { background: C.ivory })}
              >
                {/* Ghost numeral */}
                <div
                  style={{
                    position: 'absolute',
                    top: -24,
                    right: -8,
                    fontFamily: T.playfair,
                    fontSize: 'clamp(6rem, 9vw, 10rem)',
                    fontWeight: 500,
                    color: 'rgba(180,154,110,0.07)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {i + 1}
                </div>

                {/* Step label */}
                <div
                  style={{
                    fontFamily: T.jost,
                    fontSize: '0.6rem',
                    letterSpacing: '0.25em',
                    color: C.gold,
                    marginBottom: 28,
                  }}
                >
                  {pillar.num}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: T.playfair,
                    fontSize: 'clamp(1.5rem, 2vw, 2.1rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: C.ink,
                    margin: '0 0 18px 0',
                    lineHeight: 1.2,
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Gold accent */}
                <div style={{ width: 28, height: 1, background: C.gold, marginBottom: 20 }} />

                {/* Description */}
                <p
                  style={{
                    fontFamily: T.cormorant,
                    fontSize: '1.12rem',
                    fontWeight: 300,
                    color: C.stone,
                    lineHeight: 1.8,
                    margin: '0 0 36px 0',
                  }}
                >
                  {pillar.desc}
                </p>

                {/* Link */}
                <div
                  style={{
                    fontFamily: T.jost,
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: C.ink,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  {pillar.cta}
                  <ArrowRight size={12} strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BRAND STATEMENT — dark, editorial quote
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: C.ink, padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            padding: '0 clamp(24px, 5vw, 72px)',
            display: 'grid',
            gridTemplateColumns: 'clamp(180px, 22%, 280px) 1fr',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Left: label + body */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{ width: 28, height: 1, background: C.gold }} />
              <span
                style={{
                  fontFamily: T.jost,
                  fontSize: '0.6rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: C.gold,
                }}
              >
                Philosophy
              </span>
            </div>
            <p
              style={{
                fontFamily: T.cormorant,
                fontSize: '1.05rem',
                fontWeight: 300,
                color: `rgba(${C.ivoryRgb}, 0.45)`,
                lineHeight: 2,
                margin: 0,
                letterSpacing: '0.03em',
              }}
            >
              Fragrance is the most intimate form of self-expression. At Nspired, we believe every person deserves a scent that is truly, unmistakably their own.
            </p>
          </div>

          {/* Right: large quote */}
          <div>
            <blockquote
              style={{
                fontFamily: T.playfair,
                fontSize: 'clamp(1.8rem, 3vw, 3.4rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: C.ivory,
                lineHeight: 1.35,
                margin: '0 0 40px 0',
                borderLeft: `2px solid ${C.gold}`,
                paddingLeft: 'clamp(24px, 3vw, 48px)',
              }}
            >
              "Every bottle is a story waiting to be worn."
            </blockquote>

            <div style={{ paddingLeft: 'clamp(24px, 3vw, 48px)' }}>
              <Link
                to="/about-us"
                style={{
                  fontFamily: T.jost,
                  fontSize: '0.65rem',
                  fontWeight: 400,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: C.gold,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  borderBottom: `1px solid rgba(180,154,110,0.35)`,
                  paddingBottom: 4,
                  transition: 'border-color 0.3s, color 0.3s',
                }}
              >
                Discover Our Story
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURED PRODUCTS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 130px) 0', background: '#ede8de' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(24px, 5vw, 72px)' }}>

          {/* Header row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 72,
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            <div>
              <SectionEyebrow label="The Collection" />
              <h2
                style={{
                  fontFamily: T.playfair,
                  fontSize: 'clamp(2rem, 2.8vw, 3.2rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: C.ink,
                  margin: 0,
                }}
              >
                Signature Fragrances
              </h2>
            </div>

            <button
              onClick={() => navigate('/shop')}
              style={{
                fontFamily: T.jost,
                fontSize: '0.65rem',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.stone,
                background: 'transparent',
                border: `1px solid rgba(138,126,114,0.4)`,
                padding: '13px 30px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.3s',
              }}
              onMouseEnter={e =>
                hoverStyle(e.currentTarget, { borderColor: C.ink, color: C.ink })
              }
              onMouseLeave={e =>
                hoverStyle(e.currentTarget, { borderColor: 'rgba(138,126,114,0.4)', color: C.stone })
              }
            >
              View All
              <ArrowRight size={12} strokeWidth={1.5} />
            </button>
          </div>

          {/* Product grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'clamp(20px, 3vw, 40px)',
            }}
          >
            {featuredProducts.map((product, i) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                style={{ cursor: 'pointer' }}
              >
                {/* Image frame */}
                <div
                  style={{
                    aspectRatio: '3/4',
                    background: `linear-gradient(150deg, #e0d9cf, #ccc3b4)`,
                    overflow: 'hidden',
                    marginBottom: 22,
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      fontFamily: T.jost,
                      fontSize: '0.58rem',
                      letterSpacing: '0.2em',
                      color: C.stone,
                      zIndex: 2,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: T.playfair,
                        fontSize: '1.25rem',
                        fontWeight: 400,
                        fontStyle: 'italic',
                        color: C.ink,
                        margin: '0 0 6px 0',
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: T.jost,
                        fontSize: '0.65rem',
                        fontWeight: 300,
                        letterSpacing: '0.12em',
                        color: C.stone,
                        margin: 0,
                        textTransform: 'uppercase',
                      }}
                    >
                      {product.type} · {product.scent}
                    </p>
                  </div>
                  <div
                    style={{
                      fontFamily: T.cormorant,
                      fontSize: '1.2rem',
                      fontWeight: 400,
                      color: C.ink,
                      paddingTop: 2,
                    }}
                  >
                    £{product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BESPOKE PROCESS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 130px) 0', background: C.ivory }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(24px, 5vw, 72px)' }}>

          <div style={{ marginBottom: 80 }}>
            <SectionEyebrow label="The Bespoke Process" />
            <h2
              style={{
                fontFamily: T.playfair,
                fontSize: 'clamp(2rem, 2.8vw, 3.2rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: C.ink,
                margin: 0,
              }}
            >
              From Vision to Bottle
            </h2>
          </div>

          {/* Steps grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 1,
              background: C.goldMid,
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 40px)',
                  background: C.ivory,
                }}
              >
                <div
                  style={{
                    fontFamily: T.jost,
                    fontSize: '0.6rem',
                    letterSpacing: '0.25em',
                    color: C.gold,
                    marginBottom: 24,
                  }}
                >
                  {step.num}
                </div>
                <h4
                  style={{
                    fontFamily: T.playfair,
                    fontSize: 'clamp(1.2rem, 1.6vw, 1.5rem)',
                    fontWeight: 400,
                    color: C.ink,
                    margin: '0 0 16px 0',
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: T.cormorant,
                    fontSize: '1.05rem',
                    fontWeight: 300,
                    color: C.stone,
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TESTIMONIALS — dark, centred hero quote + two smaller
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: C.ink, padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 clamp(24px, 5vw, 72px)', textAlign: 'center' }}>

          {/* Large decorative quote mark */}
          <div
            style={{
              fontFamily: T.playfair,
              fontSize: 'clamp(5rem, 10vw, 9rem)',
              fontWeight: 400,
              color: C.gold,
              opacity: 0.18,
              lineHeight: 0.55,
              marginBottom: 48,
            }}
          >
            "
          </div>

          {/* Hero quote */}
          <blockquote
            style={{
              fontFamily: T.playfair,
              fontSize: 'clamp(1.4rem, 2.2vw, 2.3rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: C.ivory,
              lineHeight: 1.5,
              margin: '0 0 40px 0',
            }}
          >
            {testimonials[0].quote}
          </blockquote>

          <div style={{ width: 40, height: 1, background: C.gold, margin: '0 auto 20px' }} />

          <div
            style={{
              fontFamily: T.jost,
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: C.gold,
            }}
          >
            {testimonials[0].author}
          </div>
          <div
            style={{
              fontFamily: T.cormorant,
              fontSize: '0.95rem',
              fontStyle: 'italic',
              color: `rgba(${C.ivoryRgb}, 0.4)`,
              marginTop: 6,
            }}
          >
            {testimonials[0].role}
          </div>

          {/* Two secondary quotes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'clamp(20px, 3vw, 40px)',
              marginTop: 80,
              textAlign: 'left',
            }}
          >
            {testimonials.slice(1).map((t, i) => (
              <div
                key={i}
                style={{
                  padding: 'clamp(28px, 3vw, 40px)',
                  border: `1px solid rgba(180,154,110,0.14)`,
                }}
              >
                <p
                  style={{
                    fontFamily: T.cormorant,
                    fontSize: '1.08rem',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: `rgba(${C.ivoryRgb}, 0.6)`,
                    lineHeight: 1.85,
                    margin: '0 0 24px 0',
                  }}
                >
                  "{t.quote}"
                </p>
                <div
                  style={{
                    fontFamily: T.jost,
                    fontSize: '0.62rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: C.gold,
                  }}
                >
                  {t.author}
                </div>
                <div
                  style={{
                    fontFamily: T.cormorant,
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    color: `rgba(${C.ivoryRgb}, 0.3)`,
                    marginTop: 4,
                  }}
                >
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CLOSING CTA
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: C.ivory, padding: 'clamp(100px, 12vw, 180px) 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 clamp(24px, 5vw, 72px)' }}>

          <SectionEyebrow label="Begin Your Journey" align="center" />

          <h2
            style={{
              fontFamily: T.playfair,
              fontSize: 'clamp(2.5rem, 5vw, 5.2rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: C.ink,
              lineHeight: 1.12,
              margin: '0 0 32px 0',
            }}
          >
            Your Signature<br />Awaits
          </h2>

          <p
            style={{
              fontFamily: T.cormorant,
              fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
              fontWeight: 300,
              color: C.stone,
              lineHeight: 1.85,
              margin: '0 0 56px 0',
            }}
          >
            Whether you seek a signature scent, an elevated home, or an unforgettable event experience — we are here to craft it with you.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 'clamp(16px, 2vw, 28px)',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => navigate('/shop')}
              style={{
                fontFamily: T.jost,
                fontSize: '0.7rem',
                fontWeight: 400,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: C.ivory,
                background: C.ink,
                border: 'none',
                padding: '18px 52px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                transition: 'background 0.35s',
              }}
              onMouseEnter={e => hoverStyle(e.currentTarget, { background: C.gold })}
              onMouseLeave={e => hoverStyle(e.currentTarget, { background: C.ink })}
            >
              Shop Now
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>

            <button
              onClick={() => navigate('/contact')}
              style={{
                fontFamily: T.jost,
                fontSize: '0.7rem',
                fontWeight: 400,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: C.stone,
                background: 'transparent',
                border: `1px solid rgba(138,126,114,0.38)`,
                padding: '18px 52px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e =>
                hoverStyle(e.currentTarget, { borderColor: C.ink, color: C.ink })
              }
              onMouseLeave={e =>
                hoverStyle(e.currentTarget, { borderColor: 'rgba(138,126,114,0.38)', color: C.stone })
              }
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
