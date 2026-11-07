import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PortfolioDataService } from '../../../services/portfolio-data.service';
import { Reveal } from '../../../shared/reveal.directive';
import { SectionHeader } from '../../../shared/section-header';
import { prefersReducedMotion } from '../../../shared/in-view';

@Component({
  selector: 'app-work-section',
  imports: [SectionHeader, Reveal, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section id="work" class="mx-auto max-w-[1100px] scroll-mt-28 px-6 py-28">
      <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
        <app-section-header
          eyebrow="Selected Work"
          title="Work Gallery"
          text="A collection of systems, applications and web projects I've built."
        />
        <a
          routerLink="/projects"
          class="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-white px-4 py-2.5 text-xs font-semibold shadow-sm transition hover:shadow-md dark:bg-white/10"
          >View More Projects <ion-icon name="open-outline"></ion-icon
        ></a>
      </div>

      <div
        appReveal
        class="relative mt-14 h-[220px] [perspective:1400px] sm:h-[300px]"
        (mouseenter)="paused.set(true)"
        (mouseleave)="paused.set(false)"
      >
        @for (project of projects; track project.title; let i = $index) {
          <button
            type="button"
            (click)="select(i)"
            [attr.aria-label]="'Show ' + project.title"
            [attr.aria-current]="i === index()"
            class="absolute top-0 left-1/2 w-[62%] cursor-pointer overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/10 transition-all duration-700 ease-out sm:w-[46%] dark:ring-white/10"
            [style.transform]="transformFor(i)"
            [style.zIndex]="10 - distance(i)"
            [style.opacity]="distance(i) > 2 ? 0 : 1 - distance(i) * 0.22"
            [style.filter]="i === index() ? 'none' : 'brightness(0.7)'"
          >
            <img [src]="project.image" [alt]="project.title" class="block aspect-[16/9] w-full object-cover object-top" />
          </button>
        }
      </div>

      <div class="mx-auto mt-12 max-w-2xl text-center" aria-live="polite">
        <h3 class="text-2xl font-bold tracking-tight">{{ current().title }}</h3>
        <p class="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{{ current().description }}</p>
        <a
          [href]="current().url"
          target="_blank"
          rel="noopener"
          class="mt-5 inline-block border-b border-current pb-0.5 text-xs font-semibold"
          >View Project &rarr;</a
        >
      </div>
    </section>
  `,
})
export class WorkSection {
  protected readonly projects = inject(PortfolioDataService).projects;
  protected readonly index = signal(0);
  protected readonly paused = signal(false);
  protected readonly current = computed(() => this.projects[this.index()]);

  constructor() {
    if (!prefersReducedMotion()) {
      const timer = setInterval(() => {
        if (!this.paused()) {
          this.index.update((i) => (i + 1) % this.projects.length);
        }
      }, 4000);
      inject(DestroyRef).onDestroy(() => clearInterval(timer));
    }
  }

  protected select(i: number): void {
    this.index.set(i);
  }

  protected offset(i: number): number {
    const count = this.projects.length;
    let diff = i - this.index();
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  }

  protected distance(i: number): number {
    return Math.abs(this.offset(i));
  }

  protected transformFor(i: number): string {
    const offset = this.offset(i);
    const scale = 1 - Math.abs(offset) * 0.16;
    return `translateX(calc(-50% + ${offset * 46}%)) scale(${scale}) rotateY(${offset * -18}deg)`;
  }
}
