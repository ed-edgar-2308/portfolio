import Switcher from "./Switcher";

const Header = () => {
  return (
    <header className="flex items-center px-[11.2rem] py-[1.6rem] justify-between">
      <h2 className="cursor-pointer font-bold text-5xl leading-[3.6rem] -tracking-[2%] text-gray-900 dark:text-[#F9FAFB]">
        {"<RS />"}
      </h2>
      <ul className="flex items-center gap-[2.4rem]">
        <li className="cursor-pointer font-medium leading-[2.4rem] text-gray-600 dark:text-[#D1D5DB]">
          About
        </li>
        <li className="cursor-pointer font-medium leading-[2.4rem] text-gray-600 dark:text-[#D1D5DB]">
          Work
        </li>
        <li className="cursor-pointer font-medium leading-[2.4rem] text-gray-600 dark:text-[#D1D5DB]">
          Testimonials
        </li>
        <li className="cursor-pointer font-medium leading-[2.4rem] text-gray-600 dark:text-[#D1D5DB]">
          Contact
        </li>
        <li className="h-[2.4rem] border-e border-gray-100 dark:border-[#1F2937]"></li>
        <li className="cursor-pointer w-[3.6rem] h-[3.6rem] p-[0.6rem] text-gray-600 dark:text-[#D1D5DB]">
          <Switcher />
        </li>
        <li className="cursor-pointer font-medium leading-[2.4rem] text-gray-50 dark:text-[#111827] px-[1.6rem] py-[0.6rem] rounded-[12px] bg-gray-900 dark:bg-[#F9FAFB]">
          Download CV
        </li>
      </ul>
    </header>
  );
};

export default Header;
