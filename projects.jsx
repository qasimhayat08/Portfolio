import React from "react";
import {
  FaExternalLinkAlt,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Australian Indigenous Doctors' Association",
    category: "Healthcare Website",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    description:
      "A modern healthcare organization website built using WordPress with responsive layouts, optimized performance, and a clean user experience.",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    link: "https://aidn.org.au/",
    color: "#5B5BF7",
  },
  {
    id: 2,
    title: "Picton Civil",
    category: "Construction Website",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
    description:
      "Professional construction company website featuring service pages, project showcase, responsive design, and performance optimization.",
    tech: ["WordPress", "Elementor", "CSS", "JavaScript"],
    link: "https://pictoncivil.com.au/",
    color: "#10B981",
  },
  {
    id: 3,
    title: "Priority Insurance Brokers",
    category: "Insurance Website",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200",
    description:
      "Business website designed for an insurance company with modern UI, responsive layouts, and optimized customer experience.",
    tech: ["WordPress", "HTML", "CSS", "Elementor"],
    link: "https://priorityib.com.au/",
    color: "#EF4444",
  },
  {
    id: 4,
    title: "Rolling Thunder Skating",
    category: "Sports Website",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200",
    description:
      "A fun and engaging skating club website with event information, booking sections, responsive pages, and interactive design.",
    tech: ["WordPress", "Elementor", "JavaScript"],
    link: "https://rollingthunderskating.com/",
    color: "#F59E0B",
  },
];

const icon = (tech) => {
  switch (tech) {
    case "WordPress":
      return <FaWordpress />;
    case "HTML":
      return <FaHtml5 />;
    case "CSS":
      return <FaCss3Alt />;
    case "JavaScript":
      return <FaJs />;
    default:
      return null;
  }
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-[#0a0a1a] via-[#050816] to-[#0a0a1a] text-white min-h-screen py-24 overflow-hidden"
    >
      {/* Animated background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-blue-400 uppercase tracking-[8px] text-sm mb-4 font-mono">
            Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Featured WordPress Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8 text-lg">
            Here are some professional WordPress websites I developed for
            real clients using Elementor, HTML, CSS and JavaScript with
            fully responsive layouts and performance optimization.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image with overlay gradient */}
              <div className="overflow-hidden h-[320px] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60"></div>
                {/* Category tag on image */}
                <span
                  className="absolute bottom-4 left-4 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm"
                  style={{
                    background: `${project.color}dd`,
                    color: "white",
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mt-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mt-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tech.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/5 rounded-full px-4 py-2 text-sm text-gray-300 hover:bg-white/20 transition-colors duration-300"
                    >
                      <span className="text-blue-400">{icon(item)}</span>
                      {item}
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all"
                >
                  Visit Website
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;