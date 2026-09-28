import React, { useState } from 'react';
import { USE_CASES } from '../data/nexoData';
import { Sprout, Building2, Users, Briefcase, CheckCircle2, ChevronRight } from 'lucide-react';

const USE_CASE_ICONS = {
  'farmers': Sprout,
  'pacs-members': Building2,
  'rural-citizens': Users,
  'cooperative-staff': Briefcase
};

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(USE_CASES[0].id);

  const activeCase = USE_CASES.find((uc) => uc.id === activeTab) || USE_CASES[0];
  const ActiveIcon = USE_CASE_ICONS[activeCase.id] || Sprout;

  return (
    <section id="use-cases" className="section-py bg-grid" style={{ position: 'relative' }}>
      <div className="ambient-emerald-glow" style={{ top: '25%', left: '15%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
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
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6EE7B7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Target Beneficiaries & Ecosystem
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
            Where NEXO <span className="text-gradient-emerald">Creates Value</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            Empowering the entire rural cooperative ecosystem — from grassroots cultivators to branch cooperative officials.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            marginBottom: '36px'
          }}
        >
          {USE_CASES.map((uc) => {
            const Icon = USE_CASE_ICONS[uc.id] || Sprout;
            const isSelected = activeTab === uc.id;

            return (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className="glass-panel"
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  borderColor: isSelected ? '#10B981' : 'rgba(56, 189, 248, 0.15)',
                  background: isSelected ? 'rgba(16, 185, 129, 0.14)' : 'rgba(14, 23, 42, 0.7)',
                  boxShadow: isSelected ? '0 0 20px rgba(16, 185, 129, 0.25)' : 'none',
                  transition: 'all 0.25s ease',
                  textAlign: 'left'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: isSelected ? '#10B981' : 'rgba(56, 189, 248, 0.1)',
                    color: isSelected ? '#04101A' : '#38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF' }}>
                    {uc.target}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>
                    {uc.headline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Use Case Deep Dive Card */}
        <div
          className="glass-panel"
          style={{
            padding: '36px 32px',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.92) 0%, rgba(9, 18, 32, 0.98) 100%)',
            borderRadius: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10B981'
              }}
            >
              <ActiveIcon size={24} />
            </div>

            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#34D399', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                PRIMARY USER SEGMENT
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>
                {activeCase.target} — {activeCase.headline}
              </h3>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginTop: '24px'
            }}
          >
            {activeCase.examples.map((ex, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(6, 10, 19, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                  {ex}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
