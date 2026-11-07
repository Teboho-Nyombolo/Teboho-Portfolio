import { Component, input } from '@angular/core';
import { TypeHeading } from './type-heading';

@Component({
  selector: 'app-section-header',
  imports: [TypeHeading],
  template: `
    <p class="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">{{ eyebrow() }}</p>
    <h2 class="text-4xl font-bold tracking-tight md:text-5xl">
      <app-type-heading [text]="title()" />
    </h2>
    @if (text()) {
      <p class="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{{ text() }}</p>
    }
  `,
})
export class SectionHeader {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly text = input('');
}
