"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, PhoneCall } from "lucide-react";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewResume = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/myresume.pdf";
    link.download = "Shafeeq_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col items-center px-4 space-y-8 p-30">
      {/* Profile Image */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
        <Image
          src="/image/shafeeq.png"
          alt="Shafeeq"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="select-none text-center max-w-3xl space-y-4">
        <h1 className="text-white text-2xl sm:text-5xl md:text-6xl font-bold">
          {"Hi, I'm"} <span className="text-purple-800">Shafeeq</span>
        </h1>

        <h2 className="text-gray-200 text-xl sm:text-2xl md:text-3xl font-semibold">
          Full Stack Web Developer
        </h2>

        <div className="text-gray-300 text-lg sm:text-xl leading-8">
          <p>specializing in the MERN stack with</p>
          <p>expertise in JavaScript, React, Next.js, Node.js, and MongoDB.</p>
          <div className="p-5">
            <button
              onClick={handleViewResume}
              className="relative overflow-hidden border-2 border-dashed border-blue-400 bg-transparent text-white-400 font-semibold py-1 px-5 rounded-lg transition-colors duration-300 hover:border-solid hover:border-white shadow-lg group"
            >
              {/* Background animation layer */}
              <span className="absolute inset-0 bg-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Button text & icon (kept above bg) */}
              <span className="relative z-10 flex items-center justify-center text-sm gap-2">
                View Resume
                <svg
                  className="w-5 h-5 inline-block transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Connect with me section */}
          <div className="flex justify-center items-center mt-4">
            <div className="border-t-2 border-dashed border-white/30 w-16 mx-2"></div>
            <p className="text-semibold text-white/80 text-lg">
              Connect with me
            </p>
            <div className="border-t-2 border-dashed border-white/30 w-16 mx-2"></div>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6 mt-4">
            {/* GitHub Icon */}
            <a
              href="https://github.com/Shafeeqmp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 transition-all duration-300 transform hover:scale-110 hover:bg-white/20 hover:border-white/30 group"
            >
              <svg
                className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/muhammed-shafeeq-254056234/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 transition-all duration-300 transform hover:scale-110 hover:bg-white/20 hover:border-white/30 group"
            >
              <svg
                className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          {/* OR Text */}
          <p className="text-white text-lg font-semibold">Or</p>

          {/* Email with Icon */}
          <div className="flex items-center gap-2">
            <Mail className="text-blue-800 w-5 h-5" />
            <p className="text-white text-lg">2009shafeeq@gmail.com</p>
          </div>

          {/* Request Call with Icon */}
          <div className="flex items-center gap-2">
            <PhoneCall className="text-blue-800 w-5 h-5" />
            <Link
              href="/contact"
              className="text-white text-lg hover:text-violet-800 transition-colors duration-300"
            >
              Request a call
            </Link>
          </div>
        </div>
        {/* Big Underline */}
        <div className="w-full max-w-2xl mx-auto mt-8">
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md w-full">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/20">
              <h2 className="text-2xl font-bold text-white">My Resume</h2>
              <button
                onClick={handleCloseModal}
                className="text-white/70 hover:text-white transition-colors duration-200 text-2xl"
              >
                &times;
              </button>
            </div>

            {/* PDF Content */}
            <div className="h-[60vh] p-4 bg-black/20">
              <iframe
                src="/pdf/myresume.pdf"
                className="w-full h-full rounded-lg border border-white/20"
                title="Resume PDF"
              />
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center p-6 border-t border-white/20">
              <p className="text-white/70 text-sm">Ready to download?</p>
              <button
                onClick={handleDownload}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
