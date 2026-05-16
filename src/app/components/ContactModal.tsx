'use client';

import React, { useEffect } from 'react';

interface ContactModalProps {
  onClose: () => void;
}

const contactInfo = [
  {
    icon: '👤',
    label: 'Full Name',
    value: 'Walpitagamage Tharindu Disnaka',
    link: null,
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'tharindu.disnaka@gmail.com',
    link: 'mailto:tharindu.disnaka@gmail.com',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+94775415345, +94 77 123 4567',
    link: 'tel:+94771234567',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/tharindu-disnaka',
    link: 'https://linkedin.com/',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/tharindu-disnaka',
    link: 'https://github.com/',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Colombo, Sri Lanka',
    link: null,
  },
];

export default function ContactModal({ onClose }: ContactModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Contact information"
    >
      <div className="modal-content bg-card border border-border rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/20 to-accent/10 border-b border-border px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground">Get In Touch</h2>
            <p className="text-muted-foreground text-sm mt-0.5">Tharindu Disnaka Gamage</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            aria-label="Close contact modal"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contact Info */}
        <div className="p-6 space-y-3">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-3.5 rounded-xl bg-secondary/40 border border-border hover:border-primary/40 transition-colors group"
            >
              <span className="text-lg w-7 text-center shrink-0">{item.icon}</span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                  {item.label}
                </p>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-foreground font-semibold text-sm hover:text-primary transition-colors truncate block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground font-semibold text-sm truncate">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex gap-3">
          <a
            href="mailto:tharindu.disnaka@gmail.com"
            className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm text-center hover:bg-accent transition-colors"
          >
            Send Email
          </a>
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-border text-muted-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}