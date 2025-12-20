import type { Project } from "../types/project";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="project-card border border-zinc-800 rounded-md p-4 mb-4 hover:border-zinc-600 transition">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>
        <strong className="">Status:</strong> {project.status}
      </p>
      <p>
        <strong>Stack:</strong> {project.stack.join(", ")}
      </p>

      <div className="links">
        <a href={project.repoUrl} target="_blank" rel="noreferrer">
          Repo
        </a>

        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </div>
  );
};
