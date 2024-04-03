import iconInboxLight from "../assets/icons/icon-inbox_32_light.svg";
import iconInboxDark from "../assets/icons/icon-inbox_32_dark.svg";
import iconCopyLight from "../assets/icons/icon-copy_32_light.svg";
import iconCopyDark from "../assets/icons/icon-copy_32_dark.svg";
import iconPhoneLight from "../assets/icons/icon-phone_32_light.svg";
import iconPhoneDark from "../assets/icons/icon-phone_32_dark.svg";
import iconGithubLight from "../assets/icons/icon-github_32_light.svg";
import iconGithubDark from "../assets/icons/icon-github_32_dark.svg";
import iconTwitterLight from "../assets/icons/icon-twitter_32_light.svg";
import iconTwitterDark from "../assets/icons/icon-twitter_32_dark.svg";
import iconFigmaLight from "../assets/icons/icon-figma_32_light.svg";
import iconFigmaDark from "../assets/icons/icon-figma_32_dark.svg";

export default function Contact() {
  return (
    <div className="py-[9.6rem] text-center">
      <h6 className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block font-medium text-[1.4rem] leading-8 text-gray-600 rounded-[12px] px-8 py-[0.4rem] bg-gray-200">
        Get in touch
      </h6>
      <p className="mt-[1.6rem] text-[2rem] leading-[2.8rem] text-center text-gray-600 dark:text-[#D1D5DB]">
        What{"'"}s next? Feel free to reach out to me if you{"'"}re looking{" "}
        <br /> for a developer, have a query, or simply want to connect.
      </p>
      <div className="inline-flex items-center gap-4 mt-20">
        <img
          src={iconInboxLight}
          alt="icon-inbox_light"
          className="dark:hidden"
        />
        <img
          src={iconInboxDark}
          alt="icon-inbox_dark"
          className="hidden dark:block"
        />
        <h3 className="dark:text-[#F9FAFB] mx-[0.4rem] font-semibold text-[3.6rem] leading-16 -tracking-[2%] text-gray-900">
          ed.edgar.2308@gmail.com
        </h3>
        <img
          src={iconCopyLight}
          alt="icon-copy_light"
          className="dark:hidden cursor-pointer hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200"
        />
        <img
          src={iconCopyDark}
          alt="icon-copy_dark"
          className="hidden dark:block cursor-pointer hover:bg-[#252F3E] active:bg-[#1b273a] rounded-lg p-1.5 transition-colors duration-200"
        />
      </div>
      <br />
      <div className="inline-flex items-center gap-4 mt-[1.6rem]">
        <img src={iconPhoneLight} alt="icon-inbox_light" className="hidden" />
        <img
          src={iconPhoneDark}
          alt="icon-phone__dark"
          className="hidden dark:block"
        />
        <h3 className="dark:text-[#F9FAFB] mx-[0.4rem] font-semibold text-[3.6rem] leading-16 -tracking-[2%] text-gray-900">
          +84 383338094
        </h3>
        <img
          src={iconCopyLight}
          alt="icon-copy_light"
          className="hidden cursor-pointer hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200"
        />
        <img
          src={iconCopyDark}
          alt="icon-copy_dark"
          className="hidden dark:block cursor-pointer hover:bg-[#252F3E] active:bg-[#1b273a] rounded-lg p-1.5 transition-colors duration-200"
        />
      </div>
      <p className="dark:text-[#D1D5DB] mt-[4.8rem] text-gray-600">
        You may also find me on these platforms!
      </p>
      <div className="mt-[0.8rem] inline-flex">
        <a
          href="https://github.com/ed-edgar-2308"
          target="_blank"
          className="p-[0.6rem] dark:hidden mr-[0.4rem] hover:bg-[#f3f4f6] transition-all duration-300 rounded-[0.8rem]"
        >
          <img
            src={iconGithubLight}
            alt="icon-github_light"
            className="w-[2.4rem]"
          />
        </a>
        <a
          href="https://github.com/ed-edgar-2308"
          target="_blank"
          className="p-[0.6rem] hidden dark:block mr-[0.4rem] hover:bg-[#1f2937] transition-all duration-300 rounded-[0.8rem]"
        >
          <img
            src={iconGithubDark}
            alt="icon-github_light"
            className="w-[2.4rem]"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="p-[0.6rem] dark:hidden mr-[0.4rem] hover:bg-[#f3f4f6] transition-all duration-300 rounded-[0.8rem]"
        >
          <img
            src={iconTwitterLight}
            alt="icon-twitter_light"
            className="w-[2.4rem]"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="p-[0.6rem] hidden dark:block mr-[0.4rem] hover:bg-[#1f2937] transition-all duration-300 rounded-[0.8rem]"
        >
          <img
            src={iconTwitterDark}
            alt="icon-twitter_light"
            className="w-[2.4rem]"
          />
        </a>
        <a
          href="https://www.figma.com/"
          target="_blank"
          className="p-[0.6rem] dark:hidden hover:bg-[#f3f4f6] transition-all duration-300 rounded-[0.8rem]"
        >
          <img
            src={iconFigmaLight}
            alt="icon-figma_light"
            className="w-[2.4rem]"
          />
        </a>
        <a
          href="https://www.figma.com/"
          target="_blank"
          className="p-[0.6rem] hidden dark:block hover:bg-[#1f2937] transition-all duration-300 rounded-[0.8rem]"
        >
          <img
            src={iconFigmaDark}
            alt="icon-figma_light"
            className="w-[2.4rem]"
          />
        </a>
      </div>
    </div>
  );
}
