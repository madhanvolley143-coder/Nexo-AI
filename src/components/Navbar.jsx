import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, BRAND } from '../data/nexoData';
import { Menu, X, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(6, 10, 19, 0.92)'
          : 'rgba(6, 10, 19, 0.65)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(56, 189, 248, 0.18)'
          : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
        padding: isScrolled ? '12px 0' : '18px 0'
      }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#FFFFFF'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00F2FE 0%, #0284C7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)'
            }}
          >
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#04101A' }}>N</span>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                NEXO <span style={{ color: '#00F2FE' }}>AI</span>
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '999px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#34D399',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  letterSpacing: '0.04em'
                }}
              >
                SIH 2026
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '-2px' }}>
              Cooperative AI Assistant
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none'
          }}
          className="desktop-nav"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(15, 23, 42, 0.6)',
              padding: '4px 6px',
              borderRadius: '9999px',
              border: '1px solid rgba(56, 189, 248, 0.15)'
            }}
          >
            {NAVIGATION_LINKS.slice(0, 9).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  padding: '6px 12px',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  color: '#94A3B8',
                  textDecoration: 'none',
                  borderRadius: '9999px',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94A3B8';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.name}
              </a>
            ))}

            <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.12)', margin: '0 4px' }} />

            <a
              href="#team"
              onClick={(e) => { e.preventDefault(); handleNavClick('#team'); }}
              style={{
                padding: '6px 12px',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#38BDF8',
                textDecoration: 'none',
                borderRadius: '9999px'
              }}
            >
              Team
            </a>
            <a
              href="#mentors"
              onClick={(e) => { e.preventDefault(); handleNavClick('#mentors'); }}
              style={{
                padding: '6px 12px',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#38BDF8',
                textDecoration: 'none',
                borderRadius: '9999px'
              }}
            >
              Mentors
            </a>
          </div>
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="#kiosk"
            onClick={(e) => { e.preventDefault(); handleNavClick('#kiosk'); }}
            className="btn-primary"
            style={{
              padding: '9px 18px',
              fontSize: '0.86rem'
            }}
          >
            <Sparkles size={15} />
            <span>Explore NEXO</span>
          </a>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              color: '#F8FAFC',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(6, 10, 19, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
            padding: '20px 24px',
            maxHeight: '80vh',
            overflowY: 'auto',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  color: '#E2E8F0',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} color="#38BDF8" />
              </a>
            ))}
            <div style={{ marginTop: '12px' }}>
              <a
                href="#kiosk"
                onClick={(e) => { e.preventDefault(); handleNavClick('#kiosk'); }}
                className="btn-primary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Explore NEXO Smart Kiosk
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CSS helper for desktop nav visibility */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
