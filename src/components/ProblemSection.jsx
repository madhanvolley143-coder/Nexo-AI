import React from 'react';
import { PROBLEMS } from '../data/nexoData';
import {
  FileQuestion,
  Languages,
  AlertTriangle,
  FolderX,
  WifiOff,
  Compass,
  ArrowUpRight
} from 'lucide-react';

const PROBLEM_ICONS = {
  'frag-info': FileQuestion,
  'lang-barriers': Languages,
  'readiness-gaps': AlertTriangle,
  'doc-friction': FolderX,
  'connectivity': WifiOff,
  'limited-discovery': Compass
};

export default function ProblemSection() {
  return (
    <section id="problem" className="section-py bg-grid" style={{ position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              borderRadius: '999px',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              marginBottom: '16px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FCA5A5', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Current System Inefficiencies
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
            The Problem We <span className="text-gradient-cyan">Address</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            Rural citizens, farmers, and cooperative societies face systemic friction when attempting to access verified government schemes and cooperative services.
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {PROBLEMS.map((prob) => {
            const Icon = PROBLEM_ICONS[prob.id] || FileQuestion;
            return (
              <div
                key={prob.id}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent top border strip */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.6), transparent)'
                  }}
                />

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'stretch', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#F87171'
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: 'rgba(255, 255, 255, 0.25)'
                      }}
                    >
                      {prob.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#F8FAFC',
                      marginBottom: '12px',
                      lineHeight: 1.3
                    }}
                  >
                    {prob.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#94A3B8',
                      lineHeight: 1.6,
                      marginBottom: '20px'
                    }}
                  >
                    {prob.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px'
                  }}
                >
                  <span style={{ color: '#EF4444', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginTop: '2px' }}>
                    Impact:
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#CBD5E1', lineHeight: 1.4 }}>
                    {prob.impact}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
