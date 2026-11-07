import { EnvironmentInjector, Injectable, afterNextRender, inject, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SectionNavService {
  private readonly router = inject(Router);
  private readonly injector = inject(EnvironmentInjector);
  readonly active = signal('');

  private homeScroll: number | null = null;
  private pendingTarget: string | null = null;
  private trigger: NavigationStart['navigationTrigger'] = 'imperative';

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((event) => {
      if (this.router.navigated && this.isHome()) {
        this.homeScroll = window.scrollY;
      }
      this.trigger = event.navigationTrigger;
    });

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const target = this.pendingTarget;
      this.pendingTarget = null;
      const restore = this.trigger === 'popstate' && this.isHome() && this.homeScroll !== null ? this.homeScroll : 0;
      afterNextRender(
        () => {
          if (target) {
            this.scroll(target, 'instant');
          } else {
            window.scrollTo({ top: restore, behavior: 'instant' });
          }
        },
        { injector: this.injector },
      );
    });
  }

  canGoBack(): boolean {
    return this.homeScroll !== null;
  }

  async goTo(target: string, page: string = '/'): Promise<void> {
    if (this.currentPage() !== page) {
      this.pendingTarget = target;
      await this.router.navigateByUrl(page);
      return;
    }
    this.scroll(target, 'smooth');
  }

  private scroll(target: string, behavior: ScrollBehavior): void {
    if (target === 'top') {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    document.getElementById(target)?.scrollIntoView({ behavior, block: 'start' });
  }

  private currentPage(): string {
    return this.router.url.split('?')[0] || '/';
  }

  private isHome(): boolean {
    return this.currentPage() === '/';
  }
}
