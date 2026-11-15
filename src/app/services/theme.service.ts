import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly key = 'portfolio-theme';
  readonly theme = signal<'light' | 'dark'>('dark');

  initTheme(): void {
    const saved = localStorage.getItem(this.key) as 'light' | 'dark' | null;
    const preferred = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    this.apply(saved ?? preferred, false);
  }

  toggleTheme(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  isDark(): boolean {
    return this.theme() === 'dark';
  }

  private apply(theme: 'light' | 'dark', persist = true): void {
    this.theme.set(theme);
    document.documentElement.dataset['theme'] = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b0c0f' : '#f6f4ef');
    if (persist) localStorage.setItem(this.key, theme);
  }
}
