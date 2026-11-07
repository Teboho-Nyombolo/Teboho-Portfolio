import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../../services/portfolio-data.service';
import { SectionNavService } from '../../../services/section-nav.service';

@Component({
  selector: 'app-hero-section',
  template: `
    <section
      id="home"
      class="relative h-svh min-h-[560px] overflow-hidden bg-[radial-gradient(ellipse_45%_60%_at_50%_62%,var(--glow),transparent_70%)]"
    >
      <h1 class="sr-only">{{ profile.fullName }}, {{ profile.headline }}</h1>
      <div
        aria-hidden="true"
        class="absolute top-[52%] left-0 z-10 w-full -translate-y-1/2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      >
        <div class="inline-flex animate-marquee whitespace-nowrap">
          @for (copy of copies; track copy) {
            <span class="text-outline text-[clamp(110px,24vw,400px)] leading-none font-bold uppercase"
              >{{ profile.heroName }}&nbsp;</span
            >
          }
        </div>
      </div>
      <img
        [src]="profile.heroPhoto"
        [alt]="profile.fullName"
        class="absolute bottom-0 left-1/2 z-20 h-[min(72vh,720px)] w-auto max-w-none -translate-x-1/2 [mask-image:linear-gradient(to_bottom,#000_var(--portrait-fade),transparent_98%)] md:h-[min(95vh,1100px)]"
      />
      <button
        type="button"
        (click)="nav.goTo('work')"
        class="absolute right-3 bottom-14 z-30 flex cursor-pointer flex-col items-center gap-3.5 font-sans text-xs uppercase tracking-[0.35em] text-zinc-500 [writing-mode:vertical-rl] before:h-16 before:w-px before:bg-current md:right-7 dark:text-zinc-400"
      >
        Scroll Down
      </button>
    </section>
  `,
})
export class HeroSection {
  protected readonly profile = inject(PortfolioDataService).profile;
  protected readonly nav = inject(SectionNavService);
  protected readonly copies = [0, 1, 2, 3];
}
