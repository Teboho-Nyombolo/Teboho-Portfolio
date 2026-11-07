import { Component } from '@angular/core';

@Component({
  selector: 'app-background-lines',
  host: { class: 'pointer-events-none fixed inset-0 -z-10 overflow-hidden', 'aria-hidden': 'true' },
  template: `
    <svg class="h-full w-full text-black/[0.06] dark:text-white/[0.05]" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
      <path d="M0 220 C 300 120, 520 340, 820 230 S 1260 120, 1440 250" stroke="currentColor" stroke-width="1.2" />
      <path d="M0 520 C 260 420, 560 640, 880 520 S 1240 420, 1440 560" stroke="currentColor" stroke-width="1.2" />
      <path d="M0 780 C 340 700, 600 860, 920 770 S 1300 690, 1440 800" stroke="currentColor" stroke-width="1.2" />
    </svg>
  `,
})
export class BackgroundLines {}
