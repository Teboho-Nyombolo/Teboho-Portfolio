import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { SectionNavService } from '../../services/section-nav.service';
import { AboutSection } from './sections/about-section';
import { CapabilitiesSection } from './sections/capabilities-section';
import { CertificationsSection } from './sections/certifications-section';
import { ContactSection } from './sections/contact-section';
import { EducationSection } from './sections/education-section';
import { ExperienceSection } from './sections/experience-section';
import { HeroSection } from './sections/hero-section';
import { WorkSection } from './sections/work-section';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    WorkSection,
    CapabilitiesSection,
    AboutSection,
    ExperienceSection,
    CertificationsSection,
    EducationSection,
    ContactSection,
  ],
  template: `
    <app-hero-section />
    <app-work-section />
    <app-capabilities-section />
    <app-about-section />
    <app-experience-section />
    <app-certifications-section />
    <app-education-section />
    <app-contact-section />
  `,
})
export class Home {
  constructor() {
    const host = inject(ElementRef).nativeElement as HTMLElement;
    const nav = inject(SectionNavService);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              nav.active.set(entry.target.id);
            }
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      host.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
      destroyRef.onDestroy(() => {
        observer.disconnect();
        nav.active.set('');
      });
    });
  }
}
