import React from 'react';
import { MENTORS } from '../data/nexoData';
import { Award, Compass, School, CheckCircle2 } from 'lucide-react';

export default function MentorsSection() {
  return (
    <section id="mentors" className="section-py" style={{ background: '#050914', position: 'relative' }}>
      <div className="ambient-cyan-glow" style={{ top: '25%', right: '20%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              borderRadius: '999px',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              marginBottom: '16px'
            }}
          >
            <Award size={14} color="#F59E0B" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FDE68A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Institutional Guidance
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '16px'
            }}
          >
            Mentorship & <span className="text-gradient-gold">Leadership</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            Guiding NEXO AI through technical competition strategy, enterprise-grade architecture, and human-centered design for rural accessibility.
          </p>
        </div>

        {/* 2 Mentor Cards Grid: 2 columns desktop, 1 column mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px',
            maxWidth: '1020px',
            margin: '0 auto'
          }}
        >
          {MENTORS.map((mentor) => (
            <div
              key={mentor.name}
              className="glass-panel glass-panel-hover"
              style={{
                padding: '36px 32px',
                borderRadius: '24px',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                background: 'linear-gradient(135deg, rgba(20, 24, 38, 0.85) 0%, rgba(12, 16, 28, 0.95) 100%)',
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.6)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle Golden Crown Glow on top border */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #F59E0B, #00F2FE)'
                }}
              />

              {/* Real Circular Portrait with Gold Accent Ring */}
              <div
                style={{
                  position: 'relative',
                  width: '140px',
                  height: '140px',
                  marginBottom: '24px'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '-4px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 60%, #00F2FE 100%)',
                    opacity: 0.9,
                    filter: 'blur(2px)'
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #060A13',
                    background: '#0B132B'
                  }}
                >
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '2px',
                    right: '2px',
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: '#060A13',
                    border: '2px solid #F59E0B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F59E0B',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.7)'
                  }}
                >
                  <Award size={18} />
                </div>
              </div>

              {/* Mentor Name */}
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '8px'
                }}
              >
                {mentor.name}
              </h3>

              {/* Mentor Role Designation */}
              <div
                style={{
                  fontSize: '0.94rem',
                  fontWeight: 700,
                  color: '#FBBF24',
                  marginBottom: '8px',
                  lineHeight: 1.35
                }}
              >
                {mentor.role}
              </div>

              {/* Institution */}
              <div
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: '#94A3B8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '20px'
                }}
              >
                <School size={15} color="#38BDF8" />
                <span>{mentor.institution}</span>
              </div>

              {/* Mentor Impact Quote / Description */}
              <p
                style={{
                  fontSize: '0.88rem',
                  color: '#CBD5E1',
                  lineHeight: 1.6,
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {mentor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
