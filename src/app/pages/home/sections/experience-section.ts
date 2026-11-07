import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../../services/portfolio-data.service';
import { Reveal } from '../../../shared/reveal.directive';
import { SectionHeader } from '../../../shared/section-header';

@Component({
  selector: 'app-experience-section',
  imports: [SectionHeader, Reveal],
  template: `
    <section id="experience" class="mx-auto max-w-[1100px] scroll-mt-28 px-6 py-28">
      <app-section-header
        eyebrow="Career"
        title="Experience"
        text="Where I've built production software, and what I delivered there."
      />
      <ol class="relative mt-14 border-l border-black/10 dark:border-white/10">
        @for (job of data.experience; track job.role + job.company) {
          <li appReveal class="relative mb-12 pl-8 last:mb-0">
            <span
              class="absolute top-1.5 -left-[5px] size-[9px] rounded-full bg-zinc-950 ring-4 ring-paper dark:bg-white dark:ring-ink"
              aria-hidden="true"
            ></span>
            <div class="grid gap-6 md:grid-cols-[1fr_2fr]">
              <div>
                <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{{ job.period }}</p>
                <h3 class="mt-2 text-lg font-bold tracking-tight">{{ job.role }}</h3>
                <p class="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{{ job.company }}</p>
                <p class="mt-1 text-xs text-zinc-500">{{ job.type }} · {{ job.location }}</p>
              </div>
              <div class="rounded-2xl bg-white p-6 shadow-sm dark:bg-panel">
                <ul class="flex flex-col gap-2.5">
                  @for (point of job.highlights; track $index) {
                    <li class="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      <span class="mt-2 size-1 shrink-0 rounded-full bg-current" aria-hidden="true"></span>
                      <span>{{ point }}</span>
                    </li>
                  }
                </ul>
                <ul class="mt-5 flex flex-wrap gap-1.5">
                  @for (tech of job.stack; track tech) {
                    <li class="rounded border border-black/10 px-2 py-1 font-mono text-[9px] uppercase dark:border-white/10">{{ tech }}</li>
                  }
                </ul>
              </div>
            </div>
          </li>
        }
      </ol>
    </section>
  `,
})
export class ExperienceSection {
  protected readonly data = inject(PortfolioDataService);
}
