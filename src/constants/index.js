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
  ai,
  webdev,
  workhome,
  chatgpt,
  c,
  coding,
  bootstrap,
  chatbot,
  threeJS,
  wewatch,
  cse,
  twelth,
  tenth,
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
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX Designer",
    icon: web,
  },
  {
    title: "NodeJS Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "A.I Integration",
    icon: creator,
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
    name: "ChatGPT",
    icon: chatgpt,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C/C++",
    icon: c,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Data Structures",
    icon: coding,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Dendrite.ai",
    icon: ai,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - April 2023",
    points: [
      "Integrated ChatGPT in NodeJS Web Application.",
      "Provided comprehensive support in the creation, scalability, supportability, and maintainability of web applications.",
      "Identified and resolved production problems",
      "Worked on additional tasks and projects as per project leads' instructions.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "StoryTent",
    icon: webdev,
    iconBg: "#383E56",
    date: "July 2023 - Nov 2023",
    points: [
      "Developed front-end components and enhance the UI & UX of web applications using ReactJS & Javascript.",
      "Designed and implemented databases, and ensured data integrity and security using MongoDB",
      "Built and managed server-side logic,databases, and APIs with Node.js for effective data handling and authentication processes",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Self",
    icon: workhome,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Work closely with clients to deliver tailored solutions, and utilizing various frameworks for dynamic developmemt.",
      "Oversee multiple projects for timely delivery.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Stay updated with industry trends and technologies & Prioritize tasks to meet project timelines.",
    ],
  },
];

const education = [
  {
    title: "Bachelors of Technology",
    company_name: "Guru Gobind Singh Indraprastha University, Delhi",
    icon: cse,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - July 2024",
    points: [
      "C.G.P.A : 9/10",
      "Board : G.G.S.I.P.U",
      "Specialization : Computer Science Engineering",
    ],
  },
  {
    title: "Class 12",
    company_name: "Sri Guru Nanak Public School, Delhi",
    icon: twelth,
    iconBg: "#383E56",
    date: "April 2019 - March 2020",
    points: [
      "Percentage : 86.2 %",
      "Board : CBSE",
      "Stream : Science (Physics, Chemistry, Maths)",
    ],
  },
  {
    title: "Class 10",
    company_name: "Sri Guru Nanak Public School, Delhi",
    icon: tenth,
    iconBg: "#383E56",
    date: "April 2017 - March 2018",
    points: ["Percentage : 90.2 %", "Board : CBSE"],
  },
];

const testimonials = [
  {
    testimonial:
      "I never imagined a website could capture the beauty of our product until Karan Wahla proved me wrong.",
    name: "Hannah Cox",
    designation: "SDE",
    company: "SendaTride",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've yet to encounter a web developer as dedicated to their clients' success as Karan.",
    name: "Jason Murphy",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Karan optimized our website, our traffic skyrocketed by 50%! We are immensely grateful for their expertise and dedication.",
    name: "Ashley Tucker",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WeWatch",
    description:
      "WeWatch is a fully deployed MERN stack e-commerce app with admin/user login, seamless payment integration via Braintree, and a vast collection of watches for users to explore and purchase securely.",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "BrainTree",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: wewatch,
    source_code_link: "https://github.com/karan150602/Ecommerce",
  },
  {
    name: "A.I CustomFit",
    description:
      "CustomFit is an AI-driven shirt customization web app built with React, Node.js, Three.js, DALL-E-3, Tailwind CSS, and React Three Fiber, offering users seamless design and visualization of personalized shirts.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Dall-E",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: threeJS,
    source_code_link: "https://github.com/karan150602/threejs",
  },
  {
    name: "A.I ChatBot",
    description:
      "ChatGPT Web is a cutting-edge application developed with Node.js, React, and OpenAI's ChatGPT, enabling users to engage in dynamic and natural conversations with an AI-powered chatbot.",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/karan150602/ChatBot",
  },
];

export {
  services,
  technologies,
  experiences,
  education,
  testimonials,
  projects,
};
