import React, { useState } from "react";
import { ArrowUpRight, Code } from "lucide-react";
import LazyImage from "./LazyImage";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web", "Mobile", "Cloud"];

  const projects = [
    {
      title: "Enterprise E-commerce",
      description: "AI-powered shopping platform with real-time analytics",
      image: "/src/assets/logo.jpg",
      category: "Web",
      technologies: ["React", "Node.js", "AWS"],
    },
    {
      title: "FinTech Mobile App",
      description: "Next-gen banking with biometric authentication",
      image: "/src/assets/logo.jpg",
      category: "Mobile",
      technologies: ["React Native", "Firebase"],
    },
    {
      title: "Cloud Migration",
      description: "Large-scale infrastructure transformation",
      image: "/src/assets/logo.jpg",
      category: "Cloud",
      technologies: ["AWS", "Kubernetes"],
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time insights and analytics for social campaigns",
      image: "/src/assets/logo.jpg",
      category: "Web",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
    },
    {
      title: "Healthcare Tracker App",
      description: "Monitor patient health metrics remotely",
      image: "/src/assets/logo.jpg",
      category: "Mobile",
      technologies: ["Flutter", "Firebase"],
    },
    {
      title: "Serverless API",
      description: "Highly scalable API using serverless architecture",
      image: "/src/assets/logo.jpg",
      category: "Cloud",
      technologies: ["AWS Lambda", "API Gateway"],
    },
    {
      title: "Portfolio Website",
      description: "Personal website with interactive UI",
      image: "/src/assets/logo.jpg",
      category: "Web",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      title: "Fitness Mobile App",
      description: "Track workouts and progress with smart notifications",
      image: "/src/assets/logo.jpg",
      category: "Mobile",
      technologies: ["React Native", "GraphQL"],
    },
    {
      title: "Data Lake Setup",
      description: "Centralized storage for big data analytics",
      image: "/src/assets/logo.jpg",
      category: "Cloud",
      technologies: ["AWS S3", "Athena"],
    },
  ];

  return (
    <section className="relative py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Judul dan paragraf */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-blue-500">Project</span> Saya
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
          Berikut ini beberapa proyek yang telah saya kerjakan. Setiap proyek
          dirancang dengan fokus pada inovasi, fungsionalitas, dan tampilan
          modern.
        </p>

        {/* Filter kategori */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === category
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/30"
                  : "border-gray-700 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid proyek */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects
            .filter(
              (project) =>
                activeFilter === "All" || project.category === activeFilter
            )
            .map((project) => (
              <div
                key={project.title}
                className="group bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-blue-600/30 transition-all duration-500"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 text-left">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-800 text-sm text-gray-300"
                      >
                        <Code size={14} /> {tech}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-all">
                    View Details
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
