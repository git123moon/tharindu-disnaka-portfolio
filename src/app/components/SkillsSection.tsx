'use client';

import React, { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      "Python",
      "C / C++",
      "MATLAB",
    ]
  },
  {
    title: "PLC & Industrial Automation",
    icon: "⚙️",
    skills: [
      "Delta PLC",
      "Siemens LOGO! PLC",
      "Siemens S7-300, S7-400 PLCs",
      "HMI Interface Design(Delta, xinje, AB PanelView)",
      "TIA Portal",
      "Industrial Communication Protocols"
    ]
  },
  {
    title: "Simulation & Modeling",
    icon: "📊",
    skills: [
      "MATLAB / Simulink",
      "COMSOL Multiphysics",
      "Ansys Fluent",
      "Dynamic System Simulation",
      "Finite Element Analysis (FEA)",
      "Kinematic & Dynamic Analysis(MSC Adams)"
    ]
  },
  {
    title: "CAD & Mechanical Design",
    icon: "🛠️",
    skills: [
      "SolidWorks",
      "Autodesk Fusion 360",
      "Technical Drawing & GD&T",
      "Design for Manufacturing (DFM) in Fusion 360"
    ]
  },
  {
    title: "Embedded Systems & Robotics",
    icon: "🤖",
    skills: [
      "Arduino",
      "ESP32",
      "NVIDIA Jetson Nano, Jetson Xavier NX,Jetson Orin",
      "YOLO Object Detection",
      "Inverse Kinematics",
      "Gait Planning",
      "ROS2 Framework"
    ]
  },
  {
    title: "Key Engineering Skills",
    icon: "🔬",
    skills: [
      "Control Systems Design",
      "Sensor Integration & Calibration",
      "Real-time Systems",
      "Computer Vision",
      "Piezoresistive Sensing",
      "Electrostatic Actuation",
      "Data Acquisition & Logging"
    ]
  }
];

export default function SkillsSection() {
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
          onEnter: () => lineRef.current?.classList.add('active'),
        });
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.skill-card');
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
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
    <section id="skills" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div ref={lineRef} className="section-line mb-8" />
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.4em]">02 / Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Technical <span className="text-primary italic">Toolkit</span>
          </h2>
        </div>

        {/* Skills Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-5">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <span className="text-primary text-lg leading-none">•</span>
                    <span className="text-[15px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}