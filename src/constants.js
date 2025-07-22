// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

//Skill as Data Analyst
import tableau from "./assets/tech_logo/tableau.jpg";
import SnowFlake from "./assets/tech_logo/snowflake.jpg";
import aws from "./assets/tech_logo/aws.jpg";
import flask from "./assets/tech_logo/flask.jpg";
import Numpy from "./assets/tech_logo/Numpy.jpg";
import Matplotlib from "./assets/tech_logo/Matplotlib.jpg";
import PowerBi from "./assets/tech_logo/PowerBi.jpg";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/madina.png";

// Project Section Logo's
import FineTrackPh from "./assets/work_logo/FineTrack.png";
import BookHome from "./assets/work_logo/BookHome.png";
import Lgo11 from "./assets/work_logo/Weather.png";
import NexGenPh from "./assets/work_logo/NexGen.png";
import powerBiPh from "./assets/work_logo/PowerBi.jpg";
import SnowFlakePh from "./assets/work_logo/SnowFlake.png.jpg";
import AgroCraftPG from "./assets/work_logo/AgroCraft.png";

export const SkillsInfo = [
  {
    title: "Data Analytics",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "Numpy", logo: Numpy },
      { name: "SnowFlake", logo: SnowFlake },
      { name: "AWS", logo: aws },
      { name: "Flask", logo: flask },
      { name: "Taleau", logo: tableau },
      { name: "Matplotlib", logo: Matplotlib },
      { name: "PowerBi", logo: PowerBi },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const education = [
  {
    id: 1,
    img: bsaLogo,
    school: "MGM's College Of Computer Science And Technology Nanded",
    date: "june 2022 - july 2025",
    grade: "72.8%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from MGM's College, Nanded. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at MGM's College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: glaLogo,
    school: "Shri. Shahu Maharaj College, Bhokar",
    date: "Apr 2021 - March 2022",
    grade: "50%",
    desc: "I completed my class 12 education from Shri. Shahu Maharaj College, Bhokar, under the HSC board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "HSC(XII) - PCM",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Madina Tul-Uloom High School Jr.college, B",
    date: "Apr 2015 - March 2016",
    grade: "87.5%",
    desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "FineTrack -A Personal Finance Tracker",
    description:
      "Built a personal finance tracker to manage income, expenses, and spending history.Integrated real-time data updates, graphs, and pie charts for visualization.Designed a modern home page with dashboard navigation.Firebase used for authentication and real-time database.",
    image: FineTrackPh,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "ShadCn"],
    github: "https://github.com/Aadilshaikh571/FinTrack",
    webapp: "https://fin-track-tau.vercel.app/",
  },
  {
    id: 1,
    title: "NexGen Hired - A Job Seeker Application",
    description:
      "Developed a full-featured Job Portal for both candidates and recruiters.Candidates can search, filter, and apply to jobs by uploading resumes.Recruiters can post jobs, manage applications, and download resumes.Used Supabase for the backend and Shadcn UI for responsive UI.",
    image: NexGenPh,
    tags: [
      "React JS",
      "Node.js",
      "Supabase",
      "Clerk",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Aadilshaikh571/NEXGEN-HIRED",
    webapp: "https://nexgen-hired-8jv6.vercel.app/",
  },
  {
    id: 2,
    title: "Diwali Sales Analysis",
    description:
      "Analyzed sales data to identify customer buying patterns and behavior.Performed data cleaning, missing value handling, and aggregation.Generated insights using data visualization tools.Highlighted best-selling products and customer demographics.",
    image: powerBiPh,
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Numpy"],
    github: "https://github.com/Aadilshaikh571/NEXGEN-HIRED",
  },
  {
    id: 3,
    title: "Global Energy Consumption Dashboard",
    description:
      "Developed an interactive dashboard to analyze global energy consumption using data from AWS S3.Performed data integration and warehousing using Snowflake for efficient querying and transformations.Published the final dashboard on Tableau Cloud to enable live web access and sharing.Visualized key KPIs like KWH and CSU by country, region, and energy sources on a single-page dashboard.",
    image: SnowFlakePh,
    tags: ["AWS", "SQL", "SnowFlake", "Tableau"],
    github: "https://github.com/Aadilshaikh571/NEXGEN-HIRED",
    webapp:
      "https://prod-apsoutheast-b.online.tableau.com/##/site/aadilsgaikh3311-7f73b843e0/views/Project2/Dashboard1?:iid=1",
  },
  {
    id: 4, // next ID in order, adjust if needed
    title: "BookHome- A Listing Web",
    description:
      "BookHome is a data-driven web platform for managing and analyzing book collections. It allows users to search, categorize, and visualize book data with interactive charts and insights. Built using Python, SQL, and deployed on Render.",
    image: BookHome, // <-- Replace with your logo variable if you have a specific logo
    tags: ["HTML", "Css", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/Aadilshaikh571/bookHome", // <-- Replace with your actual repo link
    webapp: "https://bookhome-eoap.onrender.com",
  },
  {
    id: 5, // increment ID accordingly
    title: "Weather Forecasting App",
    description:
      "A user-friendly weather forecasting web application that fetches real-time weather data for any location. Built with HTML, CSS, and JavaScript, it provides current weather conditions, temperature, humidity, and more using a weather API.",
    image: Lgo11, // Replace with a logo if you have one e.g., weatherLogo
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Aadilshaikh571/Weather-forcating",
  },
  {
    id: 6, // increment ID accordingly
    title: "AgroCraft: Farm Products",
    description:
      "AgroCraft is a PHP and MySQL-powered web application that connects farmers directly with customers, enabling them to sell fresh produce online. It helps buyers find local farm products easily, ensures transparent pricing, reduces waste, and supports local farming communities.",
    image: AgroCraftPG, // Replace with your actual logo if you have one
    tags: ["PHP", "MySQL", "Web App", "E-commerce"],
  },
];
