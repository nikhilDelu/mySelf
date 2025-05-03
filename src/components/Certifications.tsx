import React from "react";
import { motion } from "framer-motion";

interface Certification {
  title: string;
  description: string;
  institution: string;
  imageUrl: string;
}

const certificationsData: Certification[] = [
  {
    title: "Docker for the Absolute Beginner",
    description:
      "Optimized Docker images, automated deployments, and managed containers.",
    institution: "KodeKloud",
    imageUrl:
      "https://placehold.co/400x400/007BFF/FFFFFF/png?text=Docker&font=Montserrat", // Replace
  },
  {
    title: "NDG Linux Unhatched",
    description:
      "Expert in Linux internals, Bash scripting, package management, and system boot.",
    institution: "NDG",
    imageUrl:
      "https://placehold.co/400x400/28A745/FFFFFF/png?text=Linux&font=Montserrat", // Replace
  },
];

const Certifications = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Certifications
      </h2>
      <div className="space-y-12">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="rounded-lg shadow-md w-48 h-48 object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {cert.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
