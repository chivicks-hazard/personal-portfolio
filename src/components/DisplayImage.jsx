"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const DisplayImage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

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

      let typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentName.length) {
        typingSpeed = 5000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
        setImageIndex(nameIndex);
        typingSpeed = 500;
      }

      // Track the deleting state to trigger the blur fade transition
      setIsFading(isDeleting);
      timerId = setTimeout(typeAndErase, typingSpeed);
    };

    timerId = setTimeout(typeAndErase, 100);

    return () => clearTimeout(timerId);
  }, []);

  const imageSrc =
    imageIndex === 0 ? "/images/profile_pic.jpg" : "/images/ghibli-mask.png";

  return (
    <Image
      src={imageSrc}
      alt="Victor Chigbo"
      width={0}
      height={0}
      sizes="100vw"
      className={`mx-auto rounded-sm col-span-1 row-span-1 w-full md:w-1/3 transition-all duration-[700ms] ease-in-out blur-0 opacity-100 `}
    />
  );
};

export default DisplayImage;
