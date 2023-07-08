import TechDetailsPopup from "./TechDetailPopup";

interface ProjectProps {
  name: string;
  description: string;
  techStack: string[];
  techStackIcons: any[];
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
        {techStack.map((tech, index) => (
          <TechDetailsPopup
            name={tech}
            icon={techStackIcons[index]}
            key={tech}
          />
        ))}
      </h3>
      <p className="font-inter font-light ">{description}</p>
    </div>
  );
}

export default Project;
