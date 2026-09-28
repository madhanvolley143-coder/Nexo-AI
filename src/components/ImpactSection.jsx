import React from 'react';
import { IMPACT_METRICS } from '../data/nexoData';
import { ShieldCheck, HeartHandshake, Zap, MapPin, Sparkles } from 'lucide-react';

const IMPACT_ICONS = {
  'ACCESS': ShieldCheck,
  'INCLUSION': HeartHandshake,
  'EFFICIENCY': Zap,
  'REACH': MapPin
};

export default function ImpactSection() {
  return (
    <section className="section-py" style={{ background: '#070D1B', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              borderRadius: '999px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} color="#10B981" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6EE7B7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Societal & Economic Significance
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
            From Information to <span className="text-gradient-emerald">Guided Action</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            Delivering qualitative transformation across four core pillars of rural digital public infrastructure without speculative claims.
          </p>
        </div>

        {/* 4 Impact Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {IMPACT_METRICS.map((metric) => {
            const Icon = IMPACT_ICONS[metric.dimension] || ShieldCheck;

            return (
              <div
                key={metric.dimension}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '32px 24px',
                  borderTop: '3px solid #10B981',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'monospace',
                      fontWeight: 800,
                      color: '#34D399',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    PILLAR: {metric.dimension}
                  </span>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#F8FAFC',
                      marginTop: '6px',
                      marginBottom: '12px',
                      lineHeight: 1.3
                    }}
                  >
                    {metric.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#94A3B8',
                      lineHeight: 1.6
                    }}
                  >
                    {metric.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
