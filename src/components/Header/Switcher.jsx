import UseDarkSide from "../../themes/UseDarkSide";
import iconLightMode from "../../assets/icons/icon-light-mode_32_light.svg";
import iconDarkMode from "../../assets/icons/icon-dark-mode_32_dark.svg";

export default function Switcher() {
  const [nextTheme, setTheme] = UseDarkSide();

  return (
    <>
      <img
        src={iconLightMode}
        alt="icon-light-mode_light"
        className="dark:hidden"
        onClick={() => setTheme(nextTheme)}
      />
      <img
        src={iconDarkMode}
        className="hidden dark:block"
        alt="icon-light-mode_light"
        onClick={() => setTheme(nextTheme)}
      />
    </>
  );
}
