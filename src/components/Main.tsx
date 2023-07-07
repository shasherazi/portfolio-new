import {
  SiGnubash,
  SiFirebase,
  SiRubyonrails,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact, FaPython } from "react-icons/fa";
import TechDetailsPopup from "./TechDetailPopup";

function Main() {
  return (
    <main className="mx-[10%] text-white md:mx-[20%] my-8">
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
        <div className="dotfiles my-5">
          <h3>
            <a
              href="https://github.com/shasherazi/dotfiles"
              className="font-playfair font-bold italic  hover:underline"
            >
              dotfiles
            </a>
            <TechDetailsPopup name="bash" icon={<SiGnubash />} />
            <p className="font-inter font-light ">
              my dotfiles for my arch linux setup
            </p>
          </h3>
        </div>
        <div className="global-playlist my-5">
          <h3>
            <a
              href="https://global-playlist.vercel.app/"
              className="font-playfair font-bold italic  hover:underline"
            >
              globalPlaylist
            </a>
            <TechDetailsPopup name="react" icon={<FaReact />} />
            <TechDetailsPopup name="python" icon={<FaPython />} />
            <TechDetailsPopup name="firebase" icon={<SiFirebase />} />
          </h3>
          <p className="font-inter font-light ">
            a website where anyone can add any song to a playlist anyone can see
            and listen to
          </p>
        </div>
        <div className="budgget my-5">
          <h3>
            <a
              href="https://budget-app-te60.onrender.com/"
              className="font-playfair font-bold italic  hover:underline"
            >
              budgget app{" "}
            </a>
            <TechDetailsPopup name="ruby on rails" icon={<SiRubyonrails />} />
            <TechDetailsPopup name="tailwind css" icon={<SiTailwindcss />} />
          </h3>
          <p className="font-inter font-light ">
            a website where you can add your expenses across different
            categories
          </p>
        </div>
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
