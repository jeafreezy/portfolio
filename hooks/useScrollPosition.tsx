import { useEffect, useState } from "react";

const useScrollPosition = (offset: number): boolean => {
  const [isPastOffset, setIsPastOffset] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsPastOffset(currentScrollPos > offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return isPastOffset;
};

export default useScrollPosition;
