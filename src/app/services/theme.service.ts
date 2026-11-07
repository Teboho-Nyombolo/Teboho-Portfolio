import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly isDark = signal(this.readStoredTheme() === 'dark');

  constructor() {
    effect(() => {
      const theme = this.isDark() ? 'dark' : 'light';
      this.document.documentElement.dataset['theme'] = theme;
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {}
    });
  }

  toggle(): void {
    this.isDark.update((dark) => !dark);
  }

  private readStoredTheme(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }
}
