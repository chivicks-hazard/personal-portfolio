"use client";
import { useEffect, useState } from "react";

const DisplayHeader = () => {
  const [displayName, setDisplayName] = useState(" ");
  const [prefix, setPrefix] = useState("I am");

  useEffect(() => {
    const names = ["Victor Chigbo", "Chivicks Hazard"];
    let nameIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timerId;

    const typeAndErase = () => {
      const currentName = names[nameIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      setDisplayName(currentName.slice(0, charIndex));

      // Type an additional " also" only for the second name (index 1)
      if (nameIndex === 1) {
        const alsoText = " also";
        setPrefix(alsoText.slice(0, Math.min(charIndex, alsoText.length)));
      } else {
        setPrefix("");
      }

      let typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentName.length) {
        // Word typed out fully, wait 5 seconds before erasing
        typingSpeed = 5000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Word fully erased, move to the next word
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
        typingSpeed = 500; // Short pause before starting to type again
      }

      timerId = setTimeout(typeAndErase, typingSpeed);
    };

    timerId = setTimeout(typeAndErase, 100);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div>
      <h2 className="text-2xl min-h-[32px]">
        I am <span className="text-aliceblue">{prefix}</span>
      </h2>
      <h1 className="text-3xl md:text-5xl text-aliceblue mt-3 min-h-[36px] md:min-h-[48px]">
        {displayName || "\u00A0"}
      </h1>
      <h2 className="text-2xl">
        {/* Tech Extrovert, Enthusiast, and Polymath ||  */}
        Software Engineer || Front-End Web Developer
      </h2>
    </div>
  );
};

export default DisplayHeader;
