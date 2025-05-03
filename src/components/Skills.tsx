import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Terminal,
  Palette,
  Database,
  Zap,
  GitBranch,
  Smartphone,
  Rocket,
  BookOpen,
  Cpu,
  FlaskConical,
  LayoutDashboard,
  Trophy, // For expertise/mastery
  Wand2, // For magic/creativity
  Server,
  Layers3,
  Boxes,
  GitCommit,
  KeyRound,
  MessageSquare,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  proficiency?: number; // Added proficiency level (out of 10)
}

interface Props {}

const skillsData: Skill[] = [
  {
    name: "JavaScript",
    icon: <Code className="text-yellow-400 w-14 h-14" />,
    description:
      "Proficient in modern ES6+ syntax, asynchronous programming, and building interactive web applications. I use it daily to create dynamic and engaging user experiences.",
    proficiency: 7,
  },
  {
    name: "React",
    icon: <Code className="text-blue-400 w-14 h-14" />,
    description:
      "Experienced in creating reusable components, managing state with hooks and context, and building dynamic UIs. My go-to framework for crafting scalable and maintainable front-end solutions.",
    proficiency: 8,
  },
  {
    name: "Node.js",
    icon: <Terminal className="text-green-500 w-14 h-14" />,
    description:
      "Skilled in server-side development, building APIs with Express.js, and working with databases. I leverage Node.js to create robust and efficient back-end systems that power my applications.",
    proficiency: 6,
  },
  {
    name: "HTML",
    icon: <Code className="text-orange-500 w-14 h-14" />,
    description:
      "Solid understanding of semantic HTML, accessibility, and creating well-structured web pages. The foundation of every project, ensuring optimal structure and SEO.",
    proficiency: 8,
  },
  {
    name: "CSS",
    icon: <Palette className="text-blue-500 w-14 h-14" />,
    description:
      "Expertise in modern CSS techniques, layout design (Flexbox, Grid), responsive design, and creating visually appealing interfaces. I love making things look good and user-friendly.",
    proficiency: 8,
  },
  {
    name: "SQL",
    icon: <Database className="text-gray-600 w-14 h-14" />,
    description:
      "I've worked with relational databases like PostgreSQL. I'm comfortable writing complex queries and optimizing database performance.",
    proficiency: 6,
  },
  {
    name: "Git",
    icon: <GitBranch className="text-gray-700 w-14 h-14" />,
    description:
      "Proficient in version control using Git, including branching, merging, and collaborating with teams. Essential for maintaining code integrity and facilitating seamless teamwork.",
    proficiency: 7,
  },
  {
    name: "Next.js",
    icon: <Zap className="text-purple-500 w-14 h-14" />,
    description:
      "Experienced with Next.js for server-side rendering, static site generation, and building performant web applications. I use Next.js to build optimized and SEO-friendly web applications.",
    proficiency: 7,
  },
  {
    name: "React Native",
    icon: <Smartphone className="text-teal-500 w-14 h-14" />,
    description:
      "I have built mobile apps using React Native, and understand the intricacies of mobile development. I can create cross-platform mobile applications.",
    proficiency: 6,
  },
  {
    name: "Documentation",
    icon: <BookOpen className="text-indigo-500 w-14 h-14" />,
    description:
      "I always write clear and concise documentation for my code. Well-documented code is crucial for maintainability and collaboration.",
    proficiency: 7,
  },
  {
    name: "Performance",
    icon: <Cpu className="text-orange-400 w-14 h-14" />,
    description:
      "I optimize code for speed and efficiency. I strive to create fast and responsive applications.",
    proficiency: 7,
  },
  {
    name: "Testing",
    icon: <FlaskConical className="text-red-400 w-14 h-14" />,
    description:
      "I write unit and integration tests. Thorough testing ensures code quality and application stability.",
    proficiency: 6,
  },
  {
    name: "Layout",
    icon: <LayoutDashboard className="text-sky-400 w-14 h-14" />,
    description:
      "I create responsive and user-friendly layouts. I focus on creating intuitive and visually appealing designs.",
    proficiency: 8,
  },
  {
    name: "Java",
    icon: <Code className="text-red-600 w-14 h-14" />,
    description:
      "Experienced in Java development, including object-oriented programming and building enterprise-level applications.",
    proficiency: 6,
  },
  {
    name: "Go",
    icon: <Rocket className="text-blue-600 w-14 h-14" />,
    description:
      "Familiar with Go for backend development, building efficient and scalable systems.",
    proficiency: 4,
  },
  {
    name: "Docker",
    icon: <Boxes className="text-blue-500 w-14 h-14" />,
    description:
      "Skilled in containerization with Docker, managing application environments, and deployment.",
    proficiency: 6,
  },
  {
    name: "Linux",
    icon: <Terminal className="text-gray-800 w-14 h-14" />,
    description:
      "Comfortable with Linux systems administration, command-line tools, and server management.",
    proficiency: 5,
  },
  {
    name: "MongoDB",
    icon: <Database className="text-green-600 w-14 h-14" />,
    description:
      "Experienced with NoSQL databases, specifically MongoDB, for flexible data storage and retrieval.",
    proficiency: 9,
  },
  {
    name: "Express.js",
    icon: <Server className="text-gray-400 w-14 h-14" />,
    description: "Built APIs and web applications using Express.js.",
    proficiency: 6,
  },
  {
    name: "RESTful APIs",
    icon: <GitCommit className="text-pink-600 w-14 h-14" />,
    description:
      "Designed and developed RESTful APIs for seamless communication between front-end and back-end systems.",
    proficiency: 7,
  },
  {
    name: "Authentication",
    icon: <KeyRound className="text-yellow-600 w-14 h-14" />,
    description:
      "Implemented user authentication and authorization mechanisms to secure web applications.",
    proficiency: 7,
  },
  {
    name: "WebSockets",
    icon: <MessageSquare className="text-blue-400 w-14 h-14" />,
    description:
      "Used WebSockets for real-time, bidirectional communication between client and server.",
    proficiency: 5,
  },
];

const Skills = (props: Props) => {
  return (
    <div className="max-w-[900px] mx-auto backdrop-blur-md p-8">
      <h2 className="text-4xl font-semibold mb-12 text-gray-800 dark:text-gray-100 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        My Skills
      </h2>
      <div className="space-y-16">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.2, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          >
            <div
              className={`flex justify-center w-full md:w-1/3 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {skill.icon}
              </motion.div>
            </div>
            <div className="w-full md:w-2/3">
              <h3
                className={`text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 ${
                  index % 2 === 0 ? "text-left" : "text-right"
                } flex items-center gap-2`}
              >
                {index < 5 && <Trophy className="text-yellow-400 w-6 h-6" />}
                {index >= 5 && index < 10 && (
                  <Wand2 className="text-blue-400 w-6 h-6" />
                )}
                {skill.name}
                {skill.proficiency && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({skill.proficiency}/10)
                  </span>
                )}
              </h3>
              <p
                className={`text-gray-600 dark:text-gray-300 text-lg ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                {skill.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
