import imageProject from "../assets/images/avatar.jpg";
import iconLinkLight from "../assets/icons/icon-external-link_32_light.svg";
import iconLinkDark from "../assets/icons/icon-external-link_32_dark.svg";

export default function Work() {
  return (
    <div className="bg-gray-50 dark:bg-[#111827]">
      <div className="layout py-[9.6rem]">
        <h6 className="dark:bg-[#374151] dark:text-[#D1D5DB] relative left-[50%] -translate-x-[50%] inline-block font-medium text-[1.4rem] leading-8 text-gray-600 rounded-[12px] px-8 py-[0.4rem] bg-gray-200">
          Work
        </h6>
        <p className="mt-[1.6rem] text-[2rem] leading-[2.8rem] text-center text-gray-600 dark:text-[#D1D5DB]">
          Some of the noteworthy projects I have built:
        </p>
        <div className="mt-[4.8rem] rounded-[12px] overflow-hidden shadow-md flex">
          <div className="dark:bg-[#374151] dark:border-[#1F2937] flex items-center w-1/2 border-r-[1px] p-[4.8rem] bg-gray-50 border-gray-100">
            <img
              src={imageProject}
              alt=""
              className="drop-shadow-lg rounded-[1.2rem] cursor-pointer hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="w-1/2 p-[4.8rem] bg-white dark:bg-[#1F2937]">
            <h4 className="dark:text-[#F9FAFB] text-8 font-semibold leading-[2.8rem] text-gray-900">
              Fiskil
            </h4>
            <p className="text-gray-600 mt-[2.4rem] dark:text-[#D1D5DB]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] mr-[0.8rem] inline-block mt-[2.4rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              React
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Next.js
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Typescript
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Nest.js
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              PostgreSQL
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Tailwindcss
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Figma
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Cypress
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Storybook
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Git
            </span>
            <a href="#">
              <img
                src={iconLinkLight}
                alt="icon-link_light"
                className="dark:hidden mt-[2.4rem] rounded-[0.8rem] p-[0.6rem] cursor-pointer hover:bg-gray-50 transition-all duration-300"
              />
              <img
                src={iconLinkDark}
                alt="icon-link_light"
                className="hidden dark:block mt-[2.4rem] rounded-[0.8rem] p-[0.6rem] cursor-pointer hover:bg-gray-50 transition-all duration-300"
              />
            </a>
          </div>
        </div>
        <div className="mt-[4.8rem] rounded-[12px] overflow-hidden shadow-md flex">
          <div className="w-1/2 p-[4.8rem] bg-white dark:bg-[#1F2937]">
            <h4 className="dark:text-[#F9FAFB] text-8 font-semibold leading-[2.8rem] text-gray-900">
              Fiskil
            </h4>
            <p className="text-gray-600 mt-[2.4rem] dark:text-[#D1D5DB]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] mr-[0.8rem] inline-block mt-[2.4rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              React
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Next.js
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Typescript
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Nest.js
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              PostgreSQL
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Tailwindcss
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Figma
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Cypress
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Storybook
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Git
            </span>
            <a href="#">
              <img
                src={iconLinkLight}
                alt="icon-link_light"
                className="dark:hidden mt-[2.4rem] rounded-[0.8rem] p-[0.6rem] cursor-pointer hover:bg-gray-50 transition-all duration-300"
              />
              <img
                src={iconLinkDark}
                alt="icon-link_light"
                className="hidden dark:block mt-[2.4rem] rounded-[0.8rem] p-[0.6rem] cursor-pointer hover:bg-gray-50 transition-all duration-300"
              />
            </a>
          </div>
          <div className="dark:bg-[#374151] dark:border-[#1F2937] flex items-center w-1/2 border-l-[1px] p-[4.8rem] bg-gray-50 border-gray-100">
            <img
              src={imageProject}
              alt=""
              className="drop-shadow-lg rounded-[1.2rem] cursor-pointer hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
        <div className="mt-[4.8rem] rounded-[12px] overflow-hidden shadow-md flex">
          <div className="dark:bg-[#374151] dark:border-[#1F2937] flex items-center w-1/2 border-r-[1px] p-[4.8rem] bg-gray-50 border-gray-100">
            <img
              src={imageProject}
              alt=""
              className="drop-shadow-lg rounded-[1.2rem] cursor-pointer hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="w-1/2 p-[4.8rem] bg-white dark:bg-[#1F2937]">
            <h4 className="dark:text-[#F9FAFB] text-8 font-semibold leading-[2.8rem] text-gray-900">
              Fiskil
            </h4>
            <p className="text-gray-600 mt-[2.4rem] dark:text-[#D1D5DB]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] mr-[0.8rem] inline-block mt-[2.4rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              React
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Next.js
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Typescript
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Nest.js
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              PostgreSQL
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Tailwindcss
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Figma
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Cypress
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Storybook
            </span>
            <span className="dark:bg-[#374151] dark:text-[#D1D5DB] inline-block mt-[0.8rem] mr-[0.8rem] rounded-[12px] px-8 py-[0.4rem] bg-gray-200 text-[1.4rem] font-medium leading-8 text-gray-600">
              Git
            </span>
            <a href="#">
              <img
                src={iconLinkLight}
                alt="icon-link_light"
                className="dark:hidden mt-[2.4rem] rounded-[0.8rem] p-[0.6rem] cursor-pointer hover:bg-gray-50 transition-all duration-300"
              />
              <img
                src={iconLinkDark}
                alt="icon-link_light"
                className="hidden dark:block mt-[2.4rem] rounded-[0.8rem] p-[0.6rem] cursor-pointer hover:bg-gray-50 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
