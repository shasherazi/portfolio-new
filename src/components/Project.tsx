import {
  SiFirebase,
  SiGnubash,
  SiRubyonrails,
  SiTailwindcss,
} from "react-icons/si";
import TechDetailsPopup from "./TechDetailPopup";
import { IconType } from "react-icons";
import { FaPython, FaReact } from "react-icons/fa";

const iconComponents: { [key: string]: IconType } = {
  SiGnubash,
  SiFirebase,
  SiRubyonrails,
  SiTailwindcss,
  FaReact,
  FaPython,
};

interface ProjectProps {
  name: string;
  description: string;
  techStack: string[];
  techStackIcons: string[];
  link: string;
}

function Project({
  name,
  description,
  techStack,
  techStackIcons,
  link,
}: ProjectProps) {
  return (
    <div className={`${name} my-5`}>
      <h3>
        <a
          href={link}
          className="font-playfair font-bold italic  hover:underline"
        >
          {name}
        </a>
        {techStack.map((tech, index) => {
          const Icon = iconComponents[techStackIcons[index]];
          return <TechDetailsPopup name={tech} icon={<Icon />} key={tech} />;
        })}
      </h3>
      <p className="font-inter font-light ">{description}</p>
    </div>
  );
}

export default Project;
