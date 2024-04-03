import iconCopyrightLight from "../assets/icons/icon-copyright_32_light.svg";
import iconCopyrightDark from "../assets/icons/icon-copyright_32_dark.svg";

export default function Footer() {
  return (
    <div className="bg-gray-50 py-[2.4rem] dark:bg-[#111827] flex items-center gap-2 justify-center leading-8 text-[1.4rem] text-gray-600 dark:text-[#d1d5db]">
      <img
        src={iconCopyrightLight}
        alt="icon-copyright_light"
        className="w-[1.6rem] h-[1.6rem] dark:hidden"
      />
      <img
        src={iconCopyrightDark}
        alt="icon-copyright_light"
        className="w-[1.6rem] h-[1.6rem] hidden dark:block"
      />
      2023 |{" "}
      <a
        href="https://www.figma.com/community/file/1262992249991763120"
        target="_blank"
        className="underline cursor-pointer hover:text-[#111827] transition-colors duration-200 dark:hover:text-[#f9fafb]"
      >
        Designed
      </a>{" "}
      and{" "}
      <a
        href="https://github.com/ed-edgar-2308/portfolio"
        target="_blank"
        className="underline cursor-pointer hover:text-[#111827] transition-colors duration-200 dark:hover:text-[#f9fafb]"
      >
        coded
      </a>{" "}
      with <span className="text-red-600 text-[2rem]">❤️</span>️ by Sagar Shah
    </div>
  );
}
