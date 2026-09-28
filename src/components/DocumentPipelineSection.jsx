import React from 'react';
import {
  FileText,
  ShieldCheck,
  HardDrive,
  FileSearch,
  Filter,
  Scissors,
  Binary,
  Layers,
  Network,
  Sparkles,
  ArrowRight,
  Archive,
  Database
} from 'lucide-react';

export default function DocumentPipelineSection() {
  const formats = ['PDF', 'DOCX', 'HTML', 'CSV', 'JSON', 'XML'];

  const lifecycleStages = [
    { title: "Official Raw Document", sub: "Ingested via Allowlist", icon: FileText, tier: "ingest" },
    { title: "Integrity Validation", sub: "SHA-256 Hash & Certs", icon: ShieldCheck, tier: "verify" },
    { title: "Original File Storage", sub: "Immutable Supabase Bucket", icon: Archive, tier: "storage", isHighlight: true },
    { title: "Text Extraction", sub: "PyMuPDF & Tesseract OCR", icon: FileSearch, tier: "process" },
    { title: "Cleaning & Normalization", sub: "Noise removal & metadata", icon: Filter, tier: "process" },
    { title: "Semantic Chunking", sub: "Sliding overlapping windows", icon: Scissors, tier: "ai" },
    { title: "Vector Embeddings", sub: "Sentence Transformers", icon: Binary, tier: "ai" },
    { title: "Vector Knowledge Base", sub: "FAISS Dense Index", icon: Database, tier: "knowledge", isHighlight: true },
    { title: "Knowledge Graph", sub: "Neo4j Entities & Relations", icon: Network, tier: "knowledge", isHighlight: true },
    { title: "NEXO AI Agent", sub: "Grounded Truth Synthesis", icon: Sparkles, tier: "output", isFinal: true }
  ];

  return (
    <section className="section-py" style={{ background: '#050913', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
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
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Document Processing Engine
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
            Complete Document <span className="text-gradient-cyan">Lifecycle</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            Preserving legal provenance by isolating original legal archives from dynamic AI vector & graph representations.
          </p>
        </div>

        {/* Multi-Format Badge Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}
        >
          <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>Supported Source Formats:</span>
          {formats.map((fmt) => (
            <span
              key={fmt}
              style={{
                fontFamily: 'monospace',
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: '6px',
                background: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                color: '#38BDF8'
              }}
            >
              .{fmt.toLowerCase()}
            </span>
          ))}
        </div>

        {/* Visual Lifecycle Stepper */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px'
          }}
        >
          {lifecycleStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.title}
                className="glass-panel"
                style={{
                  padding: '20px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  border: stage.isFinal
                    ? '1px solid rgba(0, 242, 254, 0.5)'
                    : stage.isHighlight
                    ? '1px solid rgba(16, 185, 129, 0.4)'
                    : '1px solid rgba(56, 189, 248, 0.15)',
                  background: stage.isFinal
                    ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(15, 23, 42, 0.9))'
                    : stage.isHighlight
                    ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(15, 23, 42, 0.8))'
                    : 'rgba(14, 23, 42, 0.6)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: stage.isFinal
                      ? '#00F2FE'
                      : stage.isHighlight
                      ? 'rgba(16, 185, 129, 0.2)'
                      : 'rgba(56, 189, 248, 0.1)',
                    color: stage.isFinal
                      ? '#04101A'
                      : stage.isHighlight
                      ? '#34D399'
                      : '#38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px'
                  }}
                >
                  <Icon size={20} />
                </div>

                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: '#64748B',
                    fontFamily: 'monospace',
                    marginBottom: '4px'
                  }}
                >
                  STEP 0{idx + 1}
                </div>

                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '4px' }}>
                  {stage.title}
                </h4>

                <p style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                  {stage.sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dual Tier Isolation Callout */}
        <div
          style={{
            marginTop: '36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: '24px',
              borderLeft: '4px solid #10B981',
              background: 'rgba(16, 185, 129, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Archive size={18} color="#10B981" />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#34D399' }}>
                Tier 1: Original Immutable Document Storage
              </h4>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#CBD5E1', lineHeight: 1.55 }}>
              Raw PDFs, circulars, and gazettes stored in Supabase with cryptographic SHA-256 hashes. These files are never modified, serving as the legal source of truth.
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '24px',
              borderLeft: '4px solid #00F2FE',
              background: 'rgba(0, 242, 254, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Network size={18} color="#00F2FE" />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#38BDF8' }}>
                Tier 2: Processed AI Knowledge Layer
              </h4>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#CBD5E1', lineHeight: 1.55 }}>
              Cleaned, chunked text converted into high-dimensional vector embeddings (FAISS) and linked into the Neo4j Knowledge Graph with explicit parent source citations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
