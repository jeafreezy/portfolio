import { useEffect, useState } from "react";

/**
 *This hook tracks the user scroll position. It's used to determine when to show the sticky mobile bottom navbar when the user scrolls.
 *
 * offset: The offset to track.
 *
 * @returns: true when the user has scrolled passed the specified offset, false if otherwise.
 */
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
