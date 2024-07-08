"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";

type TColorScheme = {
  togglePreferredColorScheme?: () => void;
};
const ColorSchemeContext = createContext<TColorScheme>({});

export const useColorSchemeContext = () => useContext(ColorSchemeContext);

const ColorSchemeProvider = ({ children }: { children: React.ReactNode }) => {
  const togglePreferredColorScheme = useCallback(() => {
    const currentColorScheme = localStorage.getItem("theme");
    if (currentColorScheme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Save preference in localStorage
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light"); // Save preference in localStorage
    }
  }, []);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Save preference in localStorage
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light"); // Save preference in localStorage
    }
  }, []);

  const memoizedValues = useMemo(() => {
    return { togglePreferredColorScheme };
  }, []);
  return (
    <ColorSchemeContext.Provider value={memoizedValues}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider;
