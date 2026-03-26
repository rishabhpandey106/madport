export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

import { FaXTwitter } from "react-icons/fa6";
export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Accounts",
    description: "Social ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Stack",
    description: "Tech",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Victory Point",
    description: "Last worked for",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  // {
  //   id: 5,
  //   title: "Rizzup-BOT",
  // //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "lg:p-5",
  // //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// export const projects = [
//   {
//     id: 1,
//     title: "Omni-API",
//     des: "Built a high-performance API showcasing rapid data retrieval for real-time applications.",
//     img: "/project1.png",
//     iconLists: ["/redis.svg", "/next.svg", "/pgsql.svg", "/cloudflare.svg", "/prisma.svg"],
//     href: "https://github.com/rishabhpandey106/omni-api",
//   },
//   {
//     id: 2,
//     title: "Galeech-API",
//     des: "It provides fast and accurate detection of Hindi profanity, ensuring a cleaner and more respectful online environment.",
//     img: "/project2.gif",
//     iconLists: ["/next.svg", "/cloudflare.svg", "/ts.svg", "/nodejs.svg", "/tail.svg"],
//     href: "https://github.com/rishabhpandey106/galeech-api",
//   },
//   {
//     id: 3,
//     title: "Ragdoll",
//     des: "It is an innovative project that leverages AI to allow users to engage in conversations with any website.",
//     img: "/project3.gif",
//     iconLists: ["/next.svg", "/vercel.svg", "/ts.svg", "/ai.svg", "/redis.svg"],
//     href: "https://github.com/rishabhpandey106/cypher",
//   },
//   {
//     id: 4,
//     title: "SoulSync",
//     des: "Created a playlist generator powered by AI that syncs with your taste and seamlessly integrates with spotify.",
//     img: "/project4.gif",
//     iconLists: ["/vite.svg", "/ai.svg", "/ts.svg", "/python.svg", "/flask.svg"],
//     href: "https://github.com/rishabhpandey106/soulsync",
//   },
// ];

export const projects = [
  {
    id: 1,
    title: "DocterG",
    des: "Multi-class disease prediction system using a Multi-Layer ANN and NLP pipeline to identify top-5 probable diseases from symptoms.",
    img: "/16063.jpg",
    iconLists: ["/python.svg", "/ai.svg", "/tensorflow.svg", "/pandas.svg"],
    href: "https://github.com/MADHUSUDAN-82/doctorg",
  },
  {
    id: 2,
    title: "MediBot",
    des: "AI-powered RAG chatbot for medical queries combining semantic search with LLMs and vector databases for high accuracy.",
    img: "/14016.jpg",
    iconLists: ["/langchain.svg", "/pgsql.svg", "/python.svg", "/ai.svg"],
    href: "https://github.com/MADHUSUDAN-82/medai",
  },
  {
    id: 3,
    title: "Service Provider",
    des: "Full-stack MERN application featuring JWT authentication, real-time Socket.io updates, and RESTful API architecture.",
    img: "/14011.jpg",
    iconLists: ["/mongodb.svg", "/react.svg", "/nodejs.svg", "/s.svg"],
    href: "https://github.com/MADHUSUDAN-82/Service-Provider",
  },
  {
    id: 4,
    title: "AutoWord",
    des: "Data-driven application focusing on optimized algorithms and seamless user experience integrations.",
    img: "/95597.jpg",
    iconLists: ["/tensorflow.svg", "/python.svg", "/flask.svg", "/ai.svg"],
    href: "https://github.com/MADHUSUDAN-82/AutoWord",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Python",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Java",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "C++",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Javascript",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "MongoDB",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 6,
    title: "PostgreSQL",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 7,
    title: "MySQL",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 8,
    title: "FastAPI",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 9,
    title: "Flask",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 10,
    title: "Github",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 11,
    title: "NodeJS",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 12,
    title: "Vercel",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 13,
    title: "AI/ML",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 14,
    title: "MCP",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 15,
    title: "C",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MADHUSUDAN-82",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/MadhusudanBhar9",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/madhusudan-bhardwaj-352215224",
  },
];

export const social = [
  { id: 1, name: "GitHub", link: "https://github.com/MADHUSUDAN-82", img: "" },
  { id: 2, name: "Twitter", link: "https://twitter.com/MadhusudanBhar9", img: "" },
  { id: 3, name: "LinkedIn", link: "https://www.linkedin.com/in/madhusudan-bhardwaj-352215224/", img: "" },
  { id: 4, name: "LeetCode", link: "https://leetcode.com/madhusudan8287", img: "" },
  { id: 5, name: "Medium", link: "https://medium.com/", img: "" },
  { id: 6, name: "Codechef", link: "https://codechef.com/", img: "" },
  // Add more social media links as needed
]