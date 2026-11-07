import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { PortfolioDataService } from '../../../services/portfolio-data.service';
import { Reveal } from '../../../shared/reveal.directive';

@Component({
  selector: 'app-contact-section',
  imports: [Reveal],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section id="contact" class="mx-auto grid max-w-[1100px] scroll-mt-28 gap-12 px-6 py-28 lg:grid-cols-[1.4fr_1fr]">
      <div appReveal>
        <p class="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">Get in Touch</p>
        <h2 class="text-6xl leading-[0.9] font-black tracking-tight uppercase sm:text-7xl md:text-8xl">
          Let's<br />Work<br />Together
        </h2>
        <p class="mt-8 max-w-sm text-lg font-semibold">{{ data.profile.contactTitle }}</p>
        <p class="mt-3 max-w-md text-sm text-zinc-600 dark:text-zinc-400">{{ data.profile.contactText }}</p>
        <a
          [href]="data.profile.resumeFile"
          download
          class="mt-8 inline-block rounded-full bg-zinc-950 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white dark:bg-white dark:text-zinc-950"
          >Download Resume &rarr;</a
        >
      </div>

      <div appReveal class="flex flex-col gap-3">
        @for (link of data.contactLinks; track link.label; let i = $index) {
          <a
            [href]="link.url"
            [attr.target]="link.url.startsWith('mailto:') ? null : '_blank'"
            rel="noopener"
            class="group relative flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-panel"
          >
            <span class="grid size-9 shrink-0 place-items-center rounded-lg bg-black/5 text-lg dark:bg-white/10">
              <ion-icon [attr.name]="link.icon"></ion-icon>
            </span>
            <span class="min-w-0 leading-tight">
              <span class="block font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500">{{ link.label }}</span>
              <span class="block truncate text-sm font-semibold">{{ link.value }}</span>
            </span>
            <span class="absolute top-3 right-4 font-mono text-[9px] text-zinc-400">0{{ i + 1 }}</span>
            <ion-icon name="open-outline" class="ml-auto shrink-0 text-zinc-400 group-hover:text-current"></ion-icon>
          </a>
        }
        <button
          type="button"
          (click)="message.show()"
          class="mt-2 cursor-pointer rounded-full border-[1.5px] border-current py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] transition hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950"
        >
          Send Me a Message &rarr;
        </button>
      </div>
    </section>
  `,
})
export class ContactSection {
  protected readonly data = inject(PortfolioDataService);
  protected readonly message = inject(MessageService);
}
