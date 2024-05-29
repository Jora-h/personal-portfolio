import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => (
  <section className="rounded-xl w-full max-w-6xl mx-auto px-4 py-10 md:py-20 mb-10 bg-black dark:bg-white text-white dark:text-black">
    <div className="max-w-6xl mx-auto h-24 text-black dark:text-white">
      <h2
        id="projects"
        className="text-5xl md:text-8xl font-bold text-left -mt-20 md:-mt-40"
      >
        Projects
      </h2>
    </div>
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <ProjectCard
          imageURL="/dlah.png"
          title="Personal Website"
          description="another project"
          link="https://github.com/Jora-h/personal-portfolio"
          disabled
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <ProjectCard
          imageURL="/khaima.png"
          title="Project 1"
          link="https://github.com/Jora-h/personal-portfolio"
          description="lorem ipsum dolar set amet"
          disabled
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <ProjectCard
          imageURL="/karati.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
          link="https://github.com/Jora-h/personal-portfolio"
          disabled
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <ProjectCard
          imageURL="/fire.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
          link="https://github.com/Jora-h/personal-portfolio"
          disabled
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <ProjectCard
          imageURL="/bonia.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
          link="https://github.com/Jora-h/personal-portfolio"
          disabled
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <ProjectCard
          imageURL="/goal.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
          link="https://github.com/Jora-h/personal-portfolio"
          disabled
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <ProjectCard
          imageURL="/midala.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
          link="https://github.com/Jora-h/personal-portfolio"
          disabled
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <ProjectCard
          imageURL="/pancake.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
          link="https://github.com/Jora-h/personal-portfolio"
          disabled
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <ProjectCard
          imageURL="/qaws.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
          link="https://github.com/Jora-h/personal-portfolio"
          disabled
        />
      </div>
    </div>
  </section>
);
