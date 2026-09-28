import React from 'react';
import { BRAND, WORKFLOW_HERO_STEPS } from '../data/nexoData';
import { ArrowRight, Layers, Sparkles, CheckCircle2, Shield, ShieldCheck, Mic, Globe2, Cpu } from 'lucide-react';

export default function Hero({ onOpenArchitectureModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '150px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
      className="bg-grid"
    >
      {/* Ambient background glows */}
      <div className="ambient-cyan-glow" style={{ top: '10%', left: '15%' }} />
      <div className="ambient-emerald-glow" style={{ top: '25%', right: '10%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          {/* Top Tag Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              marginBottom: '24px'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00F2FE',
                boxShadow: '0 0 10px #00F2FE'
              }}
            />
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#BAE6FD', letterSpacing: '0.04em' }}>
              SMART INDIA HACKATHON 2026 INNOVATION
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Rathinam Technical Campus</span>
          </div>

          {/* Main Title & Subtitle */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: '16px'
            }}
          >
            <span className="text-gradient-cyan">NEXO AI</span>
          </h1>

          <div
            style={{
              fontSize: 'clamp(1.15rem, 2.5vw, 1.6rem)',
              fontWeight: 600,
              color: '#38BDF8',
              marginBottom: '20px',
              letterSpacing: '-0.01em'
            }}
          >
            {BRAND.tagline}
          </div>

          {/* Main Statement */}
          <p
            style={{
              fontSize: 'clamp(1.25rem, 2.8vw, 1.85rem)',
              fontWeight: 700,
              color: '#F8FAFC',
              lineHeight: 1.35,
              maxWidth: '750px',
              margin: '0 auto 20px auto'
            }}
          >
            "{BRAND.statement}"
          </p>

          {/* Supporting Text */}
          <p
            style={{
              fontSize: '1.05rem',
              color: '#94A3B8',
              maxWidth: '680px',
              margin: '0 auto 36px auto',
              lineHeight: 1.65
            }}
          >
            {BRAND.description}
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '60px'
            }}
          >
            <button
              onClick={() => scrollTo('kiosk')}
              className="btn-primary"
              style={{ fontSize: '1.05rem', padding: '14px 28px' }}
            >
              <Sparkles size={18} />
              <span>Explore NEXO</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                if (onOpenArchitectureModal) onOpenArchitectureModal();
                else scrollTo('architecture');
              }}
              className="btn-secondary"
              style={{ fontSize: '1.05rem', padding: '14px 26px' }}
            >
              <Layers size={18} color="#38BDF8" />
              <span>View Architecture</span>
            </button>
          </div>
        </div>

        {/* Below Hero: Linear Workflow Banner with Animated Flow Lines */}
        <div style={{ marginTop: '32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#38BDF8',
                fontWeight: 700
              }}
            >
              The Citizen Guided Flow
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '12px',
              position: 'relative'
            }}
          >
            {WORKFLOW_HERO_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '18px 16px',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#00F2FE',
                    fontFamily: 'monospace',
                    marginBottom: '4px'
                  }}
                >
                  0{idx + 1}
                </div>
                <div
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#F8FAFC',
                    marginBottom: '4px'
                  }}
                >
                  {item.step}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.3 }}>
                  {item.desc}
                </div>
                {idx < WORKFLOW_HERO_STEPS.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '-6px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'rgba(56, 189, 248, 0.4)',
                      zIndex: 2,
                      display: 'none'
                    }}
                    className="flow-arrow"
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
