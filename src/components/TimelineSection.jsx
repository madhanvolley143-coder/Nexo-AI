import React from 'react';
import { PROJECT_TIMELINE } from '../data/nexoData';
import { Milestone, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section className="section-py bg-grid" style={{ position: 'relative' }}>
      <div className="ambient-cyan-glow" style={{ top: '25%', right: '15%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
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
            <Milestone size={14} color="#38BDF8" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#BAE6FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Evolution & Milestones
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
            Project <span className="text-gradient-cyan">Journey</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            From field observation of rural cooperative friction to a full-stack AI and hardware prototype.
          </p>
        </div>

        {/* 8-Stage Timeline Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            position: 'relative'
          }}
        >
          {PROJECT_TIMELINE.map((item, idx) => {
            const isCompleted = idx < 4;
            const isCurrent = idx === 4 || idx === 5 || idx === 6;

            return (
              <div
                key={item.title}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: isCurrent
                    ? '3px solid #00F2FE'
                    : isCompleted
                    ? '3px solid #10B981'
                    : '3px solid rgba(56, 189, 248, 0.2)',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontWeight: 800,
                        fontSize: '0.74rem',
                        color: isCurrent ? '#00F2FE' : isCompleted ? '#34D399' : '#64748B'
                      }}
                    >
                      {item.phase}
                    </span>

                    <span
                      style={{
                        fontSize: '0.68rem',
                        padding: '2px 8px',
                        borderRadius: '999px',
                        fontWeight: 700,
                        background: isCompleted ? 'rgba(16, 185, 129, 0.15)' : isCurrent ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255,255,255,0.06)',
                        color: isCompleted ? '#34D399' : isCurrent ? '#38BDF8' : '#94A3B8'
                      }}
                    >
                      {item.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.84rem', color: '#94A3B8', lineHeight: 1.55 }}>
                    {item.desc}
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
