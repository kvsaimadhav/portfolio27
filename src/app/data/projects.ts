export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'employment' | 'github' | 'academic' | 'masters';
  status: 'completed' | 'in-progress';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  year?: number;
}

export const PROJECTS: Project[] = [
  {
    id: 'ekluvya-ott',
    title: 'Ekluvya — Scalable OTT Learning Platform',
    description:
      'Delivered frontend and cloud engineering for a streaming platform, improving playback reliability, deployment automation, and system scalability under real-world usage conditions.',
    category: 'employment',
    status: 'completed',
    technologies: ['Angular', 'TypeScript', 'AWS', 'FFmpeg', 'HLS', 'CDN', 'Docker'],
    problem:
      'The platform needed stable playback performance and repeatable delivery workflows as traffic and content volume increased.',
    solution:
      'Implemented HLS-compatible streaming behavior, automated server-side transcoding with FFmpeg, integrated CDN and S3-backed storage, and built CI/CD pipelines with rollback support for safer releases.',
    impact:
      'Improved streaming stability and reduced deployment time from 45 minutes to 10 minutes, increasing operational confidence and release efficiency.',
    year: 2024
  },
  {
    id: 'oracle-maintenance',
    title: 'Oracle Database Operations & Reliability Support',
    description:
      'Supported mission-critical database environments through automation, backup strategy, and operational hardening for defense-aligned systems.',
    category: 'employment',
    status: 'completed',
    technologies: ['OracleDB', 'Linux', 'Shell', 'Backup/Restore'],
    problem: 'Manual backup and recovery procedures introduced operational risk and created inconsistencies in availability management.',
    solution: 'Automated backup scheduling, validation, and restore playbooks while introducing monitoring for database health, recovery readiness, and incident response.',
    impact: 'Strengthened recovery confidence and reduced manual operational drift across critical systems.',
    year: 2022
  },
  {
    id: 'angular-portfolio',
    title: 'Angular Portfolio — Personal Brand Experience',
    description:
      'Built a polished, accessible portfolio experience with responsive UI architecture, structured content delivery, and a streamlined path to resume and contact engagement.',
    category: 'github',
    status: 'in-progress',
    technologies: ['Angular', 'TypeScript', 'Netlify', 'Lighthouse'],
    githubUrl: 'https://github.com/kvsaimadhav/portfolio27',
    problem: 'There was a need for a single, modern space to present professional work and make outreach easier for hiring teams.',
    solution: 'Implemented an accessible single-page application with modular component structure, performance-conscious rendering, and clear interaction patterns for resume and contact access.',
    impact: 'Improves professional visibility and provides a consistent, high-quality entry point for applications and networking.',
    year: 2025
  },
  {
    id: 'masters-ddos',
    title: 'Client-Puzzle Anti-DDoS Research Prototype',
    description: 'Explored client-side proof-of-work mechanisms as a research-driven approach to reducing abusive traffic while preserving legitimate user experience.',
    category: 'masters',
    status: 'completed',
    technologies: ['Python', 'Django', 'Jupyter', 'Data Science'],
    problem: 'The challenge was to mitigate automated attack behavior without introducing friction for legitimate users.',
    solution:
      'Designed client-puzzle and proof-of-work concepts, then built analytical models and a working prototype to evaluate deterrence effectiveness from both system and attacker-behavior perspectives.',
    impact: 'Produced reproducible research artifacts and a demonstrable application that supported the thesis work.',
    year: 2019
  },
  {
    id: 'web-scrape',
    title: 'Web Scraping & Data Preparation for Research',
    description: 'Developed data collection and cleaning pipelines for academic analysis, transforming raw web sources into structured, usable datasets with repeatable processing logic.',
    category: 'academic',
    status: 'completed',
    technologies: ['Python', 'Selenium', 'BeautifulSoup'],
    impact: 'Enabled structured analysis and supported academic exploration with reliable, curated data.',
    year: 2018
  }
];
