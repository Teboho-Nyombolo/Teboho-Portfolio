import { Component, CUSTOM_ELEMENTS_SCHEMA, computed, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../../services/portfolio-data.service';
import { Reveal } from '../../../shared/reveal.directive';
import { SectionHeader } from '../../../shared/section-header';

@Component({
  selector: 'app-about-section',
  imports: [SectionHeader, Reveal],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section id="about" class="mx-auto max-w-[1100px] scroll-mt-28 px-6 py-28">
      <app-section-header eyebrow="About Me" [title]="data.profile.headline" />

      <div appReveal class="mt-10 flex flex-col gap-6 sm:flex-row">
        <img
          [src]="data.profile.heroPhoto"
          [alt]="data.profile.fullName"
          class="size-20 shrink-0 rounded-full bg-zinc-300 object-cover object-top dark:bg-zinc-700"
        />
        <div>
          <h3 class="text-sm font-bold uppercase">{{ data.profile.fullName }}</h3>
          <dl class="mt-2 flex gap-8">
            @for (stat of stats(); track stat.label) {
              <div>
                <dt class="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">{{ stat.label }}</dt>
                <dd class="text-sm font-semibold">{{ stat.value }}</dd>
              </div>
            }
          </dl>
          @for (paragraph of data.profile.aboutParagraphs; track $index) {
            <p class="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{{ paragraph }}</p>
          }
          <p class="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Want to know more about my experience?
            <a [href]="data.profile.resumeFile" download class="font-semibold text-zinc-950 underline dark:text-white"
              >Download my resume</a
            >
          </p>
        </div>
      </div>

      <div class="mt-14 flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
        <div appReveal>
          <p class="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">Currently</p>
          <ul class="flex flex-wrap gap-6">
            @for (item of data.focus; track item.label) {
              <li class="flex items-center gap-2.5">
                <span class="grid size-8 place-items-center rounded-full bg-black/5 dark:bg-white/10">
                  <ion-icon [attr.name]="item.icon"></ion-icon>
                </span>
                <span class="leading-tight">
                  <span class="block text-xs font-semibold">{{ item.label }}</span>
                  <span class="block text-[11px] text-zinc-500">{{ item.detail }}</span>
                </span>
              </li>
            }
          </ul>
        </div>

        <button
          type="button"
          (click)="nextTrait()"
          aria-label="Show next trait"
          class="relative h-36 w-56 shrink-0 cursor-pointer self-center sm:self-auto"
        >
          @for (trait of data.traits; track trait; let i = $index) {
            <span
              class="absolute inset-0 flex flex-col justify-between rounded-xl bg-white p-4 text-left shadow-xl ring-1 ring-black/5 transition-all duration-500 dark:bg-panel dark:ring-white/10"
              [style.transform]="'rotate(' + (position(i) * 5 - 6) + 'deg) translateY(' + position(i) * 6 + 'px)'"
              [style.zIndex]="data.traits.length - position(i)"
              [style.opacity]="position(i) > 2 ? 0 : 1"
            >
              <span class="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500">Trait</span>
              <span class="text-base font-semibold">{{ trait }}</span>
            </span>
          }
        </button>
      </div>
    </section>
  `,
})
export class AboutSection {
  protected readonly data = inject(PortfolioDataService);
  private readonly top = signal(0);

  protected readonly stats = computed(() => [
    { label: 'Projects', value: `${this.data.projects.length}` },
    { label: 'Certificates', value: `${this.data.certifications.length}` },
    { label: 'Experience', value: '2+ yrs' },
  ]);

  protected position(i: number): number {
    const count = this.data.traits.length;
    return (i - this.top() + count) % count;
  }

  protected nextTrait(): void {
    this.top.update((value) => (value + 1) % this.data.traits.length);
  }
}
