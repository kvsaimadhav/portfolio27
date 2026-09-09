import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import type { OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EDUCATION, EXPERIENCES, PROJECTS, RECOGNITIONS, SKILLS, SOCIALS } from './data/portfolio.data';
import { ThemeService } from './services/theme.service';

@Component({ selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './app.component.html', styleUrl: './app.component.css', changeDetection: ChangeDetectionStrategy.OnPush })
export class AppComponent implements OnInit, OnDestroy {
  readonly navItems = [['home','Home'],['about','About'],['experience','Experience'],['skills','Skills'],['projects','Projects'],['education','Education'],['recognition','Recognition'],['contact','Contact']];
  readonly experiences=EXPERIENCES; readonly skills=SKILLS; readonly projects=PROJECTS; readonly education=EDUCATION; readonly recognitions=RECOGNITIONS; readonly socials=SOCIALS;
  readonly workflow=[{step:'01',title:'Source',detail:'Git · GitHub'},{step:'02',title:'Automate',detail:'CI/CD · Jenkins'},{step:'03',title:'Package',detail:'Docker'},{step:'04',title:'Orchestrate',detail:'Kubernetes'},{step:'05',title:'Deliver',detail:'AWS · Nginx · CDN'},{step:'06',title:'Operate',detail:'CloudWatch · Linux'}];
  readonly activeSection=signal('home'); readonly menuOpen=signal(false); readonly scrolled=signal(false); readonly theme=this.themeService.theme; readonly year=new Date().getFullYear();
  name=''; email=''; message=''; formStatus=signal<'idle'|'sending'|'success'|'error'>('idle'); private sectionObserver?:IntersectionObserver; private revealObserver?:IntersectionObserver;
  constructor(private readonly themeService:ThemeService){}
  ngOnInit(){this.themeService.initTheme();this.observePage()} ngOnDestroy(){this.sectionObserver?.disconnect();this.revealObserver?.disconnect();document.body.classList.remove('menu-locked')}
  @HostListener('window:scroll') onScroll(){this.scrolled.set(window.scrollY>24)} @HostListener('document:keydown.escape') onEscape(){this.closeMenu()}
  scrollTo(id:string){document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});this.closeMenu()}
  toggleMenu(){this.menuOpen.update(open=>!open);document.body.classList.toggle('menu-locked',this.menuOpen())} closeMenu(){this.menuOpen.set(false);document.body.classList.remove('menu-locked')} toggleTheme(){this.themeService.toggleTheme()}
  get canSubmit(){return this.name.trim().length>2&&/^\S+@\S+\.\S+$/.test(this.email)&&this.message.trim().length>10}
  async submitContact(){if(!this.canSubmit||this.formStatus()==='sending')return;this.formStatus.set('sending');const data=new FormData();data.append('form-name','contact');data.append('name',this.name);data.append('email',this.email);data.append('message',this.message);try{const response=await fetch('/',{method:'POST',body:data});if(!response.ok)throw new Error();this.formStatus.set('success');this.name=this.email=this.message=''}catch{this.formStatus.set('error')}}
  private observePage(){setTimeout(()=>{this.sectionObserver=new IntersectionObserver(entries=>entries.filter(e=>e.isIntersecting).forEach(e=>this.activeSection.set(e.target.id)),{rootMargin:'-35% 0px -55%',threshold:0});document.querySelectorAll<HTMLElement>('main section[id]').forEach(s=>this.sectionObserver?.observe(s));this.revealObserver=new IntersectionObserver(entries=>entries.filter(e=>e.isIntersecting).forEach(e=>{e.target.classList.add('is-visible');this.revealObserver?.unobserve(e.target)}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>this.revealObserver?.observe(e))})}
}
