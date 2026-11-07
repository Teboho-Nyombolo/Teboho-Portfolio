import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../../services/portfolio-data.service';
import { Reveal } from '../../../shared/reveal.directive';
import { SectionHeader } from '../../../shared/section-header';

@Component({
  selector: 'app-education-section',
  imports: [SectionHeader, Reveal],
  template: `
    <section id="education" class="mx-auto max-w-[1100px] scroll-mt-28 px-6 py-28">
      <app-section-header
        eyebrow="Growth & Learning"
        title="Education & Training"
        text="The qualifications and training behind my full stack foundation."
      />
      <ol class="mt-14 flex flex-col gap-14">
        @for (entry of data.education; track entry.qualification; let odd = $odd) {
          <li appReveal class="grid items-center gap-8 md:grid-cols-2">
            <div [class.md:order-2]="odd">
              <div class="flex items-baseline justify-between gap-4">
                <h3 class="text-base font-bold">{{ entry.institution }}</h3>
                <span class="shrink-0 font-mono text-[10px] text-zinc-500">{{ entry.period }}</span>
              </div>
              <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{{ entry.qualification }}</p>
            </div>
            <div
              class="relative grid aspect-[16/9] place-items-center overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5 dark:bg-panel dark:ring-white/10"
              [class.md:order-1]="odd"
              [class.rotate-1]="!odd"
              [class.-rotate-1]="odd"
              aria-hidden="true"
            >
              <span class="text-outline text-[clamp(64px,9vw,120px)] font-black leading-none">{{ entry.highlight }}</span>
              <span class="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">{{
                entry.period
              }}</span>
            </div>
          </li>
        }
      </ol>
    </section>
  `,
})
export class EducationSection {
  protected readonly data = inject(PortfolioDataService);
}
