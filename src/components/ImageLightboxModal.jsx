import React from 'react';
import { X } from 'lucide-react';

export default function ImageLightboxModal({ isOpen, onClose, imageSrc, caption }) {
  if (!isOpen || !imageSrc) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        background: 'rgba(3, 6, 12, 0.95)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '24px',
          zIndex: 120
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            border: 'none',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            cursor: 'pointer'
          }}
        >
          <X size={22} />
        </button>
      </div>

      <div
        style={{
          maxWidth: '90vw',
          maxHeight: '82vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={caption || 'Preview image'}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
            border: '1px solid rgba(56, 189, 248, 0.25)'
          }}
        />

        {caption && (
          <div
            style={{
              color: '#CBD5E1',
              fontSize: '0.95rem',
              fontWeight: 600,
              textAlign: 'center',
              background: 'rgba(15, 23, 42, 0.8)',
              padding: '8px 20px',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
