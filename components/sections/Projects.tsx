import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-[80vh] lg:min-h-screen bg-gradient-to-br from-nh-darkblue to-nh-carolinablue flex flex-col justify-center items-center py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative blur orbs */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-nh-lightblue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-nh-notsodarkblue/25 rounded-full blur-[100px] pointer-events-none" />

      <code className="relative z-10 text-4xl lg:text-5xl font-bold text-white text-center mb-10">
        /home/Projects
      </code>
      <div className="relative z-10 w-full max-w-xl px-6 flex flex-col gap-5">
        <ProjectCard
          projectTitle="Raven"
          projectDescription="Raven is an experiment of mine to build a personal PaaS platform, similar to Heroku or other services to deploy dockerized apps easily via a web interface or API. Currently work in progress."
        />
        <ProjectCard
          projectTitle="Shelly Plug Exporter"
          projectDescription="A small webapplication to export Shelly Plugs to Prometheus with a nice GUI. Coming soon."
        />
        <ProjectCard
          link="https://getaurora.dev"
          projectTitle="Aurora"
          projectDescription="A beautiful KDE desktop experience powered by Universal-Blue and the ultimate workstation for everyone."
        />
      </div>
    </section>
  );
}
