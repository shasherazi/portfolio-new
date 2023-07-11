import projects from "../data/projects.json";

function Projects() {
  return (
    <div className="projects text-white my-10">
      <h1 className="mb-10 text-center font-playfair text-3xl font-bold">
        Projects
      </h1>

      <div className="projects mx-10 md:mx-20">
        <ul className="projects-list flex flex-col items-center gap-5">
          {projects.map((project) => (
            <li
              key={project.id}
              className="project flex flex-col-reverse justify-between gap-10 md:flex-row"
            >
              <div className="project-info md:my-5 flex flex-1 flex-col gap-2">
                <h2 className="project-title font-playfair text-xl font-medium italic">
                  <a
                    href={project.link}
                    className="hover:underline"
                    target="_blank"
                  >
                    {project.name}
                  </a>
                </h2>
                <p className="project-description">{project.description}</p>
                it uses the following technologies:
                <ul className="project-tech list-disc pl-12">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="project-tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-image h-auto md:w-1/2 flex-1">
                <a href={project.link} target="_blank">
                  <img src={project.image} alt={project.name} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
