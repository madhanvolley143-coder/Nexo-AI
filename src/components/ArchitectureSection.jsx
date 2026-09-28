import React, { useState } from 'react';
import { ARCHITECTURE_NODES } from '../data/nexoData';
import {
  User,
  Mic,
  Globe2,
  Brain,
  Split,
  Database,
  Network,
  Radio,
  Combine,
  ShieldCheck,
  Cpu,
  Languages,
  Volume2,
  Maximize2,
  CheckCircle2,
  Info
} from 'lucide-react';

const NODE_ICONS = {
  'user': User,
  'input': Mic,
  'lang-detect': Globe2,
  'query-understanding': Brain,
  'query-router': Split,
  'rag-retrieval': Database,
  'knowledge-graph': Network,
  'auth-apis': Radio,
  'context-fusion': Combine,
  'evidence-confidence': ShieldCheck,
  'llm': Cpu,
  'multilingual-response': Languages,
  'output': Volume2
};

export default function ArchitectureSection({ onOpenFullArchitecture }) {
  const [selectedNode, setSelectedNode] = useState(ARCHITECTURE_NODES[4]); // default to router

  return (
    <section id="architecture" className="section-py" style={{ background: '#070D1A', position: 'relative' }}>
      <div className="ambient-cyan-glow" style={{ top: '20%', left: '10%' }} />

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
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              marginBottom: '16px'
            }}
          >
            <Cpu size={14} color="#38BDF8" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#BAE6FD', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              System Pipeline & Dataflow
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
            How NEXO <span className="text-gradient-cyan">Works</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94A3B8' }}>
            A verified end-to-end cognitive pipeline fusing vector similarity, graph traversals, and live government APIs.
            Click any node below to inspect its data contract.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div
          className="glass-panel"
          style={{
            padding: '36px 28px',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            marginBottom: '32px',
            position: 'relative'
          }}
        >
          {/* Top Modal Trigger Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
            <button
              onClick={onOpenFullArchitecture}
              className="btn-secondary"
              style={{
                fontSize: '0.84rem',
                padding: '8px 16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Maximize2 size={15} color="#00F2FE" />
              <span>View Full Technical Approach Diagram</span>
            </button>
          </div>

          {/* Diagram Layout */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            {/* Stage 1: USER */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <NodeBadge
                node={ARCHITECTURE_NODES[0]}
                isSelected={selectedNode.id === 'user'}
                onSelect={() => setSelectedNode(ARCHITECTURE_NODES[0])}
                icon={User}
              />
              <div className="flow-line" style={{ width: '2px', height: '24px' }} />
            </div>

            {/* Stage 2: Text / Voice Input */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <NodeBadge
                node={ARCHITECTURE_NODES[1]}
                isSelected={selectedNode.id === 'input'}
                onSelect={() => setSelectedNode(ARCHITECTURE_NODES[1])}
                icon={Mic}
              />
              <div className="flow-line" style={{ width: '2px', height: '24px' }} />
            </div>

            {/* Stage 3: Language Detection */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <NodeBadge
                node={ARCHITECTURE_NODES[2]}
                isSelected={selectedNode.id === 'lang-detect'}
                onSelect={() => setSelectedNode(ARCHITECTURE_NODES[2])}
                icon={Globe2}
              />
              <div className="flow-line" style={{ width: '2px', height: '24px' }} />
            </div>

            {/* Stage 4: Query Understanding */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <NodeBadge
                node={ARCHITECTURE_NODES[3]}
                isSelected={selectedNode.id === 'query-understanding'}
                onSelect={() => setSelectedNode(ARCHITECTURE_NODES[3])}
                icon={Brain}
              />
              <div className="flow-line" style={{ width: '2px', height: '24px' }} />
            </div>

            {/* Stage 5: Dynamic Query Router (Central Hub) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <NodeBadge
                node={ARCHITECTURE_NODES[4]}
                isSelected={selectedNode.id === 'query-router'}
                onSelect={() => setSelectedNode(ARCHITECTURE_NODES[4])}
                icon={Split}
                isSpecial
              />
              <div className="flow-line" style={{ width: '2px', height: '24px' }} />
            </div>

            {/* Tri-Split Retrieval Layer: RAG | Knowledge Graph | Authorized APIs */}
            <div
              style={{
                position: 'relative',
                padding: '24px 20px',
                borderRadius: '16px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px dashed rgba(56, 189, 248, 0.3)',
                width: '100%',
                maxWidth: '860px'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '24px',
                  background: '#070D1A',
                  padding: '2px 10px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#38BDF8',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                TRI-STREAM KNOWLEDGE RETRIEVAL LAYER
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px'
                }}
              >
                <NodeBadge
                  node={ARCHITECTURE_NODES[5]}
                  isSelected={selectedNode.id === 'rag-retrieval'}
                  onSelect={() => setSelectedNode(ARCHITECTURE_NODES[5])}
                  icon={Database}
                />
                <NodeBadge
                  node={ARCHITECTURE_NODES[6]}
                  isSelected={selectedNode.id === 'knowledge-graph'}
                  onSelect={() => setSelectedNode(ARCHITECTURE_NODES[6])}
                  icon={Network}
                />
                <NodeBadge
                  node={ARCHITECTURE_NODES[7]}
                  isSelected={selectedNode.id === 'auth-apis'}
                  onSelect={() => setSelectedNode(ARCHITECTURE_NODES[7])}
                  icon={Radio}
                />
              </div>
            </div>

            <div className="flow-line" style={{ width: '2px', height: '24px' }} />

            {/* Stage 6: Context Fusion */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <NodeBadge
                node={ARCHITECTURE_NODES[8]}
                isSelected={selectedNode.id === 'context-fusion'}
                onSelect={() => setSelectedNode(ARCHITECTURE_NODES[8])}
                icon={Combine}
              />
              <div className="flow-line" style={{ width: '2px', height: '24px' }} />
            </div>

            {/* Stage 7: Evidence / Confidence Grounding */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <NodeBadge
                node={ARCHITECTURE_NODES[9]}
                isSelected={selectedNode.id === 'evidence-confidence'}
                onSelect={() => setSelectedNode(ARCHITECTURE_NODES[9])}
                icon={ShieldCheck}
                isSuccess
              />
              <div className="flow-line" style={{ width: '2px', height: '24px' }} />
            </div>

            {/* Stage 8: LLM Inference */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <NodeBadge
                node={ARCHITECTURE_NODES[10]}
                isSelected={selectedNode.id === 'llm'}
                onSelect={() => setSelectedNode(ARCHITECTURE_NODES[10])}
                icon={Cpu}
                isSpecial
              />
              <div className="flow-line" style={{ width: '2px', height: '24px' }} />
            </div>

            {/* Stage 9: Multilingual Response */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <NodeBadge
                node={ARCHITECTURE_NODES[11]}
                isSelected={selectedNode.id === 'multilingual-response'}
                onSelect={() => setSelectedNode(ARCHITECTURE_NODES[11])}
                icon={Languages}
              />
              <div className="flow-line" style={{ width: '2px', height: '24px' }} />
            </div>

            {/* Stage 10: Final Output */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <NodeBadge
                node={ARCHITECTURE_NODES[12]}
                isSelected={selectedNode.id === 'output'}
                onSelect={() => setSelectedNode(ARCHITECTURE_NODES[12])}
                icon={Volume2}
              />
            </div>
          </div>
        </div>

        {/* Selected Node Inspector Detail Card */}
        <div
          className="glass-panel"
          style={{
            padding: '24px 32px',
            border: '1px solid rgba(0, 242, 254, 0.4)',
            background: 'rgba(14, 23, 42, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(0, 242, 254, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00F2FE'
              }}
            >
              <Info size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase' }}>
                  LAYER: {selectedNode.layer}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>
                  {selectedNode.label}
                </span>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#94A3B8', marginTop: '4px' }}>
                {selectedNode.desc}
              </p>
            </div>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#64748B', fontFamily: 'monospace' }}>
            NODE_ID: {selectedNode.id}
          </div>
        </div>
      </div>
    </section>
  );
}

function NodeBadge({ node, isSelected, onSelect, icon: Icon, isSpecial, isSuccess }) {
  let borderColor = 'rgba(56, 189, 248, 0.2)';
  let bg = 'rgba(15, 23, 42, 0.8)';
  let textColor = '#F8FAFC';
  let iconColor = '#38BDF8';

  if (isSelected) {
    borderColor = '#00F2FE';
    bg = 'rgba(0, 242, 254, 0.16)';
    iconColor = '#00F2FE';
  } else if (isSpecial) {
    borderColor = 'rgba(245, 158, 11, 0.4)';
    iconColor = '#FBBF24';
  } else if (isSuccess) {
    borderColor = 'rgba(16, 185, 129, 0.4)';
    iconColor = '#34D399';
  }

  return (
    <div
      onClick={onSelect}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 20px',
        borderRadius: '12px',
        border: `1px solid ${borderColor}`,
        background: bg,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: isSelected ? '0 0 20px rgba(0, 242, 254, 0.3)' : 'none',
        minWidth: '220px',
        justifyContent: 'center'
      }}
    >
      <Icon size={18} color={iconColor} />
      <span style={{ fontSize: '0.92rem', fontWeight: 700, color: textColor }}>
        {node.label}
      </span>
    </div>
  );
}
