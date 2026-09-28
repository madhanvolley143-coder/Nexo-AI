import React, { useState } from 'react';
import { HARDWARE_ITEMS } from '../data/nexoData';
import { Cpu, Maximize2, Layers } from 'lucide-react';

export default function HardwareSection({ onOpenImageModal }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'COMPUTE', 'USER INTERFACE', 'CONNECTIVITY', 'DOCUMENT SERVICE', 'POWER', 'STORAGE'];

  const filteredItems = selectedCategory === 'ALL'
    ? HARDWARE_ITEMS
    : HARDWARE_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="hardware" className="section-py" style={{ background: '#060B15', position: 'relative' }}>
      <div className="ambient-cyan-glow" style={{ top: '15%', left: '10%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              borderRadius: '999px',
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              marginBottom: '16px'
            }}
          >
            <Cpu size={14} color="#00F2FE" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#BAE6FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Field-Tested Peripherals
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
            Hardware <span className="text-gradient-cyan">Ecosystem</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            Real physical edge components powering the NEXO Smart Kiosk assisted service point.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  border: isSelected ? '1px solid #00F2FE' : '1px solid rgba(56, 189, 248, 0.2)',
                  background: isSelected ? 'rgba(0, 242, 254, 0.18)' : 'rgba(15, 23, 42, 0.7)',
                  color: isSelected ? '#00F2FE' : '#94A3B8',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Hardware Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Hardware Image Container */}
              <div
                style={{
                  height: '220px',
                  background: 'rgba(6, 10, 19, 0.95)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  cursor: 'pointer'
                }}
                onClick={() => onOpenImageModal && onOpenImageModal(item.image, item.name)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />

                {/* Category Badge on top left */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(6, 10, 19, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: '#38BDF8',
                    letterSpacing: '0.04em'
                  }}
                >
                  {item.category}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    background: 'rgba(0,0,0,0.6)',
                    padding: '4px',
                    borderRadius: '6px',
                    color: '#BAE6FD'
                  }}
                >
                  <Maximize2 size={13} />
                </div>
              </div>

              {/* Hardware Card Body */}
              <div style={{ padding: '22px' }}>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#F8FAFC',
                    marginBottom: '4px'
                  }}
                >
                  {item.name}
                </h3>

                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#00F2FE',
                    marginBottom: '10px'
                  }}
                >
                  Role: {item.role}
                </div>

                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#94A3B8',
                    lineHeight: 1.55
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
