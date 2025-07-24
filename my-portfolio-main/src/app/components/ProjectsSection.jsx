"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/pp_1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Udesha-SMS/My-Portfolio-",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "AirLine Ticket Reservation System",
    description: "Project 2 description",
    image: "/images/projects/ap_2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Udesha-SMS/AirLine-Ticket-reservation-System",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Online Event Planning system",
    description: "Project 3 description",
    image: "/images/projects/ep_4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Udesha-SMS/Online-Event-Planning-System",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Task Manager",
    description: "Project 4 description",
    image: "/images/projects/mp_3.webp",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Udesha-SMS/Task-Manager",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Private Institute Management ",
    description: "Authentication and CRUD operations",
    image: "/images/projects/pip_5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Udesha-SMS/Private-institute-Management",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Finance Fusion",
    description: "Project 5 description",
    image: "/images/projects/fp_6.avif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Udesha-SMS/FinanceFusion",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-transparent bg-clip-text md:mb-12"
      style={{ backgroundImage: "linear-gradient(to right, #8B5CF6, #06B6D4)" }}
      >My Projects
      </h2>

      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />  <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
