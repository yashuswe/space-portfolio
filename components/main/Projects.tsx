import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Project1.svg"
          title="Token Graphs Website"
          description="Next.js application deployed on Vercel for real-time cryptocurrency
          analytics, showcasing dynamic data visualization and user engagement through interactive charts."
          link="https://token-graphs.vercel.app/"
        />
        <ProjectCard
          src="/Project2.svg"
          title="Rudimental Project"
          description=" Deployed on Netlify, this project is a rudimental hands on
          project showcasing carousal, overlaying sections, and an animation, all with pure SCSS."
          link="https://cheery-naiad-4f6cd9.netlify.app/"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Explore the digital cosmos with my Next.js, TypeScript, and Framer Motion-powered portfolio—a seamless journey through space-themed interfaces and celestial wonders."
        />
      </div>
    </div>
  );
};

export default Projects;
