import { projects } from "../data/projects"
import { ProjectCard } from "../components/ProjectCard"

export const Projects = () => {

  return (
    <>
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  )
}
