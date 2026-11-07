import { Component, CUSTOM_ELEMENTS_SCHEMA, computed, inject, signal } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-message-widget',
  templateUrl: './message-widget.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MessageWidget {
  protected readonly message = inject(MessageService);
  private readonly email = inject(PortfolioDataService).profile.email;

  protected readonly name = signal('');
  protected readonly from = signal('');
  protected readonly body = signal('');
  protected readonly submitted = signal(false);

  protected readonly fromValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.from().trim()));
  protected readonly valid = computed(() => this.name().trim() !== '' && this.fromValid() && this.body().trim() !== '');

  protected send(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
    if (!this.valid()) {
      return;
    }
    const subject = `Portfolio message from ${this.name().trim()}`;
    const text = `${this.body().trim()}\n\n${this.name().trim()}\n${this.from().trim()}`;
    window.location.href = `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  }

  protected read(event: Event): string {
    return (event.target as HTMLInputElement | HTMLTextAreaElement).value;
  }
}
