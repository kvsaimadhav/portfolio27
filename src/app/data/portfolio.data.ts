export interface SocialLink { label: string; url: string; icon: string; }
export interface Experience { company: string; role: string; period: string; duration: string; current?: boolean; highlights: string[]; technologies: string[]; }
export interface SkillGroup { title: string; description: string; skills: string[]; }
export interface Education { degree: string; institution: string; period: string; score: string; description: string; highlights: string[]; }
export interface Recognition { title: string; organization: string; year: number; description: string; type: string; }
export interface Project { title: string; category: string; year: string; description: string; problem?: string; solution?: string; impact?: string; technologies: string[]; github?: string; featured?: boolean; }

export const SOCIALS: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sai-madhav-761759335/', icon: 'in' },
  { label: 'GitHub', url: 'https://github.com/kvsaimadhav', icon: 'gh' },
  { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/23655247/sai-madhav', icon: 'so' },
  { label: 'X / Twitter', url: 'https://twitter.com/kvsaimadhav', icon: 'x' },
  { label: 'Email', url: 'mailto:kvsaimadhav@gmail.com', icon: '@' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Ekluvya', role: 'Senior Software Developer', period: 'Dec 2024 – Present', duration: 'Current', current: true,
    technologies: ['Angular', 'AWS', 'CI/CD', 'System Design', 'DevOps', 'GitHub Actions', 'Jenkins'],
    highlights: [
      'Lead a 15-member engineering team through the complete software development lifecycle, combining delivery ownership with hands-on mentoring and technical direction.',
      'Administer AWS environments with sustained attention to security, scalability, operational resilience, and cost-conscious infrastructure decisions.',
      'Coordinate cross-functional delivery for multiple in-house products, translating tight timelines into clear engineering priorities and dependable releases.',
      'Introduced CI/CD automation with GitHub Actions and Jenkins, improving deployment efficiency by approximately 30% and strengthening release consistency.'
    ]
  },
  {
    company: 'Neemus Software Solutions', role: 'Software Engineer', period: 'Aug 2023 – Sep 2024', duration: '1+ year',
    technologies: ['Defense Projects', 'Team Leadership', 'Compliance', 'Documentation'],
    highlights: [
      'Contributed to defense technology projects for LRDE and ADA while working within classified security protocols and tightly controlled engineering environments.',
      'Led a four-member team, aligning implementation and documentation with defense-grade standards, regulatory expectations, and delivery requirements.',
      'Delivered two key projects successfully, earning formal appreciation and recognition from project mentors.',
      'Produced structured documentation and knowledge-transfer material to support continuity across mission-critical systems.'
    ]
  },
  {
    company: 'DRDO – DRDL', role: 'Server Engineer', period: 'Aug 2022 – Aug 2023', duration: '1+ year',
    technologies: ['Oracle DB', 'Java', 'JSP', 'Linux', 'Database Administration'],
    highlights: [
      'Maintained Oracle database environments supporting mission-critical systems and a documented 99.9% uptime service-level objective.',
      'Modernized legacy user-interface architecture with Java and JSP, improving usability while respecting the constraints of established systems.',
      'Mentored junior engineers and trained apprentices, strengthening knowledge continuity and day-to-day operational readiness.',
      'Applied database and query optimization techniques that improved recorded query performance by 40%.'
    ]
  },
  {
    company: 'Strategic Solutions Group LLC', role: 'Jr. Full Stack Software Engineer', period: 'Oct 2021 – Feb 2022', duration: '4 months',
    technologies: ['Java', 'JSP', 'Servlets', 'Struts', 'AWS WorkSpaces', 'Maven'],
    highlights: [
      'Developed end-to-end enterprise web functionality using Java, JSP, Servlets, and the Apache Struts MVC framework.',
      'Built and maintained a Maven-based application with a structured Servlet backend and dynamic JSP presentation layer.',
      'Worked through AWS WorkSpaces to support a secure, cloud-hosted development environment and distributed team collaboration.',
      'Applied enterprise engineering practices focused on application performance, maintainability, and dependable delivery.'
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  { title: 'Frontend Engineering', description: 'Component-driven web experiences built for accessibility, maintainability, and consistent behavior across modern and enterprise applications.', skills: ['Angular', 'AngularJS', 'ReactJS', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS'] },
  { title: 'Backend & APIs', description: 'Server-side development spanning modern JavaScript services, enterprise Java applications, persistence layers, and RESTful integrations.', skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'Hibernate ORM', 'JSP', 'Servlets', 'Struts', 'REST APIs', 'Python'] },
  { title: 'Cloud Infrastructure', description: 'AWS infrastructure and managed services used to deliver secure, scalable, available, and operationally practical application environments.', skills: ['AWS', 'EC2', 'S3', 'IAM', 'Lambda', 'RDS', 'CloudFront', 'CloudWatch', 'AWS WorkSpaces'] },
  { title: 'DevOps & Platform', description: 'Automated delivery pipelines, containerized workloads, orchestration, edge delivery, and Linux operations for repeatable production releases.', skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'CI/CD', 'Nginx', 'Linux', 'Git'] },
  { title: 'Data & Streaming', description: 'Reliable database operations and media-delivery workflows, covering recovery, performance optimization, transcoding, and adaptive streaming.', skills: ['Oracle DB', 'PL/SQL', 'MongoDB', 'PostgreSQL', 'Backup & Recovery', 'Query Optimization', 'HLS', 'RTMP', 'WebRTC', 'FFmpeg'] },
  { title: 'Engineering Leadership', description: 'Delivery ownership grounded in team enablement, clear technical decisions, production awareness, and continuous process improvement.', skills: ['Team Leadership', 'Mentoring', 'Agile Practices', 'Scrum', 'System Design', 'Production Support'] }
];

export const PROJECTS: Project[] = [
  {
    title: 'Ekluvya — Scalable OTT Learning Platform', category: 'Product & Cloud Engineering', year: '2024', featured: true,
    description: 'A production-focused streaming and learning platform combining responsive frontend engineering with scalable cloud delivery and automated media workflows.',
    problem: 'Growing traffic and content volumes required stable playback, scalable delivery, and a release process that could be repeated safely and consistently.',
    solution: 'Implemented HLS-compatible playback, automated server-side FFmpeg transcoding, connected S3-backed storage with CDN distribution, and established CI/CD workflows with rollback support.',
    impact: 'Improved streaming stability while reducing deployment time from 45 minutes to 10 minutes, making releases faster and more operationally predictable.',
    technologies: ['Angular', 'TypeScript', 'AWS', 'FFmpeg', 'HLS', 'CloudFront', 'S3', 'Docker']
  },
  {
    title: 'Oracle Database Operations & Reliability', category: 'Infrastructure', year: '2022', featured: true,
    description: 'Operational engineering for mission-critical Oracle environments, centered on database health, recovery readiness, automation, and reliable day-to-day support.',
    problem: 'Manual backup and recovery procedures introduced avoidable operational risk and inconsistencies in availability management.',
    solution: 'Automated backup scheduling and validation, documented repeatable restore playbooks, and introduced monitoring for database health and recovery preparedness.',
    impact: 'Strengthened recovery confidence, improved operational consistency, and reduced the drift associated with repetitive manual procedures.',
    technologies: ['Oracle DB', 'Linux', 'Shell', 'Backup & Recovery']
  },
  {
    title: 'Angular Portfolio — Professional Engineering Profile', category: 'Open Source', year: '2025',
    description: 'A responsive personal platform that presents engineering experience, technical capabilities, and project outcomes through an accessible recruiter-focused journey.',
    problem: 'Professional work spanning full-stack development, cloud infrastructure, and operations needed a single clear and credible presentation layer.',
    solution: 'Built a modular standalone Angular application with typed portfolio data, responsive layouts, theme persistence, native interactions, and Netlify deployment.',
    impact: 'Provides hiring teams and engineering leaders with a concise view of professional scope, delivery experience, and direct contact options.',
    technologies: ['Angular', 'TypeScript', 'Netlify', 'Lighthouse'], github: 'https://github.com/kvsaimadhav/portfolio27'
  },
  {
    title: 'Client-Puzzle Anti-DDoS Research Prototype', category: 'Research', year: '2019',
    description: 'An applied research prototype examining client-side proof-of-work as a way to discourage automated abusive traffic without unnecessarily obstructing legitimate users.',
    problem: 'The research challenge was to increase the cost of automated attack behavior while preserving a practical experience for legitimate clients.',
    solution: 'Designed client-puzzle and proof-of-work concepts, developed analytical models, and implemented a working prototype for structured evaluation.',
    impact: 'Produced reproducible research artifacts and a demonstrable application supporting the associated thesis work.',
    technologies: ['Python', 'Django', 'Jupyter', 'Data Science']
  },
  {
    title: 'Web Scraping & Research Data Preparation', category: 'Academic', year: '2018',
    description: 'A repeatable data acquisition and preparation workflow that converted unstructured web sources into curated datasets for academic analysis.',
    problem: 'Research inputs were distributed across web sources and required consistent collection, cleaning, and structuring before analysis.',
    solution: 'Combined browser automation and HTML parsing to collect source material, normalize records, and produce analysis-ready datasets.',
    impact: 'Enabled more reliable academic exploration through structured, reusable, and consistently prepared research data.',
    technologies: ['Python', 'Selenium', 'BeautifulSoup']
  }
];

export const EDUCATION: Education[] = [
  { degree: 'Master of Science', institution: 'Central Michigan University', period: '2020 – 2021', score: '3.93 / 4.0', description: 'Graduate study in Computer Science with a specialization in Cloud Computing and Distributed Systems, including advanced work in microservices architecture and containerization.', highlights: ["Dean's List", 'Cloud Computing Specialization', 'Distinction'] },
  { degree: 'Bachelor of Engineering', institution: 'BITS Pilani, Hyderabad', period: '2014 – 2018', score: '7.71 / 10.0', description: 'Electronics and Communication Engineering supported by a strong technical foundation in software development, algorithms, system design, and research.', highlights: ['Merit Scholar', 'Top 10%', 'Research Thesis'] },
  { degree: 'Intermediate (XII)', institution: 'SR Educational Center', period: '2012 – 2014', score: '97.8%', description: 'Focused academic preparation across Mathematics, Physics, Chemistry, and Computer Science, establishing the analytical foundation for later engineering study.', highlights: ['State Merit', 'Science Excellence'] },
  { degree: 'Secondary (X)', institution: 'Warangal Public School', period: '2011 – 2012', score: '95.0%', description: 'Completed secondary education with distinction in Mathematics and Science and a sustained record of academic merit.', highlights: ['Distinction', 'Merit Certificate'] }
];

export const RECOGNITIONS: Recognition[] = [
  { title: 'Excellence in Software Development', organization: 'Tech Community India', year: 2022, type: 'Technical', description: 'Recognized for sustained contributions across cloud architecture, backend development, and disciplined software engineering execution.' },
  { title: 'IT Olympiad Finalist', organization: 'College of Engineering Pune — Rotaract Club', year: 2017, type: 'Technical', description: 'Reached the finalist stage in a national-level IT competition, demonstrating technical problem-solving and applied computing knowledge.' },
  { title: 'BOSM Silver Medal', organization: 'BITS Pilani, Hyderabad', year: 2016, type: 'Sports', description: 'Earned a silver medal in Carrom at the BOSM inter-college sports festival through competitive focus and consistent performance.' },
  { title: 'Outstanding Student Leader', organization: 'University Academic Council', year: 2015, type: 'Leadership', description: 'Recognized for leadership, initiative, and meaningful contribution to university student-development activities.' },
  { title: 'PMSS Awardee', organization: 'Kendriya Sainik Board, India', year: 2014, type: 'Scholarship', description: 'Selected for the Prime Minister’s Scholarship Scheme in recognition of academic excellence and sustained merit.' },
  { title: 'INSPIRE Scholarship', organization: 'MHRD, Government of India', year: 2014, type: 'Academic', description: 'Received national scholarship recognition for academic distinction and achievement in science education.' }
];
