import { useEffect, useState } from "react";

export default function UseDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(nextTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, nextTheme]);

  return [nextTheme, setTheme];
}
