import { useEffect, useState } from "react";
import TechDetails from "./TechDetails";
import React from "react";

interface TechDetailsPopupProps {
  name: string;
  icon: React.ReactElement;
}

function TechDetailsPopup({ name, icon }: TechDetailsPopupProps) {
  const [showTechDetails, setShowTechDetails] = useState(false);
  const [techDetailsPosition, setTechDetailsPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTechDetailsPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <span
      className="tech-icon"
      onMouseEnter={() => setShowTechDetails(true)}
      onMouseLeave={() => setShowTechDetails(false)}
    >
      {React.cloneElement(icon, { className: "mx-1 mb-1 inline" })}
      {
        <TechDetails
          name={name}
          visible={showTechDetails}
          x={techDetailsPosition.x}
          y={techDetailsPosition.y}
        />
      }
    </span>
  );
}

export default TechDetailsPopup;
