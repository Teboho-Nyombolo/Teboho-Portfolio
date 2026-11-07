import { Component, DestroyRef, ElementRef, afterNextRender, inject, input, signal } from '@angular/core';
import { prefersReducedMotion, whenVisible } from './in-view';

@Component({
  selector: 'app-type-heading',
  host: { class: 'grid' },
  template: `
    <span class="invisible col-start-1 row-start-1" aria-hidden="true">{{ text() }}&nbsp;</span>
    <span class="col-start-1 row-start-1">
      <span class="sr-only">{{ text() }}</span>
      <span aria-hidden="true">{{ shown() }}</span
      ><span aria-hidden="true" class="ml-1 inline-block h-[0.85em] w-[3px] animate-blink bg-current align-[-0.08em]"></span>
    </span>
  `,
})
export class TypeHeading {
  readonly text = input.required<string>();
  readonly speedMs = input(55);

  protected readonly shown = signal('');
  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    const element = inject(ElementRef).nativeElement as Element;
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => clearTimeout(this.timer));
    afterNextRender(() => {
      if (prefersReducedMotion()) {
        this.shown.set(this.text());
        return;
      }
      destroyRef.onDestroy(whenVisible(element, () => this.type(0), 0.4));
    });
  }

  private type(index: number): void {
    const full = this.text();
    this.shown.set(full.slice(0, index));
    if (index < full.length) {
      this.timer = setTimeout(() => this.type(index + 1), this.speedMs());
    }
  }
}
