import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "UI UX Designer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "CMS Devloper",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: typescript,
  },
  {
    name: "Oracle",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "WordPress",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "drupal",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Design Consultant",
    company_name: "Capgimini",
    icon: starbucks,
    iconBg: "#ffff",
    date: "Dec 2017 - Jun 2024",
    points: [
      "Leading UI/UX design initiatives and creating intuitive user interfaces for web applications and digital products.",
      "Conducting user research, creating wireframes, prototypes, and implementing design systems that enhance user experience.",
      "Collaborating with stakeholders to translate business requirements into visually appealing and functional designs.",
      "Mentoring team members on design best practices and ensuring consistent brand guidelines across multiple projects.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Sunmatic",
    icon: tesla,
    iconBg: "#fff",
    date: "Feb 2016 - Mar 2017",
    points: [
      "Developing and maintaining web applications using React.js, JavaScript, and modern front-end frameworks.",
      "Building responsive and interactive user interfaces while ensuring optimal performance and cross-browser compatibility.",
      "Implementing RESTful APIs, state management solutions, and integrating third-party services for enhanced functionality.",
      "Collaborating with cross-functional teams and participating in code reviews to maintain high code quality standards.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ashiyana Real Estate, Pune",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2015 - Feb 2016",
    points: [
      "Developing and maintaining WordPress websites using PHP, JavaScript, jQuery, and modern web technologies.",
      "Creating responsive and user-friendly interfaces using HTML, CSS, Bootstrap, and Tailwind CSS frameworks.",
      "Implementing custom WordPress themes, plugins, and optimizing website performance and user experience.",
      "Collaborating with UI/UX designers to create intuitive layouts and ensure consistent branding across projects.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Cerverus Digital Solution, Bangalore.",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2013 - Jan 2015",
    points: [
      "Developing and maintaining content management systems using Drupal, WordPress, and PHP, ensuring robust and scalable web solutions.",
      "Creating custom themes, modules, and plugins while implementing responsive designs using HTML5, CSS3, and modern web standards.",
      "Collaborating with design teams to implement user-friendly interfaces and optimize website performance across different browsers.",
      "Managing multiple client websites, performing regular updates, security patches, and providing technical support and documentation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've had the pleasure of working with Mahesh as a UI/UX designer. His creative vision and technical expertise helped create beautiful, user-friendly interfaces. He's a great collaborator who always delivers exceptional results.",
    name: "Nirav vyas",
    designation: "senior consultant",
    company: "Capgemini Technology",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Working with Mahesh was exceptional - his technical skills, attention to detail, and commitment to delivering high-quality solutions made our project a great success.",
    name: "Subodh Chaure", 
    designation: "Integration Manager",
    company: "Capgemini Technology",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I had the opportunity to work directly with Mahesh on several projects. His technical skills and problem-solving abilities consistently delivered excellent results. He's a dedicated professional who brings both creativity and practicality to every challenge.",
    name: "Sachine Mandalia",
    designation: "IT Manager",
    company: "Capgemini Technology",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "IIMB Banglore",
    description:
      "A modern and responsive showcase website for IIMB Bangalore featuring an intuitive interface, dynamic content management, and seamless navigation to highlight the institution's programs, faculty, and achievements.",
    tags: [
      {
        name: "UX",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "Drupal",
        color: "pink-text-gradient",
      },
      {
        name: "HTML CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.iimb.ac.in",
  },
  {
    name: "Barclays Online credit card application",
    description:
      "Designed and implemented a seamless online credit card application flow with video KYC integration, enabling customers to complete their verification process remotely while ensuring security and compliance with banking regulations.",
    tags: [
      {
        name: "UX",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "Adobe Illustrator",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "#",
  },
  {
    name: "BMI Website Redesign",
    description:
      "Redesigned the website for Behavior Momentum India (BMI), focusing on improving user experience and accessibility for parents seeking autism therapy services, while maintaining a professional and compassionate interface.",
    tags: [
      {
        name: "UX",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient", 
      },
      {
        name: "Adobe illustrator",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.google.com/search?client=safari&rls=en&q=behavior+momentum+india&ie=UTF-8&oe=UTF-8",
  },
];

export { services, technologies, experiences, testimonials, projects };
