import React from 'react';
import { DATA_PLATFORM_PIPELINE, DATA_PLATFORM_CAPABILITIES } from '../data/nexoData';
import { Database, CheckCircle2, ShieldCheck, ArrowRight, Layers, FileCode2, Sparkles } from 'lucide-react';

export default function DataPlatformSection() {
  return (
    <section id="data-platform" className="section-py bg-grid" style={{ position: 'relative' }}>
      <div className="ambient-cyan-glow" style={{ top: '25%', right: '5%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
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
            <Database size={14} color="#10B981" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6EE7B7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Trusted Knowledge Foundation
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
            NEXO <span className="text-gradient-cyan">Data Platform</span>
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#F8FAFC', fontWeight: 600, marginBottom: '10px' }}>
            "NEXO Data Platform forms the trusted data foundation for collecting, verifying, storing and processing official government information."
          </p>

          <p style={{ fontSize: '0.95rem', color: '#94A3B8' }}>
            All downstream AI answers originate from an immutable, auditable document processing pipeline that eliminates unauthorized or unverified sources.
          </p>
        </div>

        {/* Current Implemented Foundation Callout Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '28px',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(14, 23, 42, 0.8) 100%)',
            marginBottom: '48px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span
              style={{
                padding: '4px 10px',
                borderRadius: '999px',
                background: 'rgba(16, 185, 129, 0.2)',
                color: '#34D399',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.05em'
              }}
            >
              CURRENTLY IMPLEMENTED & ACTIVE
            </span>
            <span style={{ fontSize: '0.86rem', color: '#CBD5E1' }}>
              Core Data Engineering Modules Verified in Production
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px'
            }}
          >
            {DATA_PLATFORM_CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  background: 'rgba(6, 10, 19, 0.6)',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F1F5F9' }}>
                    {cap.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
                    {cap.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 12-Step Ingestion & Refinement Pipeline */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF' }}>
              The 12-Stage Data Ingestion & Refinement Pipeline
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '4px' }}>
              From official government gazettes to structured knowledge graphs
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px'
            }}
          >
            {DATA_PLATFORM_PIPELINE.map((stage) => {
              const isAiLayer = stage.step >= 11;
              return (
                <div
                  key={stage.step}
                  className="glass-panel"
                  style={{
                    padding: '20px',
                    position: 'relative',
                    borderColor: isAiLayer ? 'rgba(0, 242, 254, 0.35)' : 'rgba(56, 189, 248, 0.15)',
                    background: isAiLayer ? 'rgba(0, 242, 254, 0.05)' : 'rgba(14, 23, 42, 0.65)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        color: isAiLayer ? '#00F2FE' : '#38BDF8'
                      }}
                    >
                      STEP {stage.step < 10 ? `0${stage.step}` : stage.step}
                    </span>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '2px 8px',
                        borderRadius: '999px',
                        background: isAiLayer ? 'rgba(0, 242, 254, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                        color: isAiLayer ? '#38BDF8' : '#34D399',
                        border: isAiLayer ? '1px solid rgba(0, 242, 254, 0.25)' : '1px solid rgba(16, 185, 129, 0.25)'
                      }}
                    >
                      {isAiLayer ? 'NEXT AI LAYER' : 'ACTIVE PIPELINE'}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '6px' }}>
                    {stage.name}
                  </h4>

                  <p style={{ fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.45 }}>
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
