import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { PortfolioDataService } from '../../../services/portfolio-data.service';
import { Reveal } from '../../../shared/reveal.directive';
import { SectionHeader } from '../../../shared/section-header';

@Component({
  selector: 'app-capabilities-section',
  imports: [SectionHeader, Reveal],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section id="capabilities" class="mx-auto grid max-w-[1100px] scroll-mt-28 gap-12 px-6 py-28 lg:grid-cols-[0.9fr_1.6fr]">
      <div>
        <app-section-header
          eyebrow="My Capabilities"
          title="What I Can Do"
          text="I build reliable, scalable applications end-to-end, from RESTful APIs in Java and C# to responsive front-ends in Angular and Blazor."
        />
        <ul appReveal class="mt-8 grid grid-cols-4 gap-3 sm:max-w-xs">
          @for (tool of data.tools; track tool.name) {
            <li
              class="grid aspect-square place-items-center rounded-xl bg-white p-2.5 shadow-sm dark:bg-white/90"
              [title]="tool.name"
            >
              <img [src]="tool.icon" [alt]="tool.name" class="size-7" />
            </li>
          }
        </ul>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
        @for (cap of data.capabilities; track cap.number) {
          <article appReveal class="flex flex-col rounded-2xl bg-white p-6 shadow-sm dark:bg-panel">
            <div class="flex items-start justify-between">
              <span class="text-4xl font-light">{{ cap.number }}</span>
              <span class="max-w-[7rem] text-right font-mono text-[9px] uppercase leading-tight tracking-[0.2em] text-zinc-500"
                >{{ cap.label }}</span
              >
            </div>
            <div class="mx-auto my-6 grid size-12 place-items-center rounded-lg bg-black/5 text-2xl dark:bg-white/10">
              <ion-icon [attr.name]="cap.icon"></ion-icon>
            </div>
            <h3 class="text-sm font-semibold">{{ cap.title }}</h3>
            <p class="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{{ cap.description }}</p>
            <ul class="mt-5 flex flex-wrap gap-1.5">
              @for (tag of cap.tags; track tag) {
                <li class="rounded border border-black/10 px-2 py-1 font-mono text-[9px] dark:border-white/10">{{ tag }}</li>
              }
            </ul>
          </article>
        }
      </div>
    </section>
  `,
})
export class CapabilitiesSection {
  protected readonly data = inject(PortfolioDataService);
}
