import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { PortfolioDataService } from '../../../services/portfolio-data.service';
import { Reveal } from '../../../shared/reveal.directive';
import { SectionHeader } from '../../../shared/section-header';

@Component({
  selector: 'app-certifications-section',
  imports: [SectionHeader, Reveal],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section id="certifications" class="mx-auto max-w-[1100px] scroll-mt-28 px-6 py-28">
      <app-section-header
        eyebrow="Recognition"
        title="Certifications and Badges"
        text="Industry certifications that back up my Java, cloud and security skills."
      />
      <div class="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <ul appReveal class="grid grid-cols-3 gap-3 self-start">
          @for (badge of data.badges; track badge.label; let i = $index) {
            <li
              class="flex flex-col items-center justify-center gap-3 rounded-xl bg-white p-5 shadow-sm dark:bg-panel"
              [class.row-span-2]="i === 0"
              [class.col-span-2]="i === 3"
            >
              <img [src]="badge.image" [alt]="badge.label" class="h-20 w-auto object-contain" />
              <span class="text-center font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">{{ badge.label }}</span>
            </li>
          }
        </ul>
        <ul appReveal class="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          @for (cert of data.certifications; track cert.title) {
            <li class="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm dark:bg-panel">
              <span class="grid size-8 shrink-0 place-items-center rounded-full bg-black/5 dark:bg-white/10">
                <ion-icon name="ribbon-outline"></ion-icon>
              </span>
              <span class="leading-tight">
                <span class="block font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">{{ cert.provider }}</span>
                <span class="block text-xs font-semibold">{{ cert.title }}</span>
                <span class="mt-0.5 block text-[10px] text-zinc-500">{{ cert.issued }}</span>
              </span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class CertificationsSection {
  protected readonly data = inject(PortfolioDataService);
}
