import UseDarkSide from "../themes/UseDarkSide";

export default function Switcher() {
  const [nextTheme, setTheme] = UseDarkSide();

  return (
    <>
      <img
        src="./src/assets/icons/icon-light-mode_32_light.svg"
        alt="icon-light-mode_light"
        className="dark:hidden"
        onClick={() => setTheme(nextTheme)}
      />
      <img
        src="./src/assets/icons/icon-dark-mode_32_dark.svg"
        className="hidden dark:block"
        alt="icon-light-mode_light"
        onClick={() => setTheme(nextTheme)}
      />
    </>
  );
}
