"use client";

import BgAllPage from "../components/bgallPage";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaStar } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

export default function ProjectPage() {
  const projects = [
    {
      title: "Patchi Chocolate Clone",
      subtitle: "Luxury E-commerce Experience",
      image: "/image/Patchi.png",
      github: "https://github.com/Shafeeqmp/patchi-chocolate",
      view: "https://github.com/Shafeeqmp/patchi-chocolate",
      description:
        "A fully responsive static website clone of Patchi Chocolate, featuring elegant UI design and seamless user experience.",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      featured: true,
      category: "Frontend",
    },
    {
      title: "SpaceX Clone",
      subtitle: "Space Exploration Portal",
      image: "/image/spaceX.png",
      github: "https://github.com/Shafeeqmp/spacex",
      view: "https://github.com/Shafeeqmp/spacex",
      description:
        "Responsive SpaceX website clone with modern design principles and interactive elements.",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      featured: false,
      category: "Frontend",
    },
    {
      title: "Arabian Food Court",
      subtitle: "Full Stack Restaurant App",
      image: "/image/E-commerce.png",
      github: "https://github.com/Shafeeqmp/Arabian-Food-Court",
      view: "https://github.com/Shafeeqmp/Arabian-Food-Court",
      description:
        "Complete restaurant web application with menu management, order processing, and dynamic content rendering.",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
      featured: true,
      category: "Full Stack",
    },
    {
      title: "Godiva Chocolate",
      subtitle: "Premium Brand Experience",
      image: "/image/Godiva.png",
      github: "https://github.com/Shafeeqmp/Godiva-Chocolate",
      view: "https://github.com/Shafeeqmp/Godiva-Chocolate",
      description:
        "Elegant Godiva Chocolate website clone focusing on premium visual design and responsive layouts.",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      featured: false,
      category: "Frontend",
    },
    {
      title: "Todo Application",
      subtitle: "CRUD Oparations",
      image: "/image/TodoApp.png",
      github: "https://github.com/Shafeeqmp/Todo_App-server",
      view: "https://github.com/Shafeeqmp/Todo_App-Client",
      description:
        "Todo App built with React/Vite, MongoDB, and styled with Tailwind CSS, focusing on backend development with efficient CRUD operations and responsive design.",
      tech: ["React/Vite", "Tailwind", "MongoDB"],
      featured: false,
      category: "Backend",
    },
    {
      title: "JWT Login Page",
      subtitle: "Secure Login",
      image: "/image/JWTLogin.png",
      github: "https://github.com/Shafeeqmp/mutualfund",
      view: "https://github.com/Shafeeqmp/mutualfund",
      description:
        "Fully secure login page built with Next.js, styled with Tailwind CSS, using MongoDB for user data storage and JWT for authentication and session management.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "JWT"],
      featured: false,
      category: "Authentication",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <BgAllPage />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-start pt-28 pb-8">
          <div className="text-center mb-6">
            {/* <span className="text-purple-400 font-semibold text-lg mb-2 block">
              My Portfolio
            </span> */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Creative{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Projects
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore my journey through code and design. Each project tells a
              story of challenges overcome and skills mastered.
            </p>
          </div>

          {/* Gradient Line */}
          <div className="w-full max-w-3xl mb-12 relative">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 justify-items-center pb-20">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative w-full max-w-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg 
                         border border-white/20 rounded-2xl shadow-2xl overflow-hidden
                         transition-all duration-700 hover:scale-[1.02] hover:shadow-purple-500/30
                         hover:border-purple-400/40 ${
                           project.featured ? "ring-2 ring-purple-400/20" : ""
                         }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                    <FaStar className="text-white text-xs" />
                    <span className="text-white text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                  <span className="text-white text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row h-full">
                {/* Image Container */}
                <div className="relative w-full md:w-2/5 aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:bg-gradient-to-t md:from-black/60 md:via-black/20 md:to-transparent" />

                  {/* Content on Image - Mobile & Tablet */}
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{project.subtitle}</p>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Title & Subtitle - Desktop */}
                  <div className="hidden md:block mb-4">
                    <h3 className="text-white font-bold text-2xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex-1"
                    >
                      <button
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 
                                   text-white rounded-xl shadow-lg hover:shadow-blue-500/20 
                                   transition-all duration-300 backdrop-blur-sm border border-gray-600/30
                                   hover:scale-105 hover:border-blue-400/30 group/btn"
                      >
                        <FaGithub
                          size={16}
                          className="group-hover/btn:scale-110 transition-transform"
                        />
                        <span className="font-semibold text-sm">
                          Source Code
                        </span>
                      </button>
                    </Link>

                    <Link
                      href={project.view}
                      target="_blank"
                      className="flex-1"
                    >
                      <button
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
                                   text-white rounded-xl shadow-lg hover:shadow-purple-500/20 
                                   transition-all duration-300 backdrop-blur-sm border border-purple-400/30
                                   hover:scale-105 hover:border-pink-400/30 group/btn"
                      >
                        <MdWeb
                          size={16}
                          className="group-hover/btn:scale-110 transition-transform"
                        />
                        <span className="font-semibold text-sm">Live Demo</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hover Effect Dots */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center pb-12">
  <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto transform transition-all duration-700 ease-out animate-slide-up">
    <h2 className="text-2xl font-bold text-white mb-4">
      Like what you see?
    </h2>
    <p className="text-gray-300 mb-6">
      I'm always open to discussing new opportunities and creative projects.
    </p>
    <Link href="/contact">
      <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 font-semibold">
        Let's Work Together
      </button>
    </Link>
  </div>
</div>
      </div>
    </div>
  );
}
