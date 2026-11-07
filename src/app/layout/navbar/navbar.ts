import { Component, CUSTOM_ELEMENTS_SCHEMA, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { NavLink } from '../../models/portfolio.models';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { SectionNavService } from '../../services/section-nav.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Navbar {
  private readonly data = inject(PortfolioDataService);
  private readonly router = inject(Router);
  protected readonly nav = inject(SectionNavService);
  protected readonly theme = inject(ThemeService);
  protected readonly profile = this.data.profile;
  protected readonly initial = this.profile.firstName.charAt(0);
  protected readonly menuOpen = signal(false);

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected readonly links = computed(() =>
    this.url().startsWith('/projects') ? this.data.projectLinks : this.data.homeLinks,
  );

  protected go(link: NavLink): void {
    this.menuOpen.set(false);
    this.nav.goTo(link.target, link.page);
  }

  protected goHome(): void {
    this.menuOpen.set(false);
    this.nav.goTo('top', '/');
  }

  protected hireMe(): void {
    this.menuOpen.set(false);
    this.nav.goTo('contact', '/');
  }
}
