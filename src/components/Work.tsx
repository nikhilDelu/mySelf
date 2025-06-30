import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  videoSrc?: string;
  link?: string;
  videoType?: "mp4" | "youtube";
}

const projectsData: Project[] = [
  {
    title: "Myself: Portfolio Website",
    description:
      "A personal portfolio website designed to showcase projects, skills, and experiences in a clean, responsive layout. Built with React and Tailwind CSS, the site uses Framer Motion for smooth animations and includes interactive project previews, contact form integration, and optimized performance for all devices.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    videoSrc: "https://www.youtube.com/embed/yourVideoID",
    link: "https://my-self-git-main-nikhildelus-projects.vercel.app/",
    videoType: "youtube",
  },

  // {
  //   title: "Muzify: Live Stream Music App",
  //   description:
  //     "A platform for YouTubers to enhance live streams by allowing viewers to add YouTube song links and pay to prioritize their songs in the queue.  Integrates with YouTube live streams.",
  //   technologies: ["React", "YouTube API", "Stripe API"],
  //   videoSrc: "https://www.youtube.com/embed/jGhobd9nGoU",
  //   link: "#",
  //   videoType: "youtube",
  // },
  // {
  //   title: "Social Post Recommendation App",
  //   description:
  //     "A social media application that recommends posts to users based on their preferences.",
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "Express.js",
  //     "Recommendation Algorithms",
  //   ],
  //   videoSrc: "https://www.youtube.com/embed/jGhobd9nGoU",
  //   link: "#",
  // },
  {
    title: "Food Waste Reduction App (Gemini API)",
    description:
      "A web application that helps users reduce food waste by providing smart solutions and recommendations.  Utilizes the Gemini API for intelligent food analysis and recipe suggestions.",
    technologies: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Gemini API",
    ],
    videoSrc: "https://www.youtube.com/embed/jGhobd9nGoU",
    link: "https://food-waste-reduction-two.vercel.app/",
    videoType: "mp4",
  },
];

const Work = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | HTMLIFrameElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index === hoveredProject) {
        if ("play" in video) {
          (video as HTMLVideoElement)
            .play()
            .catch((e) =>
              console.error(
                "Video play failed:",
                e,
                "for project:",
                projectsData[index].title
              )
            );
        }
      } else if (video) {
        if ("pause" in video) {
          (video as HTMLVideoElement).pause();
        }
        if ("setCurrentTime" in video) {
          (video as HTMLVideoElement).currentTime = 0;
        }
      }
    });
  }, [hoveredProject, projectsData]);

  const handleMouseEnter = (index: number) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center">
        My Work
      </h2>
      <div className="space-y-12">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800">
                  {index === 0 && (
                    <img
                      src="ms.png"
                      className="object-contain h-full rounded-sm"
                    />
                  )}

                  {index === 1 && (
                    <img
                      src="fwr.png"
                      className="object-cover h-full rounded-sm"
                    />
                  )}
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 transition-colors duration-200"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
