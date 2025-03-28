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
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "AI Engineer",
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

 
];

const experiences = [
  {
    title: "Session Manager",
    company_name: "Inception Inc",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2022 - Oct 2023",
    points: [
    "Managed music production sessions, overseeing key aspects to ensure smooth execution.",
    "Discovered and curated raw music and vocal stems for optimal processing and organization.",
    "Redesigned file and folder structures to enhance stem file management.",
    "Implemented an efficient system, reducing stem file processing time by 80%.",
    "Worked closely with the team to maintain seamless workflow and timely project delivery.", 
    ]
  },
  {
    title: "Data Analyst Intern",
    company_name: "Alfido Tech Institute",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Nov 2023",
    points: [
    "As a data analyst intern, I gathered, cleaned, and structured data for accuracy and reliability.",
    "Worked with professionals to analyze data and create insightful visual reports and dashboards.",
    "Developed data models and algorithms to enhance analytical efficiency.",
    "Applied statistical techniques to drive better decision-making and business performance.",
    ],
  },
  {
    title: "VC Industry Research & Data Analyst Extern",
    company_name: "Energy Innvation Capital",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - Mar 2024",
    points: [
    "Researched energy market trends, evaluated competition, and identified key growth opportunities.",
    "Assessed startup ventures, creating investment summaries highlighting viability and potential.",
    "Developed a data-driven market analysis presentation to support strategic investment decisions.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Bata Learner",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
    "Developed and deployed machine learning models to extract insights and drive business growth.",
    "Optimized data pipelines, automating workflows and cutting processing time by 40%.",
    "Built predictive analytics solutions, boosting customer retention by 25% through actionable insights.",
    "Designed AI-powered recommendation systems, enhancing user engagement and personalization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Daniel’s machine learning expertise helped us unlock insights we never knew existed. Our accuracy skyrocketed, and decision-making became effortless!",
    name: "Jessica Carter",
    designation: "CFO",
    company: "Insight Analytics",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "We struggled with messy data until Daniel built a system that streamlined everything. Now, our analytics pipeline is faster and more reliable than ever!",
    name: "Michael Harris",
    designation: "Head of Data",
    company: "VisionTech",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I’ve worked with data scientists before, but none delivered results as impactful as this. The predictive models have completely transformed our strategy!",
    name: "Joana Micheal",
    designation: "CEO",
    company: "DataSphere",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Heart Disease Predictor",
    description:
      "A powerful AI-driven model that leverages advanced machine learning to predict heart disease with precision, empowering doctors with data-driven insights for early diagnosis and better patient outcomes.",
    tags: [
      {
        name: "pandas",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
      {
      name: "matplotlib",
      color: "orange-text-gradient",
    },
    ],
    image: carrent,
    source_code_link: "https://github.com/sagegottrill/PortfolioProjects/tree/main/Supervised%20Learning%20(Heart%20Disease)%20-%20Project",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
