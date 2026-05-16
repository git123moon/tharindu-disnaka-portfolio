'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface ExperienceCard {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  highlight?: string;
  image: string;
  imageAlt: string;
  accentColor: string;
}

const experiences: ExperienceCard[] = [
{
  id: 1,
  tag: 'Internship',
  title: 'Industrial Training',
  subtitle: 'Colombo International Container Terminals (CICT)',
  period: 'Dec 2024 – Jun 2025 · 6 Months',
  description: [
  'Industrial automation and PLC systems engineering',
  'Delta PLC, Siemens LOGO, HMI integration',
  'Mechanical design and machine improvements',
  'Vision-based systems with Jetson + YOLO'],

  highlight: 'South Asia\'s only deepwater terminal (20,000+ TEU)',
  image: "/assets/images/CICT_1-1777862925903.jpg",
  imageAlt: 'Container terminal with massive cranes and cargo ships at a busy deepwater port, industrial automation environment',
  accentColor: 'border-cyan-500/50'
},
{
  id: 2,
  tag: 'Competition',
  title: 'Diyakawa 2.0',
  subtitle: 'Singapore AUV Challenge 2025',
  period: 'Semester 5 · 2024–2025',
  description: [
  'Structural design & system integration',
  'Improved AUV for SAUVC 2025',
  'Competed against 48 international teams',
  'Fastest time run in the first round'],

  highlight: '🏆 10th place / 48 teams · Fastest Round 1',
  image: "/assets/images/diyakawa_2_1-1777862987330.jpg",
  imageAlt: 'Underwater autonomous vehicle in test pool, blue water, engineering competition environment',
  accentColor: 'border-violet-500/50'
},
{
  id: 3,
  tag: 'Competition',
  title: 'Diyakawa 1.0',
  subtitle: 'Singapore AUV Challenge 2024',
  period: 'Semester 4 · 2024–2025',
  description: [
  'Structural Design Engineer for AUV',
  'External body design in SolidWorks & Fusion 360',
  'First AUV build for the team',
  'Competed against 100+ international teams'],

  highlight: '🥇 11th place / 100+ teams',
  image: "/assets/images/diyakawa_1_2-1777862999675.jpg",
  imageAlt: 'Engineering workshop with CAD workstations and 3D printed mechanical components, robotics design environment',
  accentColor: 'border-sky-500/50'
}];


export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (lineRef.current) {
        ScrollTrigger.create({
          trigger: lineRef.current,
          start: 'top 85%',
          onEnter: () => lineRef.current?.classList.add('active')
        });
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.exp-card');
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%'
            }
          }
        );
      }
    };

    loadGsap();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div ref={lineRef} className="section-line mb-8" />
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.4em]">03 / Experience</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              What I&apos;ve <span className="text-primary italic">Done</span>
            </h2>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              International competitions and industrial internship building real-world engineering systems.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp) =>
          <div
            key={exp.id}
            className={`exp-card opacity-100 bg-card border ${exp.accentColor} rounded-2xl overflow-hidden hover-lift group`}>
            
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <AppImage
                src={exp.image}
                alt={exp.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute top-3 left-3 font-mono text-xs font-bold uppercase tracking-widest text-primary bg-background/80 backdrop-blur px-3 py-1 rounded-full border border-primary/30">
                  {exp.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-mono text-xs text-muted-foreground mb-2 tracking-wide">{exp.period}</p>
                <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">{exp.subtitle}</p>

                <ul className="space-y-1.5 mb-5">
                  {exp.description.map((item, i) =>
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                )}
                </ul>

                {exp.highlight &&
              <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-bold text-foreground">{exp.highlight}</p>
                  </div>
              }
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}