'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import ContactModal from './ContactModal';

export default function HeroSection() {
  const [showContact, setShowContact] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRevealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsap: typeof import('gsap').gsap;

    const loadGsap = async () => {
      const mod = await import('gsap');
      gsap = mod.gsap;

      // Hero entrance
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: 'power4.out' }
      ).
      fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
      ).
      fromTo(
        cardRef.current,
        { x: 60, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out' },
        '-=1'
      );

      // Img reveal
      if (imgRevealRef.current) {
        setTimeout(() => {
          imgRevealRef.current?.classList.add('active');
        }, 400);
      }
    };

    loadGsap();
  }, []);

  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-20">
        
        {/* Ambient glow */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }}
          aria-hidden="true" />
        
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)' }}
          aria-hidden="true" />
        

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary" />
                <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-bold">
                  Mechatronics Engineer
                </span>
              </div>

              {/* Name */}
              <h1
                ref={titleRef}
                className="font-bold leading-[0.9] mb-6"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
                
                <span className="block text-foreground">Tharindu</span>
                <span className="block text-foreground">Disnaka</span>
                <span className="block text-primary">Gamage</span>
              </h1>

              {/* Subtitle */}
              <div
                ref={descRef}
                className="opacity-100">
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg">
                  Mechatronics Systems Engineering Undergraduate at{' '}
                  <span className="text-foreground font-semibold">University of Moratuwa</span>.
                  Designing intelligent systems at the intersection of robotics,
                  industrial automation, and control engineering.
                </p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed max-w-md mb-10">
                  From AUVs competing internationally to PLC based industrial systems,
                  building machines that move, sense, and decide.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setShowContact(true)}
                    className="group relative px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105">
                    
                    <span className="relative z-10">Contact Me</span>
                    <div className="absolute inset-0 bg-accent translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                  </button>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-3.5 rounded-full border border-border text-foreground font-bold text-sm tracking-wide transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] flex items-center gap-2">
                    
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-3.5 rounded-full border border-border text-foreground font-bold text-sm tracking-wide transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] flex items-center gap-2">
                    
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Profile Card */}
            <div className="lg:col-span-5" ref={cardRef}>
              <div className="relative">
                {/* Floating geometric accent */}
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl border border-primary/20 rotate-12 float-anim"
                  aria-hidden="true" />
                
                <div
                  className="absolute -bottom-6 -left-6 w-20 h-20 rounded-xl bg-primary/10 rotate-6 float-anim"
                  style={{ animationDelay: '2s' }}
                  aria-hidden="true" />
                

                {/* Card */}
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl pulse-glow">
                  {/* Profile Image */}
                  <div
                    ref={imgRevealRef}
                    className="img-reveal aspect-[4/3.7] relative">
                    
                    <AppImage
                      src="/assets/images/Gemini_Generated_Image_9q5lde9q5lde9q5l-1777864060362.png"
                      alt="Tharindu Disnaka Gamage - Mechatronics Systems Engineering Undergraduate at University of Moratuwa"
                      fill
                      className="object-cover"
                      priority />
                    
                    {/* Cyan gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent rounded-br-none border-l-0 border-y-0" />
                  </div>

                  {/* Card Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-foreground leading-tight">
                        Walpitagamage Tharindu Disnaka
                      </h2>
                      <p className="text-primary text-sm font-mono mt-1">
                        Mechatronics Systems Engineering
                      </p>
                    </div>

                    <div className="space-y-2.5 mb-6">
                      <InfoRow icon="🎓" label="University of Moratuwa" />
                      <InfoRow icon="🤖" label="Robotics · Automation · Control" />
                      <InfoRow icon="📍" label="Colombo, Sri Lanka" />
                    </div>

                    <a
                      href="/cv.pdf"
                      download="Tharindu_Disnaka_CV.pdf"
                      className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-primary/40 text-primary font-bold text-sm tracking-wide transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                      
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Contact Modal */}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>);

}

function InfoRow({ icon, label }: {icon: string;label: string;}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-muted-foreground text-sm">{label}</span>
    </div>);

}