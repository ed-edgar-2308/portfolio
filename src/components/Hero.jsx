import avatar from "../assets/images/avatar.jpg";
import iconLocationLight from "../assets/icons/icon-location_32_light.svg";
import iconLocationDark from "../assets/icons/icon-location_32_dark.svg";
import iconGithubLight from "../assets/icons/icon-github_32_light.svg";
import iconGithubDark from "../assets/icons/icon-github_32_dark.svg";
import iconTwitterLight from "../assets/icons/icon-twitter_32_light.svg";
import iconTwitterDark from "../assets/icons/icon-twitter_32_dark.svg";
import iconFigmaLight from "../assets/icons/icon-figma_32_light.svg";
import iconFigmaDark from "../assets/icons/icon-figma_32_dark.svg";

export default function Hero() {
  return (
    <div className="layout flex gap-[8%] py-[9.6rem]">
      <div className="flex-1">
        <h1 className="dark:text-[#F9FAFB] mt-4 font-bold text-8xl leading-[7.2rem] -tracking-[2%] text-gray-900">
          Hi, I{"'"}m Hoang Anh{" "}
          <span className="inline-block animate-waving-hand">👋</span>
        </h1>
        <p className="dark:text-[#D1D5DB] text-gray-600 mt-[0.8rem]">
          I{"'"}m a front-end developer with a focus on creating (and
          occasionally designing) exceptional digital experiences that are fast,
          accessible, visually appealing, and responsive. I have a passion for
          what I do and am always learning to develop myself all the time.
        </p>
        <p className="dark:text-[#D1D5DB] mt-[4.8rem] text-gray-600">
          <img
            src={iconLocationLight}
            alt="icon-location_light"
            className="dark:hidden inline w-[2.4rem] mr-[0.8rem]"
          />
          <img
            src={iconLocationDark}
            alt="icon-location_light"
            className="dark:inline hidden w-[2.4rem] mr-[0.8rem]"
          />
          Ha Noi, Viet Nam
        </p>
        <p className="dark:text-[#D1D5DB] mt-[0.8rem] text-gray-600">
          <span className="relative inline ml-[0.5rem] mr-[1.5rem]">
            <span className="inline-block w-[1.2rem] h-[1.2rem] rounded-full bg-emerald-500"></span>
            <span className="animate-ping absolute top-[1.4px] -left-[0.8px] block w-[1.4rem] h-[1.4rem] rounded-full bg-emerald-500"></span>
          </span>
          Available for new projects
        </p>
        <div className="mt-[4.8rem] flex">
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
      <div className="w-[28rem] relative">
        <img
          src={avatar}
          alt="avatar"
          className="p-[0.8rem] bg-white dark:bg-[#030712] w-[24rem] z-10 relative"
        />
        <div className="bg-gray-200 dark:bg-[#374151] z-0 w-[24rem] h-[24rem] absolute top-12 left-12"></div>
      </div>
    </div>
  );
}
