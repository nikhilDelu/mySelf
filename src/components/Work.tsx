import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Music, Users, PlayCircle } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  videoSrc?: string;
  link?: string;
  videoType?: "mp4" | "youtube"; // Added videoType
}

// Gemini icon (using a placeholder since Gemini is not in lucide-react)
const GeminiIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 8a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6z" />
    <path d="M2 8h2" />
    <path d="M20 8h2" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
    <path d="M5.6 5.6l1.4 1.4" />
    <path d="M17 17l1.4 1.4" />
  </svg>
);

const projectsData: Project[] = [
  {
    title: "Hypo: Quiz Olympiad",
    description:
      "An interactive quiz platform for olympiad preparation, featuring real-time quizzes, a Stripe-integrated payment system for entry fees, and prize distribution to winners.  Quiz questions are dynamically generated from uploaded books.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "WebSockets"],
    videoSrc: "https://www.youtube.com/embed/jGhobd9nGoU", // Example YouTube URL
    link: "#",
    videoType: "youtube",
  },
  {
    title: "Muzify: Live Stream Music App",
    description:
      "A platform for YouTubers to enhance live streams by allowing viewers to add YouTube song links and pay to prioritize their songs in the queue.  Integrates with YouTube live streams.",
    technologies: ["React", "YouTube API", "Stripe API"],
    videoSrc: "https://www.youtube.com/embed/jGhobd9nGoU",
    link: "#",
    videoType: "youtube",
  },
  {
    title: "Social Post Recommendation App",
    description:
      "A social media application that recommends posts to users based on their preferences.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Recommendation Algorithms",
    ],
    videoSrc: "https://www.youtube.com/embed/jGhobd9nGoU",
    link: "#",
  },
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
    link: "#",
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
                <AnimatePresence>
                  {hoveredProject === index && project.videoSrc ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-lg shadow-lg overflow-hidden"
                    >
                      {project.videoType === "youtube" ? (
                        <iframe
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={project.videoSrc}
                          title={`${project.title} Demo`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-48 h-48 rounded-lg"
                          style={{ aspectRatio: "1 / 1" }}
                        />
                      ) : (
                        <iframe
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={project.videoSrc}
                          className="w-48 h-48 rounded-lg object-cover"
                          style={{
                            aspectRatio: "1 / 1",
                          }}
                          onError={(e) => console.error("Video load error", e)}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                        <PlayCircle className="text-white w-12 h-12" />
                      </div>
                    </motion.div>
                  ) : (
                    <div className="w-48 h-48 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800">
                      {index === 0 && (
                        <BookOpen className="text-blue-500 w-12 h-12" />
                      )}
                      {index === 1 && (
                        <Music className="text-pink-500 w-12 h-12" />
                      )}
                      {index === 2 && (
                        <Users className="text-purple-500 w-12 h-12" />
                      )}
                      {index === 3 && (
                        <GeminiIcon className="text-green-500 w-12 h-12" />
                      )}
                    </div>
                  )}
                </AnimatePresence>
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
