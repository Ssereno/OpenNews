import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'user-theme';
  private activeThemeSubject = new BehaviorSubject<Theme>('light');
  
  activeTheme$ = this.activeThemeSubject.asObservable();

  constructor() {
    this.initTheme();
  }

  get currentTheme(): Theme {
    return this.activeThemeSubject.value;
  }

  toggleTheme(): void {
    const newTheme: Theme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('light'); 
    }
  }

  private setTheme(theme: Theme): void {
    this.activeThemeSubject.next(theme);
    localStorage.setItem(this.THEME_KEY, theme);
    
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
