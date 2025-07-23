import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiApachekafka,
  SiGooglecloud,
  SiKubernetes,
  SiGit,
  SiRedis,
  SiLangchain,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiBlender,
  SiAmazon,
  SiAdobeaftereffects,
} from "react-icons/si";
import { PiVectorThree } from "react-icons/pi";

export const languagesItems = [
  { icon: <SiC />, name: "C" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
];

export const devItems = [
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPrisma />, name: "Prisma" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiApachekafka />, name: "Kafka" },
  { icon: <SiAmazon />, name: "AWS" },
  { icon: <SiGooglecloud />, name: "Google Cloud" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <SiLangchain />, name: "Langchain" },
  { icon: <PiVectorThree />, name: "Pinecone" },
];

export const designItems = [
  { icon: <SiAdobephotoshop />, name: "Photoshop" },
  { icon: <SiAdobeillustrator />, name: "Illustrator" },
  { icon: <SiAdobepremierepro />, name: "Premiere Pro" },
  { icon: <SiAdobeaftereffects />, name: "After Effects" },
  { icon: <SiBlender />, name: "Blender" },
  { icon: <SiFigma />, name: "Figma" },
];

export const projectDetailsData = [
  {
    pinTitle: "Live Now",
    pinLink: "https://sahit.in",
    projectImage: "/sahit-ui.png",
    projectTitle: "SAHIT Platform",
    techstack: ["Next.js", "Express.js", "PostgreSQL", "Redis", "Websockets", "RAG"],
    projectDescription:
      "Women–NGO help platform with request flows and secure dashboards built at InMobi.",
    githubLink: "https://github.com",
    isLive: true,
    demoLink: "https://sahit.in",
  },
  {
    pinTitle: "Check it out",
    pinLink: "https://github.com",
    projectImage: "/cfg-landing.png",
    projectTitle: "Kalam Foundation",
    techstack: ["Next.js", "Node.js", "MongoDB", "RAG", "LLM", "Streamlit"],
    projectDescription:
      "Predictive dashboard for NGO & student insights | CFG'25 Winner",
    githubLink: "https://github.com",
    isLive: true,
    demoLink: "https://live.com",
  },
  {
    pinTitle: "Used by faculty",
    pinLink: "https://coe-dms.thapar.edu",
    projectImage: "/coe-dms.png",
    projectTitle: "DMS | COE | DSAI",
    techstack: ["Next.js", "MongoDB", "TypeScript", "MUI"],
    projectDescription:
      "Proposal submission and review portal for Thapar × UQ faculty",
    githubLink: "https://github.com",
    isLive: true,
    demoLink: "https://coe-dms.thapar.edu",
  },
  {
    pinTitle: "Try the demo",
    pinLink: "https://lawvista.ai",
    projectImage: "/sih.png",
    projectTitle: "LawVista",
    techstack: ["Next.js", "MongoDB", "LLM", "Pinecone", "RAG", "Node.js"],
    projectDescription:
      "AI-powered legal research engine for court case analysis | SIH Finalist",
    githubLink: "https://github.com",
    isLive: true,
    demoLink: "https://lawvista.ai",
  },
];

export const projectUXDetailsData = [
  {
    design: true,
    pinTitle: "Behance",
    pinLink: "https://sahit.in",
    projectImage: "/gmeet.png",
    projectTitle: "GMeet",
    techstack: ["User Research", "Prototyping", "Journey Mapping", "User Interviews"],
    projectDescription:
      "Identifying and solving problems faced by users in Google Meet, presented via a UX Case Study.",
    githubLink: "https://www.behance.net/gallery/187574839/Google-Meet-UX-Case-Study",
    isLive: false,
    demoLink: "https://sahit.in",
  },
  {
    design: true,
    pinTitle: "Behance",
    pinLink: "https://github.com",
    projectImage: "/galaxytravels.png",
    projectTitle: "Galaxy Travels",
    techstack: ["Branding", "Wireframing", "Motion Graphics", "User Persona"],
    projectDescription:
      "Designed a trip booking app for space travels. Overall Winner of Flamingo'23",
    githubLink: "https://github.com",
    isLive: false,
    demoLink: "https://live.com",
  },
  {
    design: true,
    pinTitle: "Figma",
    pinLink: "https://bit.ly/saturnalia-app-ui",
    projectImage: "/satapp.png",
    projectTitle: "Sat App",
    techstack: ["Wireframing", "Prototyping", "UI/UX"],
    projectDescription:
      "An event management app for the college's cultural festival. The app gained over 8000+ downloads across app store and play store.",
    githubLink: "https://bit.ly/saturnalia-app-ui",
    isLive: false,
    demoLink: "https://coe-dms.thapar.edu",
  },
];

export const experienceCards = [
  {
    title: "Summer Intern",
    description: "InMobi",
    ctaText: "Jun 2025 – Present",
    location: "New Delhi",
    content: () => (
      <p>
        • Worked closely with engineering teams to enhance core product features.<br />
        • Gained hands-on experience in ad-tech systems, debugging, and performance tuning.<br />
        • Contributed to frontend improvements and collaborated cross-functionally for UI consistency.
      </p>
    ),
  },
   {
    title: "Software Engineer Intern",
    description: "Center of Excellence | Data Science & Artificial Intelligence",
    ctaText: "Jan 2025 – Present",
    location: "Patiala",
    content: () => (
      <p>
        • Developed Python-based automation scripts to streamline data preprocessing and pipeline execution.<br />
        • Collaborated with a team of researchers on an NLP project focused on sentiment analysis in regional languages.<br />
        • Integrated visual dashboards using Streamlit and Plotly for real-time insight into model metrics.<br />
        • Actively contributed to model training and evaluation processes in a production-like ML environment.
      </p>
    ),
  },
  {
    title: "Software Project Intern",
    description: "Thapar Institute of Engineering & Technology",
    ctaText: "May 2024 – Nov 2024",
    location: "Patiala",
    content: () => (
      <p>
        • Engineered and deployed a scalable Hostel Management System serving 10,000+ users, streamlining
        room allocation, facility services, and complaint resolution.<br />
        • Crafted and integrated 16 interactive 3D hostel models using Blender and Three.js, enhancing spatial
        visualization and user navigation.<br />
        • Designed and built responsive user interfaces using Next.js and Material-UI (MUI), ensuring seamless interaction
        and enhanced user experience.
      </p>
    ),
  },
  {
    title: "Motion Graphic Designer",
    description: "Convrse.ai",
    ctaText: "Feb 2024 – Apr 2024",
    location: "Remote",
    content: () => (
      <p>
        • Created motion graphics and short animated content for Convrse.ai’s marketing assets.<br />
        • Collaborated with product and branding teams to produce visually engaging explainers.<br />
        • Optimized workflows using After Effects and Figma for consistent delivery timelines.
      </p>
    ),
  },
  {
    title: "UI/UX Designer Intern",
    description: "Acuity Studios",
    ctaText: "Apr 2023 – Nov 2023",
    location: "Remote",
    content: () => (
      <p>
        • Revamped and optimized UI/UX for a gaming platform, elevating user retention by 15% and boosting web
        traffic through strategic user-centered enhancements.<br />
        • Delivered personalized UI/UX, branding, and visual identity for over 10 distinct projects in partnership
        with global clients.<br />
        • Ensured alignment of design strategies while improving overall usability across applications.
      </p>
    ),
  },
];

export const positionOfResponsibilityCards = [
  {
    title: "General Secretary",
    description: "Association of Computer Machinery, Thapar",
    ctaText: "Aug 2024 – Aug 2025",
    location: "TIET, Patiala",
    content: () => (
      <p>
        • Worked closely with engineering teams to enhance core product features.<br />
        • Gained hands-on experience in ad-tech systems, debugging, and performance tuning.<br />
        • Contributed to frontend improvements and collaborated cross-functionally for UI consistency.
      </p>
    ),
  },
   {
    title: "Joint Overall Event Coordinator",
    description: "Center for Training & Development",
    ctaText: "Oct 2024 - Jun 2025",
    location: "TIET, Patiala",
    content: () => (
      <p>
        • Developed Python-based automation scripts to streamline data preprocessing and pipeline execution.<br />
        • Collaborated with a team of researchers on an NLP project focused on sentiment analysis in regional languages.<br />
        • Integrated visual dashboards using Streamlit and Plotly for real-time insight into model metrics.<br />
        • Actively contributed to model training and evaluation processes in a production-like ML environment.
      </p>
    ),
  },
  {
    title: "Joint Secretary",
    description: "Tech Syndicate",
    ctaText: "May 2021 - May 2022",
    location: "AISG-46, Gurgraon",
    content: () => (
      <p>
        • Engineered and deployed a scalable Hostel Management System serving 10,000+ users, streamlining
        room allocation, facility services, and complaint resolution.<br />
        • Crafted and integrated 16 interactive 3D hostel models using Blender and Three.js, enhancing spatial
        visualization and user navigation.<br />
        • Designed and built responsive user interfaces using Next.js and Material-UI (MUI), ensuring seamless interaction
        and enhanced user experience.
      </p>
    ),
  },
];
