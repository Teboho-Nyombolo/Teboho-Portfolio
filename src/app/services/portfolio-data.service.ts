import { Injectable } from '@angular/core';
import {
  Badge,
  Capability,
  Certification,
  ContactLink,
  EducationEntry,
  Experience,
  FocusItem,
  NavLink,
  Profile,
  Project,
  Tool,
} from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly homeLinks: NavLink[] = [
    { label: 'Work', target: 'work', page: '/' },
    { label: 'What I Can Do', target: 'capabilities', page: '/' },
    { label: 'About', target: 'about', page: '/' },
    { label: 'Experience', target: 'experience', page: '/' },
    { label: 'Certifications', target: 'certifications', page: '/' },
    { label: 'Education', target: 'education', page: '/' },
  ];

  readonly projectLinks: NavLink[] = [
    { label: 'Software', target: 'software', page: '/projects' },
    { label: 'Web', target: 'web', page: '/projects' },
  ];

  readonly profile: Profile = {
    fullName: 'Teboho Thulani Nyombolo',
    firstName: 'Teboho',
    heroName: 'Teboho Nyombolo',
    heroPhoto: 'img/teboho-hero.png',
    headline: 'Full Stack Developer. Building Reliable Systems.',
    location: 'Johannesburg, South Africa',
    aboutParagraphs: [
      "I'm a Full Stack Developer who builds reliable, scalable applications end-to-end, from RESTful APIs in Java (Spring Boot) and C# (.NET) through to responsive front-end interfaces in Angular and Blazor.",
      'I move comfortably between backend services and UI, work confidently with SQL databases like PostgreSQL, and keep systems stable as they scale. I use Git for version control and contribute to code review and Agile ceremonies, with hands-on exposure to Docker, CI/CD pipelines and cloud platforms (AWS, Azure).',
      'At Shaper, I developed REST APIs supporting Angular front-ends and helped cut recurring defects through consistent debugging and code review, contributing to an 80% improvement in system stability. At Proto Care, I designed and optimised SQL queries that improved data handling efficiency by 60%, while building UI components in Blazor as part of a full-stack .NET solution.',
    ],
    resumeFile: 'pdf/Teboho-Nyombolo-Resume.pdf',
    email: 'tebohonyombolo@hotmail.com',
    contactTitle: 'Open to Full Stack, Java and Backend roles.',
    contactText:
      "I'm exploring opportunities where I can keep building dependable systems within a collaborative, growth-focused team. Based in Johannesburg, open to hybrid or remote.",
  };

  readonly contactLinks: ContactLink[] = [
    { label: 'Email', value: 'tebohonyombolo@hotmail.com', icon: 'mail-outline', url: 'mailto:tebohonyombolo@hotmail.com' },
    { label: 'GitHub', value: 'github.com/Teboho-Nyombolo', icon: 'logo-github', url: 'https://github.com/Teboho-Nyombolo' },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/teboho-n-831684171',
      icon: 'logo-linkedin',
      url: 'https://www.linkedin.com/in/teboho-n-831684171/',
    },
    { label: 'WhatsApp', value: '069 774 0322', icon: 'logo-whatsapp', url: 'https://wa.me/0697740322' },
  ];

  readonly focus: FocusItem[] = [
    { label: 'Building', detail: 'REST APIs & Angular apps', icon: 'code-slash-outline' },
    { label: 'Deepening', detail: 'Cloud & DevOps skills', icon: 'cloud-outline' },
    { label: 'Open to', detail: 'Full Stack, Java & Backend roles', icon: 'briefcase-outline' },
  ];

  readonly traits: string[] = [
    'Takes Ownership',
    'Thorough Debugger',
    'Agile Team Player',
    'Code Reviewer',
    'Always Learning',
  ];

  readonly experience: Experience[] = [
    {
      role: 'Full Stack Developer',
      company: 'Shaper',
      type: 'Internship',
      period: 'Apr 2024 - Jun 2026',
      location: 'Johannesburg · On-site',
      highlights: [
        'Developed RESTful APIs in Java (Spring Boot) powering Angular front-end applications, from PostgreSQL database design through to responsive UI components.',
        'Reduced recurring defects through consistent debugging and code review, contributing to an 80% improvement in system stability.',
        'Collaborated in Agile ceremonies and peer code reviews, strengthening delivery consistency and code quality.',
        'Gained hands-on exposure to Docker, CI/CD pipelines and cloud platforms (AWS, Azure) through infrastructure and deployment work.',
      ],
      stack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'Docker'],
    },
    {
      role: 'Full Stack Engineer',
      company: 'Proto Care (Pty) Ltd',
      type: 'Freelance',
      period: 'Oct 2025 - Jun 2026',
      location: 'Cape Town · Remote',
      highlights: [
        'Built backend services in C# and .NET supporting core application functionality and business processes.',
        'Designed and optimised SQL queries, improving data handling efficiency by 60%.',
        'Developed front-end UI components in Blazor, including the Post Visit Summary sidebar for the Patient Portal.',
        'Supported debugging and resolution of production issues alongside senior developers in an Agile environment.',
      ],
      stack: ['C#', '.NET', 'Blazor', 'SQL', 'GitHub'],
    },
    {
      role: 'Cyber Security Student',
      company: 'Hosi Technologies',
      type: 'Internship',
      period: 'Jul 2023 - Dec 2023',
      location: 'Randburg · Hybrid',
      highlights: [
        'Built hands-on experience in threat identification, risk management, network security, cryptography, identity management and incident response.',
        'Identified and helped mitigate system vulnerabilities through practical security assessments.',
      ],
      stack: ['Cyber Security', 'Risk Management'],
    },
    {
      role: 'Web Development Mentor',
      company: 'Dynamic DNA',
      type: 'Part-time',
      period: 'Oct 2023 - Nov 2023',
      location: 'Randburg',
      highlights: [
        'Mentored students in HTML, CSS and JavaScript through one-on-one sessions and group workshops, helping them debug their own code and ship working web applications.',
      ],
      stack: ['HTML5', 'CSS', 'JavaScript', 'WordPress'],
    },
  ];

  readonly badges: Badge[] = [
    { label: 'Java SE 8 OCA', image: 'img/java.png' },
    { label: 'Security+', image: 'img/SecurityPlus Logo Certified CE.png' },
    { label: 'AZ-900', image: 'img/az900.png' },
    { label: 'DP-900', image: 'img/dp900.png' },
  ];

  readonly certifications: Certification[] = [
    { provider: 'CompTIA', title: 'CompTIA Security+ ce Certification', issued: 'Dec 2023 · Expires Dec 2026' },
    { provider: 'Oracle', title: 'Oracle Certified Associate, Java SE 8 Programmer', issued: 'Oct 2023' },
    { provider: 'Microsoft', title: 'Microsoft Certified: Azure Data Fundamentals', issued: 'Apr 2023' },
    { provider: 'Microsoft', title: 'Microsoft Certified: Azure Fundamentals', issued: 'Mar 2023' },
    { provider: 'Amazon Web Services', title: 'AWS re/Start Graduate', issued: 'Verified on Credly' },
    { provider: 'Dynamic DNA', title: 'National Certificate in IT: System Development NQF Level 5', issued: 'Nov 2024' },
    { provider: 'Hosi Academy', title: 'Hosi Cyber Skills Program', issued: 'Dec 2023' },
  ];

  readonly education: EducationEntry[] = [
    {
      institution: 'Shaper Digital Academy',
      qualification: 'Information Technology',
      period: 'Apr 2024 - Jun 2026',
      highlight: 'Shaper',
    },
    {
      institution: 'Dynamic DNA',
      qualification: 'National Certificate, Information Technology: Systems Development (NQF Level 5)',
      period: 'Jan 2022 - Nov 2024',
      highlight: 'NQF 5',
    },
    {
      institution: 'Zimele Secondary School',
      qualification: 'National Senior Certificate: Mathematics, Physical Sciences, Life Sciences, Agricultural Sciences',
      period: 'Jan 2011 - Nov 2015',
      highlight: 'NSC',
    },
  ];

  readonly capabilities: Capability[] = [
    {
      number: '01',
      label: 'Back-End',
      title: 'Backend & REST APIs',
      icon: 'server-outline',
      description:
        'Designing and maintaining backend services and RESTful APIs in Java (Spring Boot) and C# (.NET) that power production front-ends.',
      tags: ['Java', 'Spring Boot', 'C#', '.NET', 'RESTful APIs'],
    },
    {
      number: '02',
      label: 'Front-End',
      title: 'Front-End Interfaces',
      icon: 'browsers-outline',
      description:
        'Building responsive, user-friendly UI components in Angular and Blazor, integrated end-to-end with the APIs behind them.',
      tags: ['Angular 17+', 'TypeScript', 'Tailwind CSS', 'Blazor', 'JavaScript', 'HTML'],
    },
    {
      number: '03',
      label: 'Data & Cloud',
      title: 'Databases & Cloud',
      icon: 'cloud-upload-outline',
      description:
        'Designing and optimising SQL and PostgreSQL databases, with hands-on exposure to Docker, CI/CD pipelines, AWS and Azure.',
      tags: ['SQL', 'PostgreSQL', 'Docker', 'CI/CD', 'AWS', 'Azure'],
    },
  ];

  readonly tools: Tool[] = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/java/java-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/spring/spring-original.svg' },
    { name: 'Angular 17+', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/angular/angular-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/html5/html5-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/csharp/csharp-original.svg' },
    { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'Blazor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/blazor/blazor-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/docker/docker-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/git/git-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/azure/azure-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/figma/figma-original.svg' },
    { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/trello/trello-original.svg' },
  ];

  readonly projects: Project[] = [
    {
      title: 'Java ID Number Validator',
      image: 'img/ID Number project.png',
      description:
        'Reads and processes South African ID numbers, extracting the birth date, gender, citizenship and validation status. Built with object-oriented principles and exception handling for accuracy and robustness.',
      url: 'https://github.com/Teboho-Nyombolo/IDNumberApp/tree/main/IDNumberApp/src',
      category: 'software',
      stack: ['Java', 'OOP'],
    },
    {
      title: 'Personal Portfolio',
      image: 'img/first portfolio project.png',
      description:
        'My debut web portfolio featuring a dynamic Weather App: users enter a city and instantly see accurate weather conditions.',
      url: 'https://teboho-nyombolo.github.io/Teboho-Nyombolo/',
      category: 'web',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Java Calculator App',
      image: 'img/calculator project.png',
      description:
        'A robust calculator that follows established coding principles with comprehensive exception handling for a stable, predictable experience.',
      url: 'https://github.com/Teboho-Nyombolo/Calculator/tree/main/Calculator/src',
      category: 'software',
      stack: ['Java'],
    },
    {
      title: 'Java ATM App',
      image: 'img/codsoft ATM project.png',
      description:
        'Simulates an ATM with PIN verification, balance checks, deposits, withdrawals and transaction statements, with secure PIN handling and input validation.',
      url: 'https://github.com/Teboho-Nyombolo/CODSOFT/tree/main/ATM_Interface/src',
      category: 'software',
      stack: ['Java'],
    },
    {
      title: 'WordPress Website Project',
      image: 'img/WordPress project.png',
      description:
        'A custom website for a pharmaceutical company with a unique design that highlights their services, products and expertise.',
      url: 'https://health-med.000webhostapp.com',
      category: 'web',
      stack: ['WordPress'],
    },
  ];
}
