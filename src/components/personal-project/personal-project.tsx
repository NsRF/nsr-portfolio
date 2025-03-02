'use client'

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const projects = [
  {
    id: "ambar",
    title: "Ambar Performance",
    subtitle: "Budget System & Invoicing Platform",
    description: "A comprehensive solution for budget generation and service reporting with government-integrated invoicing capabilities.",
    details: [
      "This project facilitates the generation of budgets and various time-period reports (monthly, weekly, daily) for services executed by the client.",
      "A central requirement was the need to emit government-integrated invoices directly, which was implemented through specialized APIs.",
      "Originally built with ASP.NET 6, it was recently upgraded to ASP.NET 8 with MongoDB for faster data handling, employing Hexagonal Architecture with Domain-Driven Design (DDD)."
    ],
    techStack: [
      { name: "ASP.NET 8", category: "Backend" },
      { name: "MongoDB", category: "Database" },
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Azure", category: "Cloud" },
      { name: "GitHub Actions", category: "CI/CD" }
    ],
    features: [
      "Government-integrated invoice generation",
      "Role-based authentication system",
      "Fast and scalable data retrieval",
      "Customizable reporting dashboard",
      "Real-time notifications"
    ],
    mediaType: "video",
    mediaSrc: "/ambar-preview.mp4",
    mediaAlt: "Ambar Performance Interface Preview",
    links: [
      { type: "demo", label: "Live Demo", url: "#" },
      { type: "case-study", label: "Case Study", url: "#" }
    ]
  }
];

export default function PersonalProjects() {
  const [activeTab, setActiveTab] = useState("description");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoHover = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play failed:", error);
      });
    }
  };

  const handleVideoLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm font-medium text-primary mb-2">Featured Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold">What I've Built</h2>
          <p className="mt-4 text-muted-foreground">
            Showcasing my key projects that demonstrate my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Media Section */}
                <motion.div 
                  className="order-2 lg:order-1 relative overflow-hidden bg-muted flex items-center justify-center p-8"
                  variants={fadeInUp}
                >
                  <div className="w-full rounded-lg overflow-hidden border border-border shadow-md bg-gradient-to-r from-background to-muted/60 backdrop-blur">
                    <div className="relative w-full pt-[56.25%]">
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.mediaType === 'video' ? (
                          <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            loop
                            muted
                            playsInline
                            onMouseEnter={handleVideoHover}
                            onMouseLeave={handleVideoLeave}
                            controls
                          >
                            <source src={project.mediaSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img 
                            src={project.mediaSrc} 
                            alt={project.mediaAlt} 
                            className="w-full h-full object-cover"
                          />
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  className="order-1 lg:order-2 p-8 lg:p-10 flex flex-col"
                  variants={fadeInUp}
                >
                  <div className="flex-1">
                    <div className="space-y-2 mb-6">
                      <motion.span 
                        className="inline-block text-xs font-medium text-primary px-2 py-1 rounded-full bg-primary/10"
                        variants={fadeInUp}
                      >
                        Featured Project
                      </motion.span>
                      <motion.h3 
                        className="text-2xl lg:text-3xl font-bold"
                        variants={fadeInUp}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-lg text-muted-foreground"
                        variants={fadeInUp}
                      >
                        {project.subtitle}
                      </motion.p>
                    </div>

                    {/* Tabs */}
                    <div className="mb-6">
                      <div className="border-b border-border">
                        <nav className="flex space-x-8" aria-label="Project tabs">
                          <button
                            onClick={() => setActiveTab("description")}
                            className={`border-b-2 py-3 px-1 text-sm font-medium ${
                              activeTab === "description" 
                                ? "border-primary text-primary" 
                                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                            }`}
                          >
                            Overview
                          </button>
                          <button
                            onClick={() => setActiveTab("tech")}
                            className={`border-b-2 py-3 px-1 text-sm font-medium ${
                              activeTab === "tech" 
                                ? "border-primary text-primary" 
                                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                            }`}
                          >
                            Tech Stack
                          </button>
                          <button
                            onClick={() => setActiveTab("features")}
                            className={`border-b-2 py-3 px-1 text-sm font-medium ${
                              activeTab === "features" 
                                ? "border-primary text-primary" 
                                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                            }`}
                          >
                            Features
                          </button>
                        </nav>
                      </div>

                      <div className="mt-6">
                        {activeTab === "description" && (
                          <motion.div 
                            className="space-y-4 text-muted-foreground"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.details.map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                            ))}
                          </motion.div>
                        )}

                        {activeTab === "tech" && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech) => (
                                <div 
                                  key={tech.name}
                                  className="bg-muted px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                                >
                                  <span className="text-muted-foreground">{tech.category}:</span>
                                  <span>{tech.name}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {activeTab === "features" && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ul className="space-y-2 text-muted-foreground">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    {project.links.map((link) => (
                      <a
                        key={link.type}
                        href={link.url}
                        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                          link.type === "demo"
                            ? "bg-primary text-white hover:bg-primary/90"
                            : "border border-border hover:bg-muted"
                        }`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}