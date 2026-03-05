/**
 * ============================================================================
 * PORTFOLIO DATA — Single source of truth
 * ============================================================================
 *
 * This is the ONLY file you need to edit to update the portfolio content.
 * Every section in the site reads from this file. If a section array is empty
 * or a flag is false, the section and its nav link are automatically hidden.
 *
 * @author Idriss Chafik
 */

/* ─── Types ─────────────────────────────────────────── */

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  availabilityBadge: string;
  emails: string[];
  phone?: string;
  location: string;
  avatarUrl: string;
  cvUrl?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

export interface SoftSkill {
  icon: string;
  name: string;
  description: string;
}

export interface Education {
  period: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  description: string;
  isLatest?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  isCurrent?: boolean;
}

export interface Publication {
  year: string;
  title: string;
  url?: string;
  journal: string;
  authors: string;
  doi?: string;
  role: 'first-author' | 'co-author';
}

export interface Certification {
  name: string;
  issuer: string;
  issuerUrl?: string;
  date: string;
  skills: string[];
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface AboutCard {
  number: string;
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

/* ─── Personal Information ──────────────────────────── */

export const personalInfo: PersonalInfo = {
  firstName: 'Idriss',
  lastName: 'Chafik',
  title: 'Full Stack Developer',
  subtitle:
    'Computer Science Engineering student passionate about building modern web applications and solving complex problems with clean, efficient code.',
  availabilityBadge: 'Open to Internship Opportunities',
  emails: ['i.chafik@esisa.ac.ma'],
  location: 'Fez, Morocco',
  avatarUrl: 'https://avatars.githubusercontent.com/u/257039016?v=4',
  cvUrl: '/cv-idriss-chafik.pdf',
};

/* ─── Key Statistics ────────────────────────────────── */

export const stats: Stat[] = [
  { label: 'Projects Built', value: '5+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Years of Study', value: '3+' },
  { label: 'GitHub Repos', value: '5+' },
];

/* ─── About Cards ───────────────────────────────────── */

export const aboutCards: AboutCard[] = [
  {
    number: '01',
    text: "I'm a Computer Science Engineering student at ESISA in Fez, Morocco, with a strong passion for full stack web development. I enjoy transforming ideas into functional, visually appealing digital experiences.",
  },
  {
    number: '02',
    text: 'My technical journey spans both front-end and back-end development. I build responsive interfaces with modern JavaScript and craft robust server-side solutions with Node.js, Express, and relational databases.',
  },
  {
    number: '03',
    text: 'I believe in writing clean, well-structured code and following best practices for security and performance. Authentication, data integrity, and user experience are always at the forefront of my work.',
  },
  {
    number: '04',
    text: 'Currently seeking internship opportunities where I can contribute to real-world projects, learn from experienced teams, and continue growing as a developer. I thrive in collaborative environments that value innovation.',
  },
];

/* ─── Technical Skills ──────────────────────────────── */

export const technicalSkills: SkillCategory[] = [
  {
    icon: 'code',
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Astro', 'Responsive Design'],
  },
  {
    icon: 'server',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Python'],
  },
  {
    icon: 'database',
    title: 'Databases',
    skills: ['SQLite', 'MySQL', 'SQL', 'MongoDB'],
  },
  {
    icon: 'tool',
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'npm', 'Linux'],
  },
];

/* ─── Soft Skills (optional — leave empty to hide) ──── */

export const softSkills: SoftSkill[] = [
  {
    icon: 'users',
    name: 'Team Collaboration',
    description: 'Effective communicator who thrives in team settings and pair programming.',
  },
  {
    icon: 'lightbulb',
    name: 'Problem Solving',
    description: 'Analytical thinker who breaks complex challenges into manageable solutions.',
  },
  {
    icon: 'clock',
    name: 'Time Management',
    description: 'Organized and deadline-driven with the ability to prioritize effectively.',
  },
  {
    icon: 'trending-up',
    name: 'Continuous Learning',
    description: 'Self-motivated learner always exploring new technologies and best practices.',
  },
];

/* ─── Education ─────────────────────────────────────── */

export const education: Education[] = [
  {
    period: '2022 — Present',
    degree: "Engineering Degree in Computer Science",
    field: 'Software Engineering & Information Systems',
    institution: 'ESISA — École Supérieure d\'Ingénierie en Sciences Appliquées',
    institutionUrl: 'https://www.esisa.ac.ma',
    description:
      'Comprehensive curriculum covering software engineering, algorithms, databases, web development, networks, and project management. Active participant in coding projects and tech workshops.',
    isLatest: true,
  },
  {
    period: '2021 — 2022',
    degree: 'Baccalauréat in Physical Sciences',
    field: 'Mathematics & Physics',
    institution: 'High School, Fez',
    description:
      'Strong foundation in mathematics, physics, and analytical reasoning. Graduated with honors, sparking a deep interest in computer science and technology.',
  },
];

/* ─── Experience (optional — leave empty to hide) ───── */

export const experience: Experience[] = [];

/* ─── Publications (optional — leave empty to hide) ─── */

export const publications: Publication[] = [];

/* ─── Publication Metrics (only used if publications exist) */

export const publicationMetrics = {
  totalPapers: 0,
  firstAuthor: 0,
  coAuthor: 0,
  citations: 0,
};

/* ─── Academic Links (optional) ────────────────────── */

export const academicLinks: SocialLink[] = [];

/* ─── Certifications (optional — leave empty to hide) ─ */

export const certifications: Certification[] = [];

/* ─── Projects ──────────────────────────────────────── */

export const projects: Project[] = [
  {
    title: 'Student Management App',
    description:
      'Full-stack web application for managing students with secure JWT authentication, bcrypt password hashing, and a modern dark-themed responsive UI. Features include registration, login, and a protected dashboard.',
    tags: ['Node.js', 'Express', 'SQLite', 'JWT', 'bcrypt', 'JavaScript', 'CSS'],
    url: 'https://student-management-six-theta.vercel.app',
    github: 'https://github.com/idrisschafik/Student-Management-',
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern, responsive portfolio built with Astro and deployed on Vercel. Features glassmorphism design, scroll-reveal animations, dynamic section rendering, and a centralized data architecture.',
    tags: ['Astro', 'TypeScript', 'CSS3', 'Vercel', 'Responsive'],
    url: 'https://portfolio-idriss-chafik.vercel.app',
    github: 'https://github.com/idrisschafik/PORTFOLIO',
  },
];

/* ─── Social Links ──────────────────────────────────── */

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/idrisschafik',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/idriss-chafik-a28517336',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    url: 'mailto:i.chafik@esisa.ac.ma',
    icon: 'mail',
  },
];

/* ─── Dynamic Navigation ────────────────────────────── */

/**
 * Generates navigation items based on which sections actually have data.
 * Sections without content are automatically excluded.
 */
export function getNavItems(): NavItem[] {
  const items: NavItem[] = [];

  items.push({ label: 'Home', href: '#hero', icon: 'home' });

  if (aboutCards.length > 0) {
    items.push({ label: 'About', href: '#about', icon: 'user' });
  }

  if (technicalSkills.length > 0) {
    items.push({ label: 'Skills', href: '#skills', icon: 'cpu' });
  }

  if (education.length > 0) {
    items.push({ label: 'Education', href: '#education', icon: 'graduation-cap' });
  }

  if (experience.length > 0) {
    items.push({ label: 'Experience', href: '#experience', icon: 'briefcase' });
  }

  if (publications.length > 0) {
    items.push({ label: 'Publications', href: '#publications', icon: 'book-open' });
  }

  if (certifications.length > 0) {
    items.push({ label: 'Certifications', href: '#certifications', icon: 'award' });
  }

  if (projects.length > 0) {
    items.push({ label: 'Projects', href: '#projects', icon: 'folder-git-2' });
  }

  items.push({ label: 'Contact', href: '#contact', icon: 'send' });

  return items;
}

export const navItems = getNavItems();
