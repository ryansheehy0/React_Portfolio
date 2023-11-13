import Project from "./projects/Project"
import {projects} from "./projects/projects"

export default function Portfolio(){

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 w-full h-full gap-4 justify-items-center">
      {projects.map(project => (
        <Project key={project.title} {...project}/>
      ))}
    </div>
  )
}

export const pageTitle = "Portfolio"