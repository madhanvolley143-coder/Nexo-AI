import React from 'react';
import { TEAM_MEMBERS } from '../data/nexoData';
import { Users, Cloud, FileScan, Brain, Layout, Network, Server, Award } from 'lucide-react';

const ROLE_ICONS = {
  'Akshaya Kumaran P': Cloud,
  'Rathnadeepa V M': FileScan,
  'Deepiga M': Brain,
  'Hari Prasath J': Layout,
  'Madhan R': Network,
  'Hariharan S': Server
};

export default function TeamSection() {
  return (
    <section id="team" className="section-py bg-grid" style={{ position: 'relative' }}>
      <div className="ambient-cyan-glow" style={{ top: '20%', left: '10%' }} />

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
            <Users size={14} color="#00F2FE" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#BAE6FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Student Innovators & Engineers
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
            Meet the <span className="text-gradient-cyan">Team</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            The interdisciplinary engineering team from Rathinam Technical Campus representing Innotrix at Smart India Hackathon 2026.
          </p>
        </div>

        {/* 6 Team Member Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}
          className="team-grid"
        >
          {TEAM_MEMBERS.map((member) => {
            const RoleIcon = ROLE_ICONS[member.name] || Brain;

            return (
              <div
                key={member.name}
                className="glass-panel glass-panel-hover"
                style={{
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: '20px',
                  border: '1px solid rgba(56, 189, 248, 0.18)',
                  position: 'relative'
                }}
              >
                {/* Circular Portrait with Glowing Accent Ring */}
                <div
                  style={{
                    position: 'relative',
                    width: '130px',
                    height: '130px',
                    marginBottom: '20px'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-4px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00F2FE 0%, #0284C7 50%, #10B981 100%)',
                      opacity: 0.8,
                      filter: 'blur(2px)'
                    }}
                  />
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid #060A13',
                      background: '#0B132B'
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  {/* Subtle Role Icon Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0px',
                      right: '0px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#060A13',
                      border: '2px solid #00F2FE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00F2FE',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.6)'
                    }}
                  >
                    <RoleIcon size={16} />
                  </div>
                </div>

                {/* Member Name */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#F8FAFC',
                    marginBottom: '6px'
                  }}
                >
                  {member.name}
                </h3>

                {/* Exact Verified Role */}
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#38BDF8',
                    marginBottom: '14px',
                    padding: '3px 12px',
                    borderRadius: '999px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)'
                  }}
                >
                  {member.role}
                </div>

                {/* Focus Description */}
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#94A3B8',
                    lineHeight: 1.55
                  }}
                >
                  {member.focus}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
