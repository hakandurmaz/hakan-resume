import {
  AcademicCapIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/sameer-srivastava-M9kwG0fat3o-unsplash.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hakan Durmaz',
  description: "Hakan Durmaz",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Hakan Durmaz.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Senior Software Engineer</strong> at <strong className="text-stone-100">Numeris Labs</strong> specializing in building decentralized products
        that support thriving ecosystems and empower users with innovative solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Please feel free to contact me at following social channels:
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:
    `Hello, I'm Hakan Durmaz, a passionate senior software developer with 10+ years of experience building innovative and high-performance software solutions.
   I am always looking to learn and explore new technologies to stay ahead of the curve. 
   Throughout my career, I have worked on projects of all sizes, from small applications to large-scale enterprise systems.
  Let's connect and see how I can help your organization grow.`,
  aboutItems: [
    { label: 'Location', text: 'Turkey', Icon: MapIcon },
    { label: 'Motto', text: 'This is the way!', Icon: CalendarIcon },
    { label: 'Interests', text: 'Science, Photography, Nature', Icon: SparklesIcon },
    { label: 'Study', text: 'Computer Engineering', Icon: AcademicCapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022 - Ongoing',
    location: 'Akdeniz University',
    title: 'Master in Computer Engineering',
    content: <p>Master's degree in Computer Science</p>,
  },
  {
    date: '2010 - 2014',
    location: 'Pamukkale University',
    title: 'Computer Engineering',
    content: <>
      <p>Bachelor degree in Computer Engineering.</p>
      <p>Activities and societies: Photography Society, Computer Society, Free Software Community</p>
    </>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2021 - Present',
    location: 'Numeris Labs',
    title: 'Founder',
    content: (
      <p>
        ➤ I founded my own company to accomplish my own projects.
      </p>
    ),
  },
  {
    date: 'Aug 2021 - Dec 2021 (5 mos)',
    location: 'Anadolu Sigorta',
    title: 'Senior Software Developer',
    content: (
      <p>
        ➤ Worked as a senior software developer consultant with my own company.
      </p>
    ),
  },
  {
    date: 'Sep 2016 - Aug 2021 (5 yrs)',
    location: 'pribas Turkey Ltd',
    title: 'Senior Software Developer',
    content: (
      <>
        <p>
          ➤ Developing spring boot, mongodb, extjs applications.
        </p>
        <p>
          ➤ Hospitality-Solutions for global operating Tour-Operators (Dynamic Production & Dynamic Packaging Platforms)
        </p>
        <p>
          ➤ Developing hotel & flight microservices in order to make reservations
        </p>
      </>
    ),
  },
  {
    date: 'Jul 2014 - Aug 2016 (2 yrs 2 mos)',
    location: 'Hotelchk',
    title: 'Mobile Software Developer',
    content: (
      <>
        <p>
          ➤ Developed Android + Windows Phone interactive applications which is guest communication & hospitality for tourism industry.
        </p>
        <p>
          ➤ Developed Android & Windows Phone applications for Smart House solutions
        </p>
        <p>
          ➤ Developed & Responsible for Kiosk applications that works on Android x86 platform.
        </p>
      </>
    ),
  },
  {
    date: 'Aug 2012 - July 2014 (2 yrs)',
    location: 'Ratel Bilisim Ltd',
    title: 'Software Developer',
    content: (
      <>
        <p>
          ➤ Developed Android applications for many leading companies
        </p>
        <p>
          ➤ Developed Java (Spring, Hibernate, Primefaces) applications for Ahmet Yesevi University Information Systems
        </p>
      </>
    ),
  },
  {
    date: 'Jun 2012 - Aug 2012 (3 mos)',
    location: 'Pamukkale University IT Department',
    title: 'Intern Software Developer',
    content: (
      <>
        <p>
          ➤ Worked at Pusula Information System (Pamukkale University Information System)
        </p>
        <p>
          ➤ Developed Asp.NET modules for building & optimizing Personnel Information System modules.
        </p>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [

  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'hello@hakandurmaz.com.tr',
      href: 'mailto:hello@hakandurmaz.com.tr',
    },
    {
      type: ContactType.Github,
      text: 'hakandurmaz',
      href: 'https://github.com/hakandurmaz',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/hakandurmaz' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hakan-durmaz-tr/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/hakandurmaz.tr/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/0xhakandurmaz' },
];
