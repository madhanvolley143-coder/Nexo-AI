import React, { useState } from 'react';
import { Mic, Volume2, Globe2, Sparkles, CheckCircle2, Shield } from 'lucide-react';

export default function MultilingualSection() {
  const [selectedLang, setSelectedLang] = useState('Tamil');

  const languages = [
    {
      code: 'ta',
      name: 'Tamil',
      native: 'தமிழ்',
      status: 'VERIFIED & ACTIVE',
      sampleQuery: 'பயிர் காப்பீடு (PMFBY) திட்டத்திற்கு விண்ணப்பிக்க என்ன ஆவணங்கள் தேவை?',
      sampleResponse: 'பிரதான் மந்திரி பயிர் காப்பீட்டுத் திட்டத்திற்கு ஆதார் அட்டை, நில பட்டா/சிட்டா, அடங்கல் சான்றிதழ் மற்றும் வங்கி கணக்கு புத்தகம் தேவை.'
    },
    {
      code: 'en',
      name: 'English',
      native: 'English',
      status: 'VERIFIED & ACTIVE',
      sampleQuery: 'What are the required documents and eligibility for the Kisan Credit Card (KCC)?',
      sampleResponse: 'KCC requires Aadhaar, landholding records with crop sowing details, and an active bank passbook. Maximum credit up to ₹3 Lakh at 4% interest.'
    },
    {
      code: 'hi',
      name: 'Hindi',
      native: 'हिन्दी',
      status: 'VERIFIED & ACTIVE',
      sampleQuery: 'किसान क्रेडिट कार्ड (KCC) योजना के लिए क्या पात्रता शर्तें हैं?',
      sampleResponse: 'किसान क्रेडिट कार्ड के लिए सभी किसान, काश्तकार और बटाईदार पात्र हैं। भूमि दस्तावेज, आधार और बैंक पासबुक प्रस्तुत करना आवश्यक है।'
    },
    {
      code: 'bhashini',
      name: 'Other Indian Languages',
      native: 'BHASHINI Integration',
      status: 'PLANNED ROADMAP',
      sampleQuery: 'Speech-to-speech translation across 22 Scheduled Indian Languages via Government BHASHINI APIs.',
      sampleResponse: 'Pipeline designed to leverage National Language Translation Mission (NLTM) speech models for regional dialects.'
    }
  ];

  const current = languages.find((l) => l.name === selectedLang) || languages[0];

  return (
    <section className="section-py bg-grid" style={{ position: 'relative' }}>
      <div className="ambient-cyan-glow" style={{ top: '20%', right: '10%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px auto' }}>
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
            <Globe2 size={14} color="#00F2FE" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#BAE6FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Native Linguistic Accessibility
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
            Speak Your Language. <span className="text-gradient-cyan">Get Guided.</span>
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#F8FAFC', fontWeight: 600, marginBottom: '10px' }}>
            "NEXO is designed to reduce language and digital barriers through multilingual text and voice interaction."
          </p>

          <p style={{ fontSize: '0.95rem', color: '#94A3B8' }}>
            Engineered to empower rural citizens who prefer speaking in their mother tongue over typing complex bureaucratic forms.
          </p>
        </div>

        {/* Language Selection Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '36px'
          }}
        >
          {languages.map((lang) => {
            const isSelected = selectedLang === lang.name;
            return (
              <button
                key={lang.name}
                onClick={() => setSelectedLang(lang.name)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: isSelected ? '1px solid #00F2FE' : '1px solid rgba(56, 189, 248, 0.2)',
                  background: isSelected ? 'rgba(0, 242, 254, 0.15)' : 'rgba(15, 23, 42, 0.7)',
                  color: isSelected ? '#00F2FE' : '#CBD5E1',
                  boxShadow: isSelected ? '0 0 20px rgba(0, 242, 254, 0.25)' : 'none',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>{lang.native}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>({lang.name})</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Speech & Dialect Simulation Box */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '36px',
            borderRadius: '20px',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.95) 0%, rgba(8, 16, 28, 0.98) 100%)'
          }}
        >
          {/* Status Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: current.status.includes('ACTIVE') ? 'rgba(16, 185, 129, 0.15)' : 'rgba(56, 189, 248, 0.15)',
                  color: current.status.includes('ACTIVE') ? '#34D399' : '#38BDF8',
                  border: current.status.includes('ACTIVE') ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(56, 189, 248, 0.3)'
                }}
              >
                {current.status}
              </span>
              <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
                Linguistic Interface: <strong style={{ color: '#F8FAFC' }}>{current.name}</strong>
              </span>
            </div>

            {/* Soundwave animation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '24px' }}>
              {[0.4, 0.8, 1.2, 0.6, 1.0, 0.3, 0.9, 0.5, 0.7, 1.1].map((delay, idx) => (
                <span
                  key={idx}
                  className="soundwave-bar"
                  style={{ animationDelay: `${delay}s` }}
                />
              ))}
            </div>
          </div>

          {/* User Query Simulation */}
          <div
            style={{
              padding: '20px',
              borderRadius: '14px',
              background: 'rgba(6, 10, 19, 0.7)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              marginBottom: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#00F2FE',
                  color: '#04101A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Mic size={14} />
              </div>
              <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#38BDF8', textTransform: 'uppercase' }}>
                Citizen Voice Query Input
              </span>
            </div>
            <p style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 600, paddingLeft: '38px', lineHeight: 1.5 }}>
              "{current.sampleQuery}"
            </p>
          </div>

          {/* AI Grounded Vocal & Text Response */}
          <div
            style={{
              padding: '20px',
              borderRadius: '14px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#10B981',
                  color: '#04101A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Volume2 size={14} />
              </div>
              <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#34D399', textTransform: 'uppercase' }}>
                NEXO Synthesized Response & Audio Readout
              </span>
            </div>
            <p style={{ fontSize: '0.98rem', color: '#E2E8F0', paddingLeft: '38px', lineHeight: 1.6 }}>
              {current.sampleResponse}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
