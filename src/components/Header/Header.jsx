import Switcher from "./Switcher";

const Header = () => {
  return (
    <header className="bg-white/50 backdrop-blur-xl dark:bg-black/50 h-[6.8rem] w-full flex items-center fixed top-0 z-50 left-[50%] -translate-x-[50%]">
      <div className="flex items-center justify-between layout">
        <a
          href=""
          className="font-bold text-5xl leading-[3.6rem] -tracking-[2%] text-gray-900 dark:text-[#F9FAFB]"
        >
          {"<Ed />"}
        </a>
        <ul className="flex items-center gap-[2.4rem]">
          <li className="hover:text-[#111827] dark:hover:text-[#f9fafb] transition-all duration-300 font-medium text-gray-600 dark:text-[#D1D5DB]">
            <a href="#">About</a>
          </li>
          <li className="hover:text-[#111827] dark:hover:text-[#f9fafb] transition-all duration-300 font-medium text-gray-600 dark:text-[#D1D5DB]">
            <a href="#">Work</a>
          </li>
          <li className="hover:text-[#111827] dark:hover:text-[#f9fafb] transition-all duration-300 font-medium text-gray-600 dark:text-[#D1D5DB]">
            <a href="#">Testimonials</a>
          </li>
          <li className="hover:text-[#111827] dark:hover:text-[#f9fafb] transition-all duration-300 font-medium text-gray-600 dark:text-[#D1D5DB]">
            <a href="#">Contact</a>
          </li>
          <li className="h-[2.4rem] border-e border-gray-100 dark:border-[#1F2937]"></li>
          <li className="hover:bg-[#f3f4f6] dark:hover:bg-[#1F2937] transition-all duration-300 rounded-[0.8rem] cursor-pointer w-[3.6rem] h-[3.6rem] p-[0.6rem] text-gray-600 dark:text-[#D1D5DB]">
            <Switcher />
          </li>
          <li className="font-medium text-gray-50 dark:text-[#111827] px-[1.6rem] py-[0.6rem] rounded-[12px] bg-gray-900 hover:bg-[#374151] transition-all duration-300 dark:bg-[#F9FAFB] dark:hover:bg-[#e5e7eb]">
            <button>Download CV</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
