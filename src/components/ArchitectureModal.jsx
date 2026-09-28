import React from 'react';
import { X, ExternalLink, Download, Layers, ShieldCheck } from 'lucide-react';

export default function ArchitectureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(4, 7, 15, 0.92)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#070D1B',
          border: '1px solid rgba(0, 242, 254, 0.35)',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '1100px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 70px rgba(0,0,0,0.8)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(15, 23, 42, 0.8)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Layers size={18} color="#00F2FE" />
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>
                Official SIH 2026 Technical Approach Architecture
              </h3>
              <span style={{ fontSize: '0.74rem', color: '#94A3B8' }}>
                Smart India Hackathon 2026 • Team Innotrix • Rathinam Technical Campus
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body with Full Image */}
        <div
          style={{
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <div
            style={{
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              background: '#000000'
            }}
          >
            <img
              src="/assets/demo/technical-approach-kiosk.png"
              alt="Technical Approach SIH 2026 Architecture"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>

          {/* Quick Explanatory Pillars below diagram */}
          <div
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '12px'
            }}
          >
            <div style={{ padding: '12px 16px', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00F2FE' }}>1. Data Collection & Knowledge Base</div>
              <div style={{ fontSize: '0.74rem', color: '#94A3B8', marginTop: '2px' }}>Automated scheduled ingestion, change detection, OCR extraction & dual vector/graph storage.</div>
            </div>
            <div style={{ padding: '12px 16px', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34D399' }}>2. Smart Kiosk Edge Unit</div>
              <div style={{ fontSize: '0.74rem', color: '#94A3B8', marginTop: '2px' }}>Online + offline local RAG execution with automatic integrity sync when connectivity returns.</div>
            </div>
            <div style={{ padding: '12px 16px', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FBBF24' }}>3. Cognitive Routing Pipeline</div>
              <div style={{ fontSize: '0.74rem', color: '#94A3B8', marginTop: '2px' }}>Dynamic query routing between FAISS vector RAG, Neo4j knowledge graph, and live government APIs.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
