export interface NavLink {
  label: string;
  target: string;
  page: '/' | '/projects';
}

export interface ContactLink {
  label: string;
  value: string;
  icon: string;
  url: string;
}

export interface Profile {
  fullName: string;
  firstName: string;
  heroName: string;
  heroPhoto: string;
  headline: string;
  location: string;
  aboutParagraphs: string[];
  resumeFile: string;
  email: string;
  contactTitle: string;
  contactText: string;
}

export interface FocusItem {
  label: string;
  detail: string;
  icon: string;
}

export interface Badge {
  label: string;
  image: string;
}

export interface Certification {
  provider: string;
  title: string;
  issued: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  period: string;
  highlight: string;
}

export interface Capability {
  number: string;
  label: string;
  title: string;
  icon: string;
  description: string;
  tags: string[];
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
  url: string;
  category: 'software' | 'web';
  stack: string[];
}
