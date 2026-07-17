'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import ProjectModal from './ProjectModal';

export interface Project {
  id: number;
  title: string;
  period: string;
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
  accentColor: string;
  details: ProjectDetail[];
}

export interface ProjectDetail {
  subtitle: string;
  period: string;
  description: string;
  role?: string;
  achievement?: string;
  teamPhoto?: string;
  teamPhotoAlt?: string;
  videoPlaceholder?: boolean;
  photos?: { src: string; alt: string }[];
}

const projects: Project[] = [
{
  id: 1,
  title: 'Diyakawa Autonomous Underwater Robot',
  period: '2024–2025',
  summary: 'Designed and built Diyakawa 1.0 and 2.0 AUV robots for the Singapore AUV Challenge. Structural design using SolidWorks and Fusion 360.',
  tags: ['AUV', 'SolidWorks', 'Fusion 360', 'System Integration'],
  image: "/assets/images/diyakawa_2_2-1777863229783.jpg",
  imageAlt: 'Diyakawa Autonomous Underwater Vehicle',
  accentColor: 'border-cyan-500/40',
  details: [
    {
      subtitle: 'Diyakawa 2.0',
      period: 'Semester 5, 2024–2025',
      description: 'Improved AUV for Singapore AUV Challenge 2025. Contributed to structural design and system integration. Competed against 48 international teams.',
      role: 'Structural Design & System Integration',
      achievement: '10th place / 48 teams • Fastest Round 1',
      photos: [
        { src: '/assets/images/diyakawa_2_1-1777894927174.jpg', alt: 'Diyakawa 2.0 team at SAUVC 2025' },
        { src: '/assets/images/diyakawa_2_uav-1777894927205.png', alt: 'Diyakawa 2.0 AUV' }
      ],
      videos: [
        { src: '/assets/videos/diyakawa/diyakawa-2.0.mp4', alt: 'Diyakawa 2.0 Competition Video' }
      ]
    },
    {
      subtitle: 'Diyakawa 1.0',
      period: 'Semester 4, 2024–2025',
      description: 'First AUV built by the team for Singapore AUV Challenge 2024. Responsible for external body design using SolidWorks and Fusion 360.',
      role: 'Structural Design Engineer',
      achievement: '11th place / 100+ teams',
      teamPhoto: '/assets/images/diyakawa_1_team-1777894062829.jpg',
      teamPhotoAlt: 'Diyakawa 1.0 team at SAUVC 2024',
      photos: [
        { src: '/assets/images/diyakawa_1_uav-1777894927024.jpg', alt: 'Diyakawa 1.0 AUV' },
        { src: '/assets/images/diyakawa_1_1-1777894927077.jpg', alt: 'Diyakawa 1.0 launching' }
      ],
      videos: [
        { src: '/assets/videos/diyakawa/diyakawa-1.0.mp4', alt: 'Diyakawa 1.0 Competition / Launch Video' }
      ]
    }
  ]
},
{
  id: 2,
  title: 'Reverse Engineering of Bicycle Disk Brake',
  period: 'Semester 4, 2024',
  summary: 'Dissected and optimized a bicycle disc brake system through material testing, 3D modeling, and structural analysis. Achieved 8.3% weight reduction.',
  tags: ['Fusion 360', 'Material Testing', 'Structural Analysis', 'Optimization'],
  image: "/assets/images/bicycle_1-1777863354616.jpg",
  imageAlt: 'Bicycle disc brake component close-up, mechanical engineering analysis',
  accentColor: 'border-amber-500/40',
  details: [
    {
      subtitle: 'Project Overview & Achievements',
      period: 'Semester 4, 2024',
      description: 'We conducted a thorough reverse engineering of a bicycle disc brake system. Our goal was to understand manufacturing techniques and material properties of components such as the brake lever, cable, caliper, pads, and rotor.',
      role: 'Design & Analysis Engineer',
      achievement: '8.3% weight reduction • Improved Safety Factor'
    },
    {
      subtitle: 'Material Identification',
      period: '',
      description: 'Performed visual inspections, burn tests, density measurement, and Rockwell Hardness tests to identify materials and understand manufacturing methods.',
      photos: [
        { src: '/assets/images/material-identification.jpg', alt: 'Material identification and testing of bicycle brake components' }
      ]
    },
    {
      subtitle: '3D Modelling & Simulation',
      period: '',
      description: 'Created detailed 3D models using Autodesk Fusion 360 and performed force and torque simulations for design optimization.',
      photos: [
        { src: '/assets/images/brake-3d-model.jpg', alt: 'Bicycle disc brake 3D model in Fusion 360' }
      ]
    },
    {
      subtitle: 'Project Flow',
      period: '',
      description: 'Complete project workflow from disassembly to final optimized design.',
      photos: [
        { src: '/assets/images/project-flow.jpg', alt: 'Bicycle brake reverse engineering project flow' }
      ]
    },
    {
      subtitle: 'All Parts Analysis',
      period: '',
      description: 'Detailed study and documentation of all brake system components.',
      photos: [
        { src: '/assets/images/all-parts.jpg', alt: 'All parts of the bicycle disc brake system' }
      ]
    },
    {
      subtitle: 'Production Drawings',
      period: '',
      description: 'Created precise manufacturing drawings and technical documentation.',
      photos: [
        { src: '/assets/images/production-drawings.jpg', alt: 'Production drawings and technical documentation' }
      ]
    },
    {
      subtitle: 'Stress Analysis & Further Improvements',
      period: '',
      description: 'Conducted stress analysis on the rotor design and proposed further improvements including mould design and realistic rendering.',
      photos: [
        { src: '/assets/images/stress-analysis-improvements.jpg', alt: 'Stress analysis and further design improvements' }
      ]
    }
  ]
},
{
  id: 3,
  title: 'Quadruped Robot Dog',
  period: 'Semester 5, 2024',
  summary: '12-DOF quadruped robot capable of walking and trotting using inverse kinematics, gait planning, and dynamic simulation in MATLAB/Simulink.',
  tags: ['ESP32', 'MATLAB/Simulink', 'Inverse Kinematics', '3D Printing'],
  image: "/assets/images/Screenshot_2026-05-04_082645-1777863440110.png",
  imageAlt: '12-DOF Quadruped Robot Dog',
  accentColor: 'border-violet-500/40',
  details: [
    {
      subtitle: 'Project Overview',
      period: 'Semester 5, 2024',
      description: 'Designed and developed a lightweight 12-DOF quadruped robot that mimics dog-like movements. Can be used as a pet or surveillance robot.',
      role: 'Lead Mechanical & Controls Engineer',
      achievement: '12-DOF Locomotion • Multiple Gait Implementation'
    },
    {
      subtitle: 'Mechanical Design',
      period: '',
      description: '12-DOF full-knee design (3 joints per leg). Optimized body-leg ratio (1.2:1). Body: 250×150mm, Leg links: 90mm each.',
      photos: [
        { src: '/assets/images/quad-leg-design.png', alt: 'Leg design with 3 servo motors' },
        { src: '/assets/images/quad-body-design.png', alt: 'Torso and hip joint design' }
      ]
    },
    {
      subtitle: 'Gait Planning',
      period: '',
      description: 'Selected Walk gait for stability. Used Bezier curves for foot trajectory planning.',
      photos: [
        { src: '/assets/images/quad-gait-diagram.png', alt: 'Walk gait timing diagram' },
        { src: '/assets/images/quad-footpath.png', alt: 'Bezier curve foot path planning' }
      ]
    },
    {
      subtitle: 'Dynamic Simulation & Torque Analysis',
      period: '',
      description: 'Full dynamic analysis in MATLAB/Simulink. Calculated maximum joint torques for different movements.',
      photos: [
        { src: '/assets/images/quad-torque1.png', alt: 'Motor 1 torque analysis' },
        { src: '/assets/images/quad-torque2.png', alt: 'Motor 2 & 3 torque analysis' }
      ]
    },
    {
      subtitle: 'Simulation Results',
      period: '',
      description: 'Various gait simulations performed:',
      videos: [
        { src: '/assets/videos/quadruped/standstill.mp4', alt: 'Standstill Simulation' },
        { src: '/assets/videos/quadruped/walk-gait.mp4', alt: 'Walk Gait Simulation' },
        { src: '/assets/videos/quadruped/walk-forward.mp4', alt: 'Walk Forward Gait' },
        { src: '/assets/videos/quadruped/walk-sideways.mp4', alt: 'Walk Sideways Gait' },
        { src: '/assets/videos/quadruped/sideways-gait.mp4', alt: 'Sideways Gait Simulation' }
      ]
    },
    {
      subtitle: 'Prototype & Control',
      period: '',
      description: 'Scaled-down physical prototype built with GUI control interface and real-time object detection using ESP32-CAM.',
      videos: [
        { src: '/assets/videos/quadruped/prototype-control.mp4', alt: 'Prototype Control & Object Detection' }
      ],
      photos: [
        { src: '/assets/images/quad-prototype.png', alt: 'Physical Prototype' },
        { src: '/assets/images/quad-gui.png', alt: 'GUI Control Interface' }
      ]
    }
  ]
},
{
  id: 4,
  title: 'Oil Distribution Automation System',
  period: 'Semester 6 · Internship',
  summary: 'QR code-based automated oil dispensing system using Delta PLC, HMI, load cell, and anti-theft detection. Improves safety, accuracy, and efficiency in industrial oil distribution.',
  tags: ['Delta PLC', 'HMI', 'Load Cell', 'QR Code', 'Industrial Automation'],
  image: "/assets/images/oil-full-setup.png",
  imageAlt: 'Industrial oil distribution automation system with PLC and HMI',
  accentColor: 'border-amber-500/40',
  details: [
    {
      subtitle: 'Project Overview',
      period: 'Semester 6, Internship at CICT',
      description: 'Developed a QR-based automated oil distribution system to eliminate manual errors, prevent theft, and improve accuracy in the container terminal. The system uses Delta PLC, HMI, load cell, and QR code scanning for secure and precise oil dispensing.',
      role: 'PLC & Automation Engineer',
      achievement: 'Anti-Theft Detection • Precise Weight-Based Dispensing'
    },
    {
      subtitle: 'System Architecture',
      period: '',
      description: 'The system consists of Delta PLC, 2 HMIs, 4 solenoid valves, load cell, QR code scanner, and thermal printer. One HMI is in the warehouse for oil selection, while the other displays request details at the dispensing point.',
      photos: [
        { src: '/assets/images/oil-wiring-diagram.png', alt: 'Wiring diagram of oil distribution automation system' },
        { src: '/assets/images/oil-full-setup.png', alt: 'Complete oil automation system with load cell' }
      ]
    },
    {
      subtitle: 'Hardware Components',
      period: '',
      description: '• Oil tanks on elevated platform\n• 4 Solenoid valves for different oil types\n• Load cell for accurate weight measurement\n• QR code scanner\n• Thermal printer for QR code generation\n• Manual valves for emergency stop',
      photos: [
        { src: '/assets/images/oil-solenoid-valves.png', alt: '4 Solenoid valves for oil distribution' },
        { src: '/assets/images/oil-panel-board.png', alt: 'Panel board with Delta PLC' },
        { src: '/assets/images/oil-hmi.png', alt: 'Delta HMI for oil request and dispensing' }
      ]
    },
    {
      subtitle: 'QR Code Workflow & Anti-Theft',
      period: '',
      description: 'Each oil request generates a unique QR code containing oil type, quantity, time, and requester. The QR is scanned at the workshop. Anti-theft logic automatically stops dispensing if abnormal flow is detected.',
      photos: [
        { src: '/assets/images/oil-qr-code.png', alt: 'Printed QR code for oil request' }
      ]
    },
    {
      subtitle: 'Key Features',
      period: '',
      description: '• Weight-based precise dispensing using load cell\n• Anti-theft detection with automatic shutdown\n• Hold function for large requests (container change without stopping)\n• Data logging (up to 16 records) with daily reports saved to USB',
    }
  ]
},
{
  id: 5,
  title: 'Truck Alignment Detection System',
  period: 'Semester 6 · Internship',
  summary: 'Vision-based truck alignment assistance system using NVIDIA Jetson Nano, YOLO object detection, and real-time feedback via P10 LED matrix to improve container handling efficiency at CICT.',
  tags: ['YOLO', 'Jetson Nano', 'Arduino', 'Computer Vision', 'Ethernet'],
  image: "/assets/images/4f-1777863591218.jpg",
  imageAlt: 'Truck alignment detection system with camera and LED feedback',
  accentColor: 'border-emerald-500/40',
  details: [
    {
      subtitle: 'Project Overview',
      period: 'Semester 6, Internship at CICT',
      description: 'Developed a vision-based Truck Alignment Assistance System to guide Prime Movers accurately under Quay Cranes. The system calculates lateral offset in real-time and provides visual feedback to drivers, significantly reducing misalignment delays and improving safety.',
      role: 'Computer Vision & Systems Engineer',
      achievement: 'Real-time YOLO Detection • Ethernet Communication • Visual Driver Guidance'
    },
    {
      subtitle: 'System Architecture',
      period: '',
      description: 'High-resolution camera feeds data to NVIDIA Jetson Nano AGX running a custom YOLO model. Jetson processes images to calculate truck offset and sends data to Arduino via Ethernet (UDP). Arduino controls a P10 LED matrix to display directional arrows and distance feedback.',
      photos: [
        { src: '/assets/images/truck-wiring-diagram.png', alt: 'Wiring diagram of truck alignment system' }
      ]
    },
    {
      subtitle: 'Key Technologies',
      period: '',
      description: '• NVIDIA Jetson Nano AGX + YOLOv5 for real-time truck detection\n• Arduino Uno + Ethernet Shield for control logic\n• P10 RGB LED Matrix for driver feedback\n• Push-button panel for lane selection (20ft / 40ft / 45ft)',
    },
    {
      subtitle: 'System Workflow',
      period: '',
      description: 'Camera detects truck → Jetson calculates offset using YOLO → Sends data to Arduino → LED panel shows Forward/Backward arrows and distance guidance.',
      photos: [
        { src: '/assets/images/truck-led-testing.png', alt: 'Testing of P10 LED panel logic' },
        { src: '/assets/images/truck-led-installation.png', alt: 'LED panel installation on site' },
        { src: '/assets/images/truck-alignment-testing.png', alt: 'Testing and calibrating alignment logic' }
      ]
    },
    {
      subtitle: 'Technical Challenges & Solutions',
      period: '',
      description: '• Solved system freezing using Python multithreading (3 threads)\n• Fixed data corruption with start/stop markers (#123\\n)\n• Resolved communication port conflicts\n• Improved stability by mounting camera on QC sill beam',
    }
  ]
},
{
  id: 6,
  title: 'Autonomous Assistive Robot for Elderly with Sarcopenia',
  period: 'Final Year Project • 2025/2026',
  summary: 'Designed and developed an integrated autonomous robotic wheelchair with self-transfer mechanism, caregiver following, and continuous health monitoring to enhance independence of elderly individuals suffering from Sarcopenia.',
  tags: ['ROS2', 'Assistive Robotics', 'Computer Vision', 'SLAM', 'Mechanical Design', 'FEA'],
  image: "/assets/images/assistive-robot-main.png",
  imageAlt: 'Autonomous Assistive Robot for Elderly Care',
  accentColor: 'border-emerald-500/40',
  details: [
    {
      subtitle: 'Project Overview',
      period: 'Semester 7 & 8, 2025–2026',
      description: 'Developed a comprehensive assistive robotic wheelchair system for elderly individuals with Sarcopenia. The system integrates mobility, safe self-transfer capability, intelligent human-following, and continuous health monitoring to enhance user independence and reduce caregiver burden.',
      role: 'Team Lead – Mechanical Design & System Integration',
      achievement: 'Self-Transfer Mechanism • ROS2 Navigation • Caregiver Tracking'
    },
    {
      subtitle: 'Key Features',
      period: '',
      description: '• Self-transfer split-chair mechanism\n• ROS2-based autonomous navigation and SLAM\n• Real-time caregiver following using computer vision\n• Continuous health monitoring (SpO₂, Pulse rate)\n• Belt-driven front wheel steering system',
      photos: [
        { src: '/assets/images/assistive-robot-full-design.png', alt: 'Complete CAD model of the assistive robot' },
        { src: '/assets/images/assistive-robot-transfer-mechanism.png', alt: 'Self-transfer split chair mechanism' },
        { src: '/assets/images/assistive-robot-prototype.png', alt: 'Fabricated physical prototype' }
      ]
    },
    {
      subtitle: 'Mechanical Design',
      period: '',
      description: 'Three-wheel front-drive mobile platform with belt-driven steering. Novel split-chair self-transfer mechanism with ergonomic considerations. Structural validation using Finite Element Analysis (FEA).',
    },
    {
      subtitle: 'Low Level Controller',
      period: '',
      description: 'The low-level controller handles real-time motor control, sensor data acquisition, and safety functions. It communicates with the high-level ROS2 system.',
      photos: [
        { src: '/assets/images/assistive-robot-low-level-circuit.png', alt: 'Low Level Controller Circuit Diagram' }
      ]
    },
    {
      subtitle: 'Low Level Controller Components',
      period: '',
      description: '• Main Microcontroller (ESP32 / Arduino Mega)\n• BTS7960 / High-current Motor Drivers (for drive & steering motors)\n• HC-12 Wireless Module for remote control\n• MPU6050 IMU + HMC5883L Magnetometer\n• Encoders for wheel feedback\n• Emergency stop button and safety relays',
    },
    {
      subtitle: 'Remote Controller',
      period: '',
      description: 'A wireless remote controller was developed for manual override and emergency control. It uses HC-12 module for reliable long-range communication with the low-level controller.',
      photos: [
        { src: '/assets/images/assistive-robot-remote-controller.png', alt: 'Remote Controller Circuit and Design' }
      ]
    },
    {
      subtitle: 'Control & Perception System',
      period: '',
      description: 'Hybrid architecture using ROS2 for high-level tasks (SLAM, navigation, human tracking) and low-level microcontroller for real-time motor control and sensor fusion.',
    },
    {
      subtitle: 'Demonstration Video ',
      period: '',
      description: 'Watch the working prototype in action:',
      videos: [
        { src: '/assets/videos/assistive-robot-demo.mp4', alt: 'Full Demonstration of Autonomous Assistive Robot' }
      ]
    }
  ]
},
{
    id: 7,
    title: 'Automated ACB Re-Powering System',
    period: 'Semester 6 · Internship',
    summary: 'PLC-based automation of Air Circuit Breaker (ACB) re-powering in DC 680V distribution system using Siemens LOGO! PLC and geared motors.',
    tags: ['Siemens LOGO PLC', 'Industrial Automation', 'DC 680V', 'Power Distribution'],
    image: "/assets/images/acb-installation.png",
    imageAlt: 'Automated ACB Re-Powering System using Siemens LOGO PLC',
    accentColor: 'border-rose-500/40',
    details: [
      {
        subtitle: 'Project Overview',
        period: 'Semester 6, Internship at CICT',
        description: 'Developed an automated solution to re-power Masterpact NT Air Circuit Breakers (ACBs) in the E-RTG yard during power sags.',
        role: 'PLC Automation Engineer',
        achievement: 'Reduced recovery time from ~20-30 minutes'
      },
      {
        subtitle: 'Problem Statement',
        period: '',
        description: 'During power sags, 40 ACBs trip requiring manual closing by technicians, causing major downtime.'
      },
      {
        subtitle: 'System Architecture',
        period: '',
        description: '• Siemens LOGO! PLC for control logic\n• Geared motor mechanically coupled to ACB\n• Retry logic with timers and fault detection',
        photos: [
          { src: '/assets/images/acb-before.png', alt: 'Before automation' },
          { src: '/assets/images/acb-after.png', alt: 'After automation' }
        ]
      },
      {
        subtitle: 'Operational Logic',
        period: '',
        description: 'Detects trip → Waits 45s → Closes ACB with motor → Retries up to 2 times → Flags persistent faults',
        videos: [
          { src: '/assets/videos/acb/acb-manual-off.mp4', alt: 'Manual Switch Off Test' },
          { src: '/assets/videos/acb/acb-power-sag.mp4', alt: 'Power Sag Simulation' }
        ]
      },
      {
        subtitle: 'Key Components',
        period: '',
        description: '• Siemens LOGO! PLC\n• Geared Motor Assembly\n• Masterpact NT ACB',
        photos: [
          { src: '/assets/images/acb-plc-program.png', alt: 'PLC Program' },
          { src: '/assets/images/acb-wiring.png', alt: 'Wiring Diagram' }
        ]
      }
    ]
},

{
  id: 8,
  title: 'Electrostatic Microvalve with Integrated Position Sensing',
  period: 'ME4701 - Micro/Nano Systems Engineering',
  summary: 'Designed and simulated a normally-closed electrostatic microvalve with integrated piezoresistive position sensing for precise fluid control in Lab-on-a-Chip (LOC) devices.',
  tags: ['MEMS', 'Electrostatic Actuation', 'Piezoresistive Sensing', 'Microfluidics', 'COMSOL'],
  image: "/assets/images/microvalve-main.png",
  imageAlt: 'Electrostatic Microvalve with Integrated Position Sensing',
  accentColor: 'border-sky-500/40',
  details: [
    {
      subtitle: 'Project Overview',
      period: '',
      description: 'Developed an advanced electrostatic microvalve featuring a flexible Polyimide diaphragm and integrated piezoresistive sensor for real-time position feedback. Designed for high-precision fluid control in Lab-on-a-Chip applications.',
      role: 'MEMS Designer & Simulation Engineer',
      achievement: 'Simulated up to 7.04 µm deflection at 110V • On/Off flow ratio of 712'
    },
    {
      subtitle: 'Project Design',
      period: '',
      description: 'The microvalve consists of three main layers: Bottom actuation chamber, middle active diaphragm with piezoresistive element, and top fluid channel with semi-circular valve seat.',
      photos: [
        { src: '/assets/images/microvalve-full-design.png', alt: 'Complete 3D design of the electrostatic microvalve' },
        { src: '/assets/images/microvalve-actuation-chamber.png', alt: 'Actuation Chamber (Bottom)' },
        { src: '/assets/images/microvalve-diaphragm.png', alt: 'Active Diaphragm (Middle)' },
        { src: '/assets/images/microvalve-fluid-channel.png', alt: 'Fluid Channel & Valve Seat (Top)' }
      ]
    },
    {
      subtitle: 'Actuation Mechanism',
      period: '',
      description: 'Electrostatic actuation is achieved by applying voltage between the top electrode on the Polyimide diaphragm and the grounded bottom silicon electrode.',
    },
    {
      subtitle: 'Position Sensing Method',
      period: '',
      description: 'Piezoresistive element integrated on the diaphragm detects strain due to deflection and provides real-time position feedback.',
      photos: [
        { src: '/assets/images/microvalve-piezoresistive-sensing.png', alt: 'Piezoresistive Position Sensing' }
      ]
    },
    {
      subtitle: 'Leakage Analysis',
      period: '',
      description: 'Leakage flow through 0.5 µm residual gap was simulated. Valve maintains good sealing up to 20 kPa.',
      photos: [
        { src: '/assets/images/microvalve-leakage-pressure.png', alt: 'Leakage pressure simulation' },
        { src: '/assets/images/microvalve-leakage-graph.png', alt: 'Leakage pressure graph' }
      ]
    },
    {
      subtitle: 'Diaphragm Deflection',
      period: '',
      description: 'Maximum deflection of 7.04 µm achieved at 110V.',
      photos: [
        { src: '/assets/images/microvalve-deflection.png', alt: 'Diaphragm Deflection Characteristics' }
      ]
    },
    {
      subtitle: 'Flow Rate Modulation',
      period: '',
      description: 'Flow rate vs actuation voltage showing leakage, transition, and fully open regions. Peak flow: 9.76 × 10⁻⁸ kg/s at 110V.',
      photos: [
        { src: '/assets/images/microvalve-flow-rate.png', alt: 'Flow Rate Modulation vs Voltage' },
        { src: '/assets/images/microvalve-flow-curve.png', alt: 'Flow Response Curve' }
      ]
    },
    {
      subtitle: 'Fabrication Process',
      period: '',
      description: 'Proposed fabrication steps using Deep Reactive Ion Etching, Polyimide deposition, and wet chemical release.',
      photos: [
        { src: '/assets/images/microvalve-fabrication-1.png', alt: 'Fabrication Step 1' },
        { src: '/assets/images/microvalve-fabrication-2.png', alt: 'Fabrication Step 2' },
        { src: '/assets/images/microvalve-fabrication-3.png', alt: 'Fabrication Step 3' }
      ]
    }
  ]
}];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
        const cards = cardsRef.current.querySelectorAll('.project-card-item');
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
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
    <>
      <section id="projects" ref={sectionRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div ref={lineRef} className="section-line mb-8" />
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-primary uppercase tracking-[0.4em]">04 / Projects</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                What I&apos;ve <span className="text-primary italic">Built</span>
              </h2>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                From AUVs competing internationally to industrial PLC systems — click any card for full details.
              </p>
            </div>
          </div>

          {/* Projects Grid — 3 cols, 2 rows = 6 cards */}
          {/* Row 1: [col-1: Diyakawa AUV] [col-2: Bicycle Brake] [col-3: Quadruped] */}
          {/* Row 2: [col-1: Oil Distribution] [col-2: Truck Alignment] [col-3: ACB/FYP] */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
            /* STEP 4 JSX comment: project-card-item */
            <div
              key={project.id}
              className={`project-card-item opacity-100 project-card bg-card border ${project.accentColor} rounded-2xl overflow-hidden cursor-pointer group`}
              onClick={() => setSelectedProject(project)}>
              
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <AppImage
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="font-mono text-xs text-muted-foreground mb-2 tracking-wide">{project.period}</p>
                  <h3 className="text-base font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) =>
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                    
                        {tag}
                      </span>
                  )}
                    {project.tags.length > 3 &&
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                  }
                  </div>

                  {/* Show More */}
                  <button className="flex items-center gap-1.5 text-primary text-sm font-bold tracking-wide group-hover:gap-3 transition-all duration-300">
                    <span>Show More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>)
            )}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject &&
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)} />

      }
    </>);

}
