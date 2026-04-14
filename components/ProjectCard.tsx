import { ArrowRight } from "lucide-react";

export function ProjectCard({
  link,
  projectTitle,
  projectDescription,
}: {
  link?: string;
  projectTitle: string;
  projectDescription: string;
}) {
  return (
    <div className="group backdrop-blur-lg bg-black/20 border border-white/[0.15] rounded-2xl p-6 shadow-lg hover:bg-black/30 hover:border-white/[0.25] hover:shadow-xl transition-all duration-300">
      <div className="text-xl font-bold text-white mb-2">{projectTitle}</div>
      <div className="text-base text-white/90 leading-relaxed mb-4">
        {projectDescription}
      </div>
      {link ? (
        <div className="flex justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-medium hover:text-nh-carolinablue transition-colors group/link"
          >
            Visit project{" "}
            <ArrowRight
              size={18}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </a>
        </div>
      ) : (
        <div className="flex justify-end text-white/40 text-sm italic">
          Coming soon
        </div>
      )}
    </div>
  );
}
