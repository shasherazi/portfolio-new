import { Link } from "react-router-dom";
import Project from "../components/Project";
import projects from "../data/projects.json";

function Home() {
  return (
    <main className="mx-[10%] my-8 text-white md:mx-[20%]">
      <h1 className="main-heading mb-5 font-playfair text-3xl font-bold ">
        shasherazi
      </h1>
      <p className="font-inter font-light ">
        im shasherazi, a 20 year old{" "}
        <a
          href="https://en.wikipedia.org/wiki/Pakistan"
          className="font-playfair font-normal italic hover:underline"
        >
          pakistani
        </a>{" "}
        coder with too many interests, and almost all of them include computers
        one way or another. like linux, python, rust, chess, reading, and
        learning new things.
      </p>

      <div className="projects relative">
        <h2 className="mb-5 mt-10 font-playfair text-2xl font-bold ">
          projects
        </h2>

        <h2 className="absolute right-0 top-0 mt-2 font-inter font-extralight">
          <Link to="/projects" className="font-inter hover:underline">
            view all projects
          </Link>
        </h2>

        {projects.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            techStackIcons={project.techStackIcons}
            link={project.link}
            key={project.id}
          />
        ))}
      </div>
      <div className="contact">
        <h2 className="mb-5 mt-10 font-playfair text-2xl font-bold ">
          contact
        </h2>
        <ul className="font-inter font-light ">
          <li>
            <a
              href="https://twitter.com/shasherazi"
              className="font-playfair font-medium italic hover:underline"
            >
              shasherazi
            </a>{" "}
            on twitter
          </li>
          <li>
            <a
              href="https://github.com/shasherazi"
              className="font-playfair font-medium italic hover:underline"
            >
              shasherazi
            </a>{" "}
            on github
          </li>
          <li>
            <a
              href="https://linkedin.com/in/shasherazi"
              className="font-playfair font-medium italic hover:underline"
            >
              shasherazi
            </a>{" "}
            on linkedin
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Home;
