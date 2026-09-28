import React, { useState } from 'react';
import { TECH_STACK } from '../data/nexoData';
import { Layers, CheckCircle2, Clock, Lightbulb, Code2 } from 'lucide-react';

export default function TechStackSection() {
  const [activeTier, setActiveTier] = useState('ALL');

  const tiers = [
    { id: 'ALL', label: 'Complete Ecosystem' },
    { id: 'CURRENT', label: 'Current / Implemented' },
    { id: 'DEVELOPMENT', label: 'Active Development' },
    { id: 'PLANNED', label: 'Planned / Roadmap' }
  ];

  return (
    <section className="section-py bg-grid" style={{ position: 'relative' }}>
      <div className="ambient-cyan-glow" style={{ top: '20%', right: '10%' }} />

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
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              marginBottom: '16px'
            }}
          >
            <Code2 size={14} color="#38BDF8" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#BAE6FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Full-Stack Architecture
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
            Technology <span className="text-gradient-cyan">Stack</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            Transparently organized across current production foundations, active AI modules in progress, and planned edge infrastructure.
          </p>
        </div>

        {/* Tier 1: Current Implemented */}
        {(activeTier === 'ALL' || activeTier === 'CURRENT') && (
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#34D399',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em'
                }}
              >
                CURRENT / IMPLEMENTED FOUNDATION
              </span>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                Active in repository and operational pipelines
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px'
              }}
            >
              {TECH_STACK.current.map((t) => (
                <div
                  key={t.name}
                  className="glass-panel"
                  style={{
                    padding: '20px',
                    borderLeft: '3px solid #10B981',
                    background: 'rgba(14, 23, 42, 0.65)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>{t.name}</h4>
                    <span style={{ fontSize: '0.68rem', color: '#34D399', fontFamily: 'monospace' }}>ACTIVE</span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#38BDF8', fontWeight: 600, marginBottom: '6px' }}>{t.category}</div>
                  <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tier 2: In Development */}
        {(activeTier === 'ALL' || activeTier === 'DEVELOPMENT') && (
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#FBBF24',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em'
                }}
              >
                IN ACTIVE DEVELOPMENT
              </span>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                AI models, vector indexing, and graph traversal algorithms
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px'
              }}
            >
              {TECH_STACK.development.map((t) => (
                <div
                  key={t.name}
                  className="glass-panel"
                  style={{
                    padding: '20px',
                    borderLeft: '3px solid #F59E0B',
                    background: 'rgba(14, 23, 42, 0.65)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>{t.name}</h4>
                    <span style={{ fontSize: '0.68rem', color: '#FBBF24', fontFamily: 'monospace' }}>DEVELOPING</span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#FCD34D', fontWeight: 600, marginBottom: '6px' }}>{t.category}</div>
                  <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tier 3: Planned Roadmap */}
        {(activeTier === 'ALL' || activeTier === 'PLANNED') && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38BDF8',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em'
                }}
              >
                PLANNED / ROADMAP TARGETS
              </span>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                Offline quantized models and national voice infrastructure
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px'
              }}
            >
              {TECH_STACK.planned.map((t) => (
                <div
                  key={t.name}
                  className="glass-panel"
                  style={{
                    padding: '20px',
                    borderLeft: '3px solid #00F2FE',
                    background: 'rgba(14, 23, 42, 0.65)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>{t.name}</h4>
                    <span style={{ fontSize: '0.68rem', color: '#38BDF8', fontFamily: 'monospace' }}>PLANNED</span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#BAE6FD', fontWeight: 600, marginBottom: '6px' }}>{t.category}</div>
                  <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
