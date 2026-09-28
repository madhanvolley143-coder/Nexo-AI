import React from 'react';
import { INNOVATIONS } from '../data/nexoData';
import { ShieldCheck, Network, Split, Cpu, Volume2, Sparkles, CheckCircle2, Clock, Lightbulb } from 'lucide-react';

const INNOVATION_ICONS = {
  'gov-intel': ShieldCheck,
  'rag-kg': Network,
  'query-routing': Split,
  'hybrid-kiosk': Cpu,
  'voice-ai': Volume2
};

export default function InnovationSection() {
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'IMPLEMENTED':
        return {
          bg: 'rgba(16, 185, 129, 0.12)',
          color: '#34D399',
          border: '1px solid rgba(16, 185, 129, 0.35)',
          icon: CheckCircle2
        };
      case 'IN DEVELOPMENT':
        return {
          bg: 'rgba(245, 158, 11, 0.12)',
          color: '#FBBF24',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          icon: Clock
        };
      case 'PROPOSED':
        return {
          bg: 'rgba(56, 189, 248, 0.12)',
          color: '#38BDF8',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          icon: Lightbulb
        };
      default:
        return {
          bg: 'rgba(148, 163, 184, 0.12)',
          color: '#94A3B8',
          border: '1px solid rgba(148, 163, 184, 0.35)',
          icon: CheckCircle2
        };
    }
  };

  return (
    <section id="features" className="section-py bg-grid" style={{ position: 'relative' }}>
      <div className="ambient-cyan-glow" style={{ top: '15%', right: '10%' }} />
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
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} color="#00F2FE" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#BAE6FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Distinctive Architectural Capabilities
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
            What Makes <span className="text-gradient-cyan">NEXO Different</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            Engineered with deep provenance tracking, hybrid retrieval, and rural infrastructure resilience.
            Every capability is transparently labeled by its verified engineering maturity.
          </p>
        </div>

        {/* 5 Innovation Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {INNOVATIONS.map((item, idx) => {
            const Icon = INNOVATION_ICONS[item.id] || Sparkles;
            const badge = getBadgeStyle(item.status);
            const BadgeIcon = badge.icon;

            return (
              <div
                key={item.id}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Bar with Icon and Strict Status Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(0, 242, 254, 0.1)',
                        border: '1px solid rgba(0, 242, 254, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00F2FE'
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    {/* Verified Status Tag */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        background: badge.bg,
                        color: badge.color,
                        border: badge.border,
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em'
                      }}
                    >
                      <BadgeIcon size={12} />
                      <span>{item.status}</span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#F8FAFC',
                      marginBottom: '10px',
                      lineHeight: 1.3
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      fontWeight: 500,
                      color: '#38BDF8',
                      marginBottom: '14px',
                      lineHeight: 1.5
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.84rem',
                    color: '#94A3B8',
                    lineHeight: 1.55
                  }}
                >
                  <span style={{ color: '#E2E8F0', fontWeight: 600 }}>Technical Approach: </span>
                  {item.details}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
