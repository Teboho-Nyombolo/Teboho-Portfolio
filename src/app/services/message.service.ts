import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  readonly open = signal(false);
  readonly minimized = signal(false);

  show(): void {
    this.open.set(true);
    this.minimized.set(false);
  }

  close(): void {
    this.open.set(false);
  }

  toggleMinimized(): void {
    this.minimized.update((value) => !value);
  }
}
