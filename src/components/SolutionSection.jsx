import React, { useState } from 'react';
import { SOLUTION_STEPS } from '../data/nexoData';
import {
  MessageSquare,
  Brain,
  ShieldCheck,
  Search,
  Database,
  Printer,
  FileCheck2,
  Activity,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const STEP_ICONS = {
  'ASK': MessageSquare,
  'UNDERSTAND': Brain,
  'CHECK': ShieldCheck,
  'DISCOVER': Search,
  'RETRIEVE': Database,
  'PRINT': Printer,
  'APPLY': FileCheck2,
  'TRACK': Activity
};

export default function SolutionSection() {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    { title: "Multilingual Interaction", desc: "Speak or type in Tamil, English, Hindi, and regional dialects." },
    { title: "Verified Official Info", desc: "Zero hallucination grounded strictly on ministry circulars." },
    { title: "Intelligent Document Guidance", desc: "Pre-application checklist validation preventing wasted visits." },
    { title: "Scheme Discovery", desc: "Graph-based association revealing related subsidies & grants." },
    { title: "Guided Service Access", desc: "Step-by-step assistance converting awareness into real submission." },
    { title: "Kiosk-Based Assistance", desc: "Physical touch & voice kiosk deployed at village PACS centers." }
  ];

  return (
    <section id="solution" className="section-py" style={{ position: 'relative', background: '#090F1D' }}>
      <div className="ambient-emerald-glow" style={{ top: '20%', left: '5%' }} />
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
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
              The NEXO Transformation
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
            One Platform. <span className="text-gradient-emerald">One Guided Journey.</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            Transforming chaotic, fragmented welfare discovery into an end-to-end guided assistance pipeline.
          </p>
        </div>

        {/* 6 Key Pillars Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            marginBottom: '64px'
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="glass-panel"
              style={{
                padding: '20px',
                borderLeft: '3px solid #10B981',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#10B981" />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F1F5F9' }}>
                  {pillar.title}
                </h4>
              </div>
              <p style={{ fontSize: '0.84rem', color: '#94A3B8', paddingLeft: '24px' }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 8-Step Interactive Pipeline Flow */}
        <div style={{ marginBottom: '24px' }}>
          <h3
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#F8FAFC',
              marginBottom: '20px',
              textAlign: 'center'
            }}
          >
            The 8-Stage Guided Workflow
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px'
            }}
          >
            {SOLUTION_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[step.action] || Activity;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.action}
                  onClick={() => setActiveStep(idx)}
                  className="glass-panel"
                  style={{
                    padding: '16px 12px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    borderColor: isSelected ? '#00F2FE' : 'rgba(56, 189, 248, 0.15)',
                    background: isSelected ? 'rgba(0, 242, 254, 0.12)' : 'rgba(14, 23, 42, 0.65)',
                    boxShadow: isSelected ? '0 0 20px rgba(0, 242, 254, 0.25)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: isSelected ? '#00F2FE' : 'rgba(56, 189, 248, 0.1)',
                      color: isSelected ? '#04101A' : '#38BDF8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 8px auto'
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#38BDF8', fontWeight: 700, fontFamily: 'monospace' }}>
                    STAGE {step.step}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>
                    {step.action}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed Card */}
        <div
          className="glass-panel"
          style={{
            padding: '32px',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.9) 0%, rgba(10, 20, 36, 0.95) 100%)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  fontFamily: 'monospace',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  background: 'rgba(0, 242, 254, 0.15)',
                  color: '#00F2FE'
                }}
              >
                STAGE {SOLUTION_STEPS[activeStep].step} OF 08
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#38BDF8' }}>
                {SOLUTION_STEPS[activeStep].title}
              </span>
            </div>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
              {SOLUTION_STEPS[activeStep].action}: {SOLUTION_STEPS[activeStep].title}
            </h4>
            <p style={{ fontSize: '0.96rem', color: '#CBD5E1', lineHeight: 1.6 }}>
              {SOLUTION_STEPS[activeStep].desc}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : SOLUTION_STEPS.length - 1))}
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              Previous Stage
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < SOLUTION_STEPS.length - 1 ? prev + 1 : 0))}
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
