import { useEffect, useState } from "react";

export function Flag() {
  const [angle, setAngle] = useState(0);

  // Rotate the image by 360 degrees every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 360); // Increase the rotation by 360 degrees
    }, 10000); // Set interval to 10 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    
      <img
        src="https://africanscenicsafaris.com/images/contacts-r-icon.svg"
        alt="Rotatable Icon"
        style={{
          transform: `rotate(${angle}deg)`,
          transition: "transform 10s linear", // Smooth 10 second rotation
        }}
        className="w-[40px] md:w-[30px]" // Adjust image size
      />
   
  );
}
