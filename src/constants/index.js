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
  udemy,
  bwa,
  laravel,
  crypto,
  jamskill,
  billgates,
  stevejobs,
  zuckerberg,
  jamstore,
  gerich,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
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
      "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    name: "Bill Gates",
    designation: "CO-Founder",
    company: "Microsoft",
    image: billgates,
  },
  {
    testimonial:
      "Quality is more important than quantity. One home run is much better than two doubles.",
    name: "Steve Jobs",
    designation: "CO-Founder",
    company: "Apple",
    image: stevejobs,
  },
  {
    testimonial:
      "The biggest risk is not taking any risk in a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    name: "Mark Zuckerberg",
    designation: "CO-Founder",
    company: "Facebook",
    image: zuckerberg,
  },
];

const projects = [
  {
    name: "JamStore",
    description: "A fresh e-commerce website built with love.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: jamstore,
    source_code_link: "https://github.com/chaerulumam/e-commerce",
  },
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
        color: "green-text-gradient",
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

  {
    name: "Gerich Restaurant",
    description: "A restaurant landing page website with beautifull chef",
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
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: gerich,
    source_code_link: "https://github.com/chaerulumam/gerich-restaurant",
  },
];

export { services, technologies, experiences, testimonials, projects };
