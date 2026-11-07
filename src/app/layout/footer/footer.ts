import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="border-t border-black/5 py-8 dark:border-white/10">
      <div
        class="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-2 px-6 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 sm:flex-row"
      >
        <span>&copy; {{ year }} {{ profile.fullName }}</span>
        <span>{{ profile.location }}</span>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly profile = inject(PortfolioDataService).profile;
  protected readonly year = new Date().getFullYear();
}
