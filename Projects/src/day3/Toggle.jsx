import React, { useState } from "react";
const Toggle= () => {
  const [transformation, setTransformation] = useState("Kaioken");
  const toggleTransformation = () => {
    setTransformation((prevTransformation) =>
      prevTransformation === "Kaioken" ? "SuperSaiyan" : "Kaioken"
    );
  };
  return (
    <div>
      <h1 className={transformation}>Hello, World!</h1>
      <button onClick={toggleTransformation}>Toggle Class</button>
    </div>
  );
};
export default Toggle;
