interface TechDetailsProps {
  name: string;
  visible?: boolean;
  x: number;
  y: number;
}

function TechDetails({ name, visible, x, y }: TechDetailsProps) {
  const position = {
    top: `calc(${y}px - 25px)`,
    left: `calc(${x}px + 2px)`,
  };

  return (
    <div
      className={`bg-black
                  text-white
                  ${visible ? "block" : "hidden"}
                  fixed
      `}
      style={position}
    >
      <p className="text-center font-inter font-light px-1">{name}</p>
    </div>
  );
}

export default TechDetails;
