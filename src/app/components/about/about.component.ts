import { Component } from '@angular/core';
import type { OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { Subject } from 'rxjs';

interface CodeBlock {
  id: string;
  title: string;
  language: string;
  code: string;
}

interface AboutTab {
  id: string;
  label: string;
  icon: string;
  content: string;
  points: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms 100ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerContainer', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(40px)' }),
        animate('600ms 150ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit, OnDestroy {
  isDark = true;
  activeTab = 'profile';
  isCodeAnimating = false;
  copyFeedback = false;
  private destroy$ = new Subject<void>();
  private typeInterval: any;

  // About tabs
  aboutTabs: AboutTab[] = [
    {
      id: 'profile',
      label: 'Profile',
      icon: '◉',
      content: 'I work at the intersection of systems administration, cloud operations, and DevOps delivery, with a focus on building dependable environments that support long-term reliability.',
      points: [
        '4+ years supporting production-facing infrastructure and operations.',
        'Hands-on exposure to AWS-based delivery and environment reliability.',
        'Practical experience across service stability, automation, and support execution.'
      ]
    },
    {
      id: 'focus',
      label: 'Operational Focus',
      icon: '⚙️',
      content: 'My work is centered on strengthening platform resilience, reducing operational friction, and creating systems that scale without compromising stability.',
      points: [
        'Reliability-first thinking for infrastructure and service continuity.',
        'Automation and process improvement to reduce repetitive operational work.',
        'Clear execution across cloud environments, environments, and delivery workflows.'
      ]
    },
    {
      id: 'growth',
      label: 'Leadership Mindset',
      icon: '🎯',
      content: 'I aim to contribute with a thoughtful engineering mindset that balances execution quality, operational discipline, and continuous improvement.',
      points: [
        'Strong ownership over environment health and delivery consistency.',
        'Collaborative approach to supporting teams and business goals.',
        'Focus on sustained quality, resilience, and dependable execution.'
      ]
    }
  ];

  // Code blocks for live typing
  codeBlocks: CodeBlock[] = [
    {
      id: 'profile',
      title: 'Developer Profile',
      language: 'javascript',
      code: `const developer = {
  name: "K. V. Sai Madhav",
  role: "Senior Software Developer",
  location: "India",
  experience: "4+ Years",
  
  skills: {
    backend: ["MEAN","ReactJS", "Java", "Spring Boot", "Node.js"],
    cloud: ["AWS", "Lambda", "RDS", "S3"],
    databases: ["Oracle DB", "PostgreSQL"],
    streaming: ["HLS", "RTMP", "WebRTC"]
  },
  
  certifications: ["AWS Developer Associate"],
  leadership: true,
  passion: "Building scalable systems"
}`
    },
    {
      id: 'passion',
      title: 'What Drives Me',
      language: 'javascript',
      code: `const myPassion = {
  motivation: "Solving complex problems",
  
  interests: [
    "Cloud Architecture",
    "Database Optimization",
    "System Design",
    "Open Source Contribution"
  ],
  
  philosophy: {
    codeQuality: "Clean, maintainable",
    teamwork: "Collaborative",
    learning: "Continuous improvement"
  },
  
  impact: "Creating solutions for millions"
}`
    },
    {
      id: 'goals',
      title: 'Future Vision',
      language: 'javascript',
      code: `const futureGoals = {
  shortTerm: {
    leadProjects: true,
    mentorTeam: true,
    contributeOpenSource: true
  },
  
  longTerm: {
    architectSystems: "Enterprise Scale",
    leadTeam: "Technical Director",
    innovate: "New Technologies"
  },
  
  values: [
    "Excellence",
    "Innovation",
    "Collaboration",
    "Continuous Learning"
  ],
  
  timeline: "5 Years"
}`
    }
  ];

  // Displayed code
  displayedCode = '';
  currentCodeBlock: CodeBlock | null = null;
  private typeIndex = 0;
  private typeSpeed = 30;

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.setupSEO();
    this.loadCodeBlock(this.codeBlocks[0]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.typeInterval) {
      clearTimeout(this.typeInterval);
    }
  }

  /**
   * Setup SEO metadata
   */
  private setupSEO(): void {
    this.title.setTitle('About K. V. Sai Madhav – Systems Engineering & Cloud Operations');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Learn about K. V. Sai Madhav, a systems engineering-focused professional with experience in AWS cloud delivery, DevOps execution, and operational reliability.'
      },
      {
        property: 'og:title',
        content: 'About K. V. Sai Madhav – Systems Engineering & Cloud Operations'
      },
      {
        property: 'og:description',
        content: 'Systems engineering and cloud operations professional focused on reliability, automation, and dependable service delivery.'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ]);
  }

  /**
   * Switch to a different tab and load corresponding code
   */
  switchTab(tabId: string): void {
    if (this.activeTab === tabId) return;
    
    this.activeTab = tabId;
    const codeBlock = this.codeBlocks.find(block => block.id === tabId);
    if (codeBlock) {
      this.loadCodeBlock(codeBlock);
    }
    this.trackTabSwitch(tabId);
  }

  /**
   * Load and animate a code block
   */
  private loadCodeBlock(codeBlock: CodeBlock): void {
    // Clear previous animation
    if (this.typeInterval) {
      clearTimeout(this.typeInterval);
    }

    this.currentCodeBlock = codeBlock;
    this.displayedCode = '';
    this.typeIndex = 0;
    this.isCodeAnimating = true;
    this.startTyping();
  }

  /**
   * Typing animation for code
   */
  private startTyping(): void {
    const code = this.currentCodeBlock?.code || '';
    
    const type = () => {
      if (this.typeIndex < code.length) {
        this.displayedCode += code[this.typeIndex++];
        this.typeInterval = setTimeout(type, this.typeSpeed);
      } else {
        this.isCodeAnimating = false;
      }
    };
    
    type();
  }

  /**
   * Reset typing animation
   */
  resetCode(): void {
    if (this.currentCodeBlock) {
      this.loadCodeBlock(this.currentCodeBlock);
    }
  }

  /**
   * Copy code to clipboard with feedback
   */
  copyCode(): void {
    if (this.displayedCode) {
      navigator.clipboard.writeText(this.displayedCode).then(() => {
        this.showCopyFeedback();
        this.trackCodeCopy();
      }).catch(err => {
        console.error('Failed to copy code:', err);
      });
    }
  }

  /**
   * Show copy feedback animation
   */
  private showCopyFeedback(): void {
    this.copyFeedback = true;
    setTimeout(() => {
      this.copyFeedback = false;
    }, 2000);
  }

  /**
   * Get current tab object
   */
  getCurrentTab(): AboutTab | undefined {
    return this.aboutTabs.find(tab => tab.id === this.activeTab);
  }

  /**
   * Get line count for code
   */
  getLineCount(): number {
    return this.displayedCode.split('\n').length;
  }

  /**
   * Track tab switches for analytics
   */
  private trackTabSwitch(tabId: string): void {
    try {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'about_tab_switch', {
          tab: tabId,
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  /**
   * Track code copy
   */
  private trackCodeCopy(): void {
    try {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'code_copied', {
          code_block: this.currentCodeBlock?.id,
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }
}
