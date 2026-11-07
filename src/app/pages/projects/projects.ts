import { Location } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { SectionNavService } from '../../services/section-nav.service';
import { Reveal } from '../../shared/reveal.directive';
import { SectionHeader } from '../../shared/section-header';

@Component({
  selector: 'app-projects',
  imports: [SectionHeader, Reveal],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.html',
})
export class Projects {
  private readonly data = inject(PortfolioDataService);
  private readonly location = inject(Location);
  protected readonly nav = inject(SectionNavService);
  protected readonly software = this.data.projects.filter((project) => project.category === 'software');
  protected readonly web = this.data.projects.filter((project) => project.category === 'web');

  protected back(): void {
    if (this.nav.canGoBack()) {
      this.location.back();
      return;
    }
    this.nav.goTo('work', '/');
  }
}
