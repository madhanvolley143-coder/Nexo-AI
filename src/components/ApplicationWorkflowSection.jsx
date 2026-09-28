import React from 'react';
import { APPLICATION_ROADMAP_STEPS } from '../data/nexoData';
import {
  ListChecks,
  UserCheck,
  FileCheck,
  PenTool,
  Eye,
  Send,
  Activity,
  AlertCircle
} from 'lucide-react';

const STEP_ICONS = [
  ListChecks,
  UserCheck,
  FileCheck,
  PenTool,
  Eye,
  Send,
  Activity
];

export default function ApplicationWorkflowSection() {
  return (
    <section className="section-py" style={{ background: '#070D1B', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              borderRadius: '999px',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              marginBottom: '16px'
            }}
          >
            <AlertCircle size={14} color="#F59E0B" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FCD34D', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Actionable Civic Execution
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
            From Information to <span className="text-gradient-cyan">Action</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            Closing the loop from merely knowing about a welfare program to successfully submitting and tracking the application.
          </p>

          {/* Explicit Development Roadmap Callout */}
          <div style={{ marginTop: '16px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#FBBF24',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                padding: '4px 14px',
                borderRadius: '999px'
              }}
            >
              AI-ASSISTED WORKFLOW / DEVELOPMENT ROADMAP
            </span>
          </div>
        </div>

        {/* 7-Step Stepper Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}
        >
          {APPLICATION_ROADMAP_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || ListChecks;
            return (
              <div
                key={step.title}
                className="glass-panel"
                style={{
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '3px solid rgba(56, 189, 248, 0.3)',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        color: '#38BDF8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <span style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: '0.82rem', color: '#64748B' }}>
                      STEP {step.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '0.84rem', color: '#94A3B8', lineHeight: 1.5 }}>
                    {step.desc}
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
