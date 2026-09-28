import React from 'react';
import {
  Globe2,
  Mic,
  Building2,
  Printer,
  Users,
  ArrowRight,
  Maximize2,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function SmartKioskSection({ onOpenImageModal }) {
  const kioskFeatures = [
    {
      title: "Multilingual conversational interface",
      desc: "Instant language selection in Hindi, Tamil, Telugu, Kannada, and other regional languages.",
      icon: Globe2
    },
    {
      title: "Touch and voice interaction",
      desc: "Dual-mode natural interaction via responsive vertical touchscreen and noise-cancelling directional microphone.",
      icon: Mic
    },
    {
      title: "Guided government and cooperative services",
      desc: "Step-by-step navigation through agricultural schemes, PACS loan programs, and welfare entitlements.",
      icon: Building2
    },
    {
      title: "Document assistance and printing",
      desc: "Built-in thermal receipt printer immediately generates tangible document checklists, application tokens, and guidance slips.",
      icon: Printer
    },
    {
      title: "Designed for assisted rural service access",
      desc: "Purpose-built for deployment inside Primary Agricultural Cooperative Societies (PACS) and village service centers.",
      icon: Users
    }
  ];

  const kioskWorkflow = [
    { label: "ASK", desc: "Citizen voice / touch query" },
    { label: "CHECK", desc: "Eligibility & source verification" },
    { label: "DISCOVER", desc: "Scheme & benefit matching" },
    { label: "RETRIEVE", desc: "Knowledge retrieval & rules" },
    { label: "APPLY", desc: "Guided readiness assistance" },
    { label: "TRACK", desc: "Printed receipt & token" }
  ];

  return (
    <section id="kiosk" className="section-py bg-grid" style={{ position: 'relative' }}>
      <div className="ambient-emerald-glow" style={{ top: '20%', left: '10%' }} />
      <div className="ambient-cyan-glow" style={{ top: '50%', right: '10%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header Tag */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
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
              Physical Assistance Touchpoint
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '12px'
            }}
          >
            NEXO <span className="text-gradient-cyan">Smart Kiosk</span>
          </h2>

          <p style={{ fontSize: '1.2rem', color: '#F1F5F9', fontWeight: 600 }}>
            "Bringing multilingual AI assistance closer to rural communities."
          </p>
        </div>

        {/* 2-Column Premium Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* LEFT COLUMN: Large NEXO Kiosk Image */}
          <div
            className="glass-panel"
            style={{
              padding: '20px',
              borderRadius: '24px',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.9) 0%, rgba(6, 12, 22, 0.95) 100%)',
              boxShadow: '0 25px 60px -15px rgba(0, 242, 254, 0.2), 0 0 50px -20px rgba(16, 185, 129, 0.15)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                position: 'absolute',
                top: '28px',
                left: '28px',
                zIndex: 2,
                background: 'rgba(6, 10, 19, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '4px 12px',
                borderRadius: '999px',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#34D399'
              }}
            >
              <ShieldCheck size={13} />
              <span>NEXO Smart Kiosk Unit</span>
            </div>

            {/* Click to Zoom Pill */}
            <div
              onClick={() => onOpenImageModal && onOpenImageModal('/assets/demo/nexo-smart-kiosk.png', 'NEXO Smart Kiosk — Assisted Rural Service Point')}
              style={{
                position: 'absolute',
                top: '28px',
                right: '28px',
                zIndex: 2,
                background: 'rgba(6, 10, 19, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '6px 12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                fontSize: '0.74rem',
                color: '#BAE6FD',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Maximize2 size={13} />
              <span>Expand</span>
            </div>

            {/* Image Container with Preserved Aspect Ratio */}
            <div
              style={{
                width: '100%',
                maxHeight: '620px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '20px',
                paddingBottom: '10px',
                cursor: 'pointer'
              }}
              onClick={() => onOpenImageModal && onOpenImageModal('/assets/demo/nexo-smart-kiosk.png', 'NEXO Smart Kiosk — Assisted Rural Service Point')}
            >
              <img
                src="/assets/demo/nexo-smart-kiosk.png"
                alt="NEXO Smart Kiosk with Touchscreen, Camera, Voice Interface and Thermal Receipt Printer"
                style={{
                  maxHeight: '580px',
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.6))',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Hardware Status Strip */}
            <div
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'rgba(6, 10, 19, 0.75)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: '#CBD5E1' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                <span>Camera • Touch Display • Thermal Printer • Voice AI</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: '#38BDF8', fontWeight: 700, fontFamily: 'monospace' }}>
                PROPOSED KIOSK ARCHITECTURE
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Kiosk Information & Workflow */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: '#00F2FE',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px'
                }}
              >
                ASSISTED RURAL ACCESS
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '14px'
                }}
              >
                NEXO Smart Kiosk
              </h3>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#94A3B8',
                  lineHeight: 1.65
                }}
              >
                Designed to bridge language, literacy, and connectivity gaps by bringing verified, AI-guided government and cooperative assistance directly into village cooperative societies.
              </p>
            </div>

            {/* 5 Short Feature Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {kioskFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="glass-panel"
                    style={{
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      borderRadius: '14px',
                      border: '1px solid rgba(56, 189, 248, 0.15)',
                      background: 'rgba(14, 23, 42, 0.7)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(0, 242, 254, 0.12)',
                        color: '#00F2FE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '2px' }}>
                        {feat.title}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.45 }}>
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Small Workflow: ASK → CHECK → DISCOVER → RETRIEVE → APPLY → TRACK */}
            <div
              className="glass-panel"
              style={{
                padding: '20px 24px',
                borderRadius: '16px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(14, 23, 42, 0.8) 100%)'
              }}
            >
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#34D399', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                Guided Kiosk Service Workflow
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                {kioskWorkflow.map((step, idx) => (
                  <React.Fragment key={step.label}>
                    <div style={{ textAlign: 'center', minWidth: '70px' }}>
                      <div
                        style={{
                          fontSize: '0.88rem',
                          fontWeight: 800,
                          color: '#FFFFFF',
                          fontFamily: 'monospace'
                        }}
                      >
                        {step.label}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#94A3B8', marginTop: '2px' }}>
                        {step.desc}
                      </div>
                    </div>
                    {idx < kioskWorkflow.length - 1 && (
                      <div style={{ color: '#00F2FE', fontSize: '0.9rem', fontWeight: 700 }}>
                        →
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
