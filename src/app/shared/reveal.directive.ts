import { DestroyRef, Directive, ElementRef, afterNextRender, inject, signal } from '@angular/core';
import { prefersReducedMotion, whenVisible } from './in-view';

@Directive({
  selector: '[appReveal]',
  host: {
    class: 'transition duration-700 ease-out',
    '[class.opacity-0]': '!shown()',
    '[class.translate-y-6]': '!shown()',
  },
})
export class Reveal {
  protected readonly shown = signal(false);

  constructor() {
    const element = inject(ElementRef).nativeElement as Element;
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (prefersReducedMotion()) {
        this.shown.set(true);
        return;
      }
      destroyRef.onDestroy(whenVisible(element, () => this.shown.set(true), 0.15));
    });
  }
}
