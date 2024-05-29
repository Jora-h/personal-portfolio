import { ProjectCard } from "./ProjectCard";

export const LatestCodeSection = () => (
  <section className="rounded-xl w-full max-w-6xl mx-auto px-4 py-10 md:py-20 mb-10 bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
    <div className="max-w-6xl mx-auto h-24 text-gray-200 dark:text-gray-800">
      <h2
        id="latestcode"
        className="text-5xl md:text-8xl font-bold text-left -mt-20 md:-mt-40"
      >
        Latest Code
      </h2>
    </div>
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <ProjectCard
          imageURL="/dlah.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <ProjectCard
          imageURL="/khaima.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <ProjectCard
          imageURL="/karati.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <ProjectCard
          imageURL="/fire.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <ProjectCard
          imageURL="/midala.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <ProjectCard
          imageURL="/parachut.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <ProjectCard
          imageURL="/qaws.png"
          title="Project 1"
          description="lorem ipsum dolar set amet"
        />
      </div>
    </div>
  </section>
);
