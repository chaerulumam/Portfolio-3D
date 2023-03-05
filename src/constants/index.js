import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  php,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  moviejam,
  tripguide,
  udemy,
  bwa,
  laravel,
  crypto,
  jamskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React Native Mastery",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "January 4th, 2023",
    points: [
      "Developing mobile applications using React Native.",
      "Learn from basic to advance.",
      "Implementing another library of React Native.",
    ],
  },
  {
    title: "Full-Stack Website Laravel Vue JS",
    company_name: "BuildWithAngga",
    icon: bwa,
    iconBg: "#383E56",
    date: "May 4th, 2022",
    points: [
      "Developing web applications using Laravel for back-end and Vue.js for front-end.",
      "Collaborating with cross-functional including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Laravel: Backend for Designer",
    company_name: "BuildWithAngga",
    icon: bwa,
    iconBg: "#E6DEDD",
    date: "December 26th, 2023",
    points: [
      "Developing web applications using Laravel for designer.",
      "Implementing responsive design with Tailwind.css and implementing Laravel Blade Component for the project.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jamskill's Landing Page",
    description: "Education Landing Page site",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jamskill,
    source_code_link: "https://github.com/chaerulumam/education-landing-page",
  },
  {
    name: "Crypto",
    description:
      "Web application that enables users to search for crypto information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/chaerulumam/crypto-project",
  },
  {
    name: "Movie Jam",
    description: "A comprehensive movie information and trending",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: moviejam,
    source_code_link: "https://github.com/chaerulumam/moviejam",
  },
];

export { services, technologies, experiences, testimonials, projects };
