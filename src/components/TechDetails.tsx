import { useEffect } from "react";

interface TechDetailsProps {
  name: string;
  visible?: boolean;
  x: number;
  y: number;
}

function TechDetails({ name, visible, x, y }: TechDetailsProps) {
  useEffect(() => {
    console.log(x, y);
  }, [x, y]);

  const position = {
    top: `calc(${y}px - 25px)`,
    left: `calc(${x}px + 2px)`,
  };

  return (
    <div
      className={`bg-black
                  text-white
                  ${visible ? "block" : "hidden"}
                  absolute
      `}
      style={position}
    >
      <p className="text-center font-inter font-light px-1">{name}</p>
    </div>
  );
}

export default TechDetails;
