"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export enum PreferredColorScheme {
  LIGHT = "light",
  DARK = "dark",
}
type TColorScheme = {
  togglePreferredColorScheme?: () => void;
  preferredColorScheme?: string;
};
const ThemeContext = createContext<TColorScheme>({});

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [preferredColorScheme, setPreferredColorScheme] =
    useState<PreferredColorScheme>(PreferredColorScheme.LIGHT);

  const togglePreferredColorScheme = useCallback(() => {
    const currentColorScheme = localStorage.getItem("theme");
    if (currentColorScheme === PreferredColorScheme.LIGHT) {
      document.documentElement.classList.remove(PreferredColorScheme.LIGHT);
      document.documentElement.classList.add(PreferredColorScheme.DARK);
      setPreferredColorScheme(PreferredColorScheme.DARK);
      localStorage.setItem("theme", PreferredColorScheme.DARK); // Save preference in localStorage
    } else {
      document.documentElement.classList.remove(PreferredColorScheme.DARK);
      document.documentElement.classList.add(PreferredColorScheme.LIGHT);
      localStorage.setItem("theme", PreferredColorScheme.LIGHT); // Save preference in localStorage
      setPreferredColorScheme(PreferredColorScheme.LIGHT);
    }
  }, []);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === PreferredColorScheme.DARK ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add(PreferredColorScheme.DARK);
      localStorage.setItem("theme", PreferredColorScheme.DARK); // Save preference in localStorage
      setPreferredColorScheme(PreferredColorScheme.DARK);
    } else {
      document.documentElement.classList.add(PreferredColorScheme.LIGHT);
      localStorage.setItem("theme", PreferredColorScheme.LIGHT); // Save preference in localStorage
      setPreferredColorScheme(PreferredColorScheme.LIGHT);
    }
  }, []);

  const memoizedValues = useMemo(() => {
    return { togglePreferredColorScheme, preferredColorScheme };
  }, [preferredColorScheme]);
  return (
    <ThemeContext.Provider value={memoizedValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
