import React from 'react';
import { BRAND, NAVIGATION_LINKS } from '../data/nexoData';
import { Sparkles, Shield, Heart, Github, ExternalLink, School } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#04070F',
        borderTop: '1px solid rgba(56, 189, 248, 0.15)',
        paddingTop: '70px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}
        >
          {/* Col 1: Brand Info */}
          <div style={{ maxWidth: '360px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #00F2FE 0%, #0284C7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#04101A',
                  fontWeight: 800,
                  fontSize: '1rem'
                }}
              >
                N
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                NEXO <span style={{ color: '#00F2FE' }}>AI</span>
              </span>
            </div>

            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#38BDF8', marginBottom: '10px' }}>
              {BRAND.tagline}
            </div>

            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#E2E8F0', lineHeight: 1.4, marginBottom: '12px' }}>
              "{BRAND.statement}"
            </p>

            <p style={{ fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.55 }}>
              A multidisciplinary research and engineering initiative bridging rural cooperative societies, agricultural entitlements, and citizens through grounded AI.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Core Architecture
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }} style={{ color: '#94A3B8', fontSize: '0.85rem', textDecoration: 'none' }}>
                  Project Overview
                </a>
              </li>
              <li>
                <a href="#architecture" onClick={(e) => { e.preventDefault(); scrollTo('#architecture'); }} style={{ color: '#94A3B8', fontSize: '0.85rem', textDecoration: 'none' }}>
                  System Architecture
                </a>
              </li>
              <li>
                <a href="#data-platform" onClick={(e) => { e.preventDefault(); scrollTo('#data-platform'); }} style={{ color: '#94A3B8', fontSize: '0.85rem', textDecoration: 'none' }}>
                  NEXO Data Platform
                </a>
              </li>
              <li>
                <a href="#kiosk" onClick={(e) => { e.preventDefault(); scrollTo('#kiosk'); }} style={{ color: '#94A3B8', fontSize: '0.85rem', textDecoration: 'none' }}>
                  NEXO Smart Kiosk
                </a>
              </li>
              <li>
                <a href="#hardware" onClick={(e) => { e.preventDefault(); scrollTo('#hardware'); }} style={{ color: '#94A3B8', fontSize: '0.85rem', textDecoration: 'none' }}>
                  Hardware Ecosystem
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: People & Innovation */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              People & Organization
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="#team" onClick={(e) => { e.preventDefault(); scrollTo('#team'); }} style={{ color: '#94A3B8', fontSize: '0.85rem', textDecoration: 'none' }}>
                  Engineering Team
                </a>
              </li>
              <li>
                <a href="#mentors" onClick={(e) => { e.preventDefault(); scrollTo('#mentors'); }} style={{ color: '#94A3B8', fontSize: '0.85rem', textDecoration: 'none' }}>
                  Mentorship & Leadership
                </a>
              </li>
              <li>
                <a href="#use-cases" onClick={(e) => { e.preventDefault(); scrollTo('#use-cases'); }} style={{ color: '#94A3B8', fontSize: '0.85rem', textDecoration: 'none' }}>
                  Ecosystem Use Cases
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Affiliation */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Affiliation
            </h4>

            <div
              style={{
                padding: '16px',
                borderRadius: '12px',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                marginBottom: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <School size={16} color="#00F2FE" />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Rathinam Technical Campus
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.4 }}>
                Department of Technical Competitions and Hackathons & School of Design and Innovation
              </p>
            </div>

            <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
              Developed for Smart India Hackathon 2026 (SIH 2026) under Team Innotrix.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8rem',
            color: '#64748B'
          }}
        >
          <div>
            © 2026 NEXO AI Project. Rathinam Technical Campus. All verified assets and official project specifications preserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Privacy & Ethics in AI</span>
            <span>•</span>
            <span>Official Government Data Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
