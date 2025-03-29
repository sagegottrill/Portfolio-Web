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
    title: "AI Research Intern",
    company_name: "Vertex Innovations",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
    "Developed deep learning models for automated essay grading, reducing grading time for educators by 50% while maintaining accuracy.",
    "Researched reinforcement learning techniques to enhance gamified learning experiences, boosting student participation by 28%.",
    "Built an AI-powered recommendation engine for personalized course suggestions, increasing user engagement by 35%.",
    "Published research on AI-driven learning analytics in a leading industry journal.",
    ]
  },
  {
    title: "Data Analyst",
    company_name: "Stratos Technologies",  
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
    "Developed Power BI dashboards for an e-learning platform, enabling real-time tracking of student performance and engagement.",
    "Conducted A/B testing on curriculum changes, leading to a 15% improvement in knowledge retention among students.",
    "Identified cost-saving opportunities for corporate training programs, optimizing resource allocation and reducing training expenses by $250,000 annually.",
    "Analyzed market trends and learning behaviors, improving strategic decisions in educational content development.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company_name: "Quantum Analytics",
    icon: shopify,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
    "Designed an AI-driven adaptive learning system, dynamically adjusting content difficulty based on student performance, improving course completion rates by 35%.",
    "Optimized NLP-based virtual tutors, reducing student query response times by 42% and enhancing personalized learning support.",
    "Automated data pipelines for financial and educational institutions, cutting manual reporting efforts by 60%.",
    "Deployed machine learning models for credit risk assessment, improving loan approval efficiency by 25% in fintech applications.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Bata Learner",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
    "Developed an AI-powered fraud detection system for online learning platforms, reducing payment fraud cases by 22% in e-learning transactions.",
    "Built an advanced student segmentation model in Python, improving personalized learning recommendations and increasing student engagement by 30%.",
    "Deployed predictive models using Flask and AWS to analyze student dropout risks, enabling intervention strategies that reduced attrition by 18%.",
    "Designed an AI-driven content recommendation engine, increasing course completion rates by 27%.",
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
