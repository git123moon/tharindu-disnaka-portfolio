'use client';

import React, { useEffect, useRef, useState } from 'react';
import ContactModal from './ContactModal';

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap?.registerPlugin(ScrollTrigger);

      if (lineRef?.current) {
        ScrollTrigger?.create({
          trigger: lineRef?.current,
          start: 'top 85%',
          onEnter: () => lineRef?.current?.classList?.add('active'),
        });
      }

      if (contentRef?.current) {
        gsap?.fromTo(
          contentRef?.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef?.current,
              start: 'top 80%',
            },
          }
        );
      }
    };

    loadGsap();
  }, []);

  return (
    <>
      <section id="contact" ref={sectionRef} className="py-24 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div ref={lineRef} className="section-line mb-8" />
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-primary uppercase tracking-[0.4em]">05 / Contact</span>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="opacity-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: CTA */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Let&apos;s Build <br />
                  <span className="text-primary italic">Something</span> Together
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
                  Whether you&apos;re a research lab, engineering firm, or competition team —
                  I&apos;m open to collaboration, internships, and exciting engineering challenges.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setShowModal(true)}
                    className="group relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2 justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Me
                    </span>
                    <div className="absolute inset-0 bg-accent translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                  </button>

                  <a
                    href="/cv.pdf"
                    download="Tharindu_Disnaka_CV.pdf"
                    className="group px-8 py-4 rounded-full border border-border text-foreground font-bold text-sm tracking-wide transition-all duration-300 hover:border-primary hover:text-primary flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>

              {/* Right: Quick info */}
              <div className="space-y-4">
                {[
                  {
                    icon: '📍',
                    label: 'Location',
                    value: 'Colombo, Sri Lanka',
                  },
                  {
                    icon: '🎓',
                    label: 'University',
                    value: 'University of Moratuwa',
                  },
                  {
                    icon: '🤖',
                    label: 'Focus',
                    value: 'Robotics · Automation · Control',
                  },
                  {
                    icon: '💼',
                    label: 'Status',
                    value: 'Open to opportunities',
                  },
                ]?.map((item) => (
                  <div
                    key={item?.label}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors duration-300"
                  >
                    <div>
                      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                        {item?.label}
                      </p>
                      <p className="text-foreground font-semibold text-sm">{item?.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  );
}