'use client';

import React, { useEffect } from 'react';
import type { Project } from './ProjectsSection';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
    >
      <div className="modal-content bg-card border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-start justify-between gap-4 z-10">
          <div>
            <span className="font-mono text-xs text-primary uppercase tracking-widest mb-1 block">
              {project.period}
            </span>
            <h2 className="text-xl font-bold text-foreground leading-tight">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Details */}
          {project.details.map((detail, i) => (
            <div
              key={i}
              className="bg-secondary/30 border border-border rounded-xl p-5 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <h3 className="text-base font-bold text-foreground">{detail.subtitle}</h3>
                <span className="font-mono text-xs text-primary shrink-0">{detail.period}</span>
              </div>

              {detail.role && (
                <p className="text-muted-foreground text-sm">
                  <span className="text-foreground font-semibold">Role: </span>
                  {detail.role}
                </p>
              )}

              <p className="text-muted-foreground text-sm leading-relaxed">{detail.description}</p>

              {detail.achievement && (
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <span className="text-primary text-xs">★</span>
                  <p className="text-sm font-bold text-foreground">{detail.achievement}</p>
                </div>
              )}

              {/* Team Photo */}
              {detail.teamPhoto && (
                <div className="pt-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Team Photo</p>
                  <div className="rounded-xl overflow-hidden border border-border">
                    <img
                      src={detail.teamPhoto}
                      alt={detail.teamPhotoAlt || 'Team photo'}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Additional Photos - Big Single Column */}
              {detail.photos && detail.photos.length > 0 && (
                <div className="pt-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Design & Simulation</p>
                  <div className="space-y-6">   {/* Single column with more spacing */}
                    {detail.photos.map((photo, idx) => (
                      <div key={idx} className="rounded-2xl overflow-hidden border border-border shadow-sm">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-auto object-contain bg-zinc-950"  /* Big & clean */
                        />
                        {photo.alt && (
                          <p className="text-sm text-center text-muted-foreground py-3 px-4 border-t border-border bg-card">
                            {photo.alt}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Videos */}
              {detail.videos && detail.videos.length > 0 && (
                <div className="pt-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Simulations</p>
                  <div className="space-y-4">
                    {detail.videos.map((video, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden border border-border bg-black">
                        <video 
                          controls 
                          className="w-full aspect-video"
                          src={video.src}
                        >
                          Your browser does not support the video tag.
                        </video>
                        <p className="text-xs text-center text-muted-foreground py-1">{video.alt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Video Placeholder */}
              {detail.videoPlaceholder && (
                <div className="pt-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Video</p>
                  <div className="rounded-xl overflow-hidden border border-border bg-secondary/40 aspect-video flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <svg className="w-10 h-10 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
                    </svg>
                    <span className="text-sm font-medium opacity-60">Video coming soon</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl border border-border text-muted-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}