import {
  SiGnubash,
  SiFirebase,
  SiRubyonrails,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact, FaPython } from "react-icons/fa";
import Project from "./Project";

function Main() {
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

      <div className="projects">
        <h2 className="mb-5 mt-10 font-playfair text-2xl font-bold ">
          projects
        </h2>

        <Project
          name="dotfiles"
          description="my dotfiles for my arch linux setup"
          techStack={["bash"]}
          techStackIcons={[<SiGnubash />]}
          link="https://github.com/shasherazi/dotfiles"
        />

        <Project
          name="globalPlaylist"
          description="a website where anyone can add any song to a playlist anyone can see and listen to"
          techStack={["react", "python", "firebase"]}
          techStackIcons={[<FaReact />, <FaPython />, <SiFirebase />]}
          link="https://global-playlist.vercel.app/"
        />

        <Project
          name="budgget app"
          description="a website where you can add your expenses across different categories"
          techStack={["ruby on rails", "tailwind css"]}
          techStackIcons={[<SiRubyonrails />, <SiTailwindcss />]}
          link="https://budget-app-te60.onrender.com/"
        />
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

export default Main;
