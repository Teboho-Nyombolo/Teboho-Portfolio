import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundLines } from './layout/background-lines/background-lines';
import { Footer } from './layout/footer/footer';
import { MessageWidget } from './layout/message-widget/message-widget';
import { Navbar } from './layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, BackgroundLines, MessageWidget],
  template: `
    <app-background-lines />
    <app-navbar />
    <main class="overflow-x-clip">
      <router-outlet />
    </main>
    <app-footer />
    <app-message-widget />
  `,
})
export class App {}
