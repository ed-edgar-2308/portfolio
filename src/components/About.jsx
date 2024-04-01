import avatar from "../assets/images/avatar.jpg";

export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-[#111827]">
      <div className="layout px-32 py-[9.6rem]">
        <h6 className="dark:bg-[#374151] dark:text-[#D1D5DB] relative left-[50%] -translate-x-[50%] inline-block font-medium text-[1.4rem] leading-8 text-gray-600 rounded-[12px] px-8 py-[0.4rem] bg-gray-200">
          About me
        </h6>
        <div className="flex gap-[8%] mt-[4.8rem]">
          <div className="w-[28rem] relative">
            <img
              src={avatar}
              alt="avatar"
              className="ml-[3rem] p-[0.8rem] bg-white dark:bg-[#111827] w-[24rem] z-10 relative"
            />
            <div className="bg-gray-200 dark:bg-[#374151] z-0 w-[24rem] h-[24rem] absolute top-16"></div>
          </div>
          <div className="flex-1">
            <h2 className="dark:text-[#F9FAFB] font-semibold text-5xl leading-[3.6rem] -tracking-[2%] text-gray-900">
              Curious about me? Here you have it:
            </h2>
            <p className="dark:text-[#D1D5DB] mt-[2.4rem] text-gray-600">
              I{"'"}m a passionate,{" "}
              <a
                href="https://www.figma.com/"
                className="underline hover:text-[#111827] dark:hover:text-[#F9FAFB] transition-all duration-300">
                self-proclaimed designer
              </a>{" "}
              who specializes in full stack development (React.js & Node.js). I
              am very enthusiastic about bringing the technical and visual
              aspects of digital products to life. User experience, pixel
              perfect design, and writing clear, readable, highly performant
              code matters to me.
            </p>
            <p className="dark:text-[#D1D5DB] mt-[1.6rem] text-gray-600">
              I began my journey as a web developer in 2015, and since then, I
              {"'"}ve continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I{"'"}m building cutting-edge web
              applications using modern technologies such as Next.js,
              TypeScript, Nextjs, Tailwindcss, Supabase and much more.
            </p>
            <p className="dark:text-[#D1D5DB] mt-[1.6rem] text-gray-600">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="dark:text-[#D1D5DB] mt-[1.6rem] text-gray-600">
              When I{"'"}m not in full-on developer mode, you can find me
              hovering around on twitter or on indie hacker, witnessing the
              journey of early startups or enjoying some free time. You can
              follow me on{" "}
              <a
                href="https://twitter.com/"
                className="underline hover:text-[#111827] dark:hover:text-[#F9FAFB] transition-all duration-300">
                Twitter
              </a>{" "}
              where I share tech-related bites and build in public, or you can
              follow me on{" "}
              <a
                href="https://github.com/ed-edgar-2308"
                className="underline hover:text-[#111827] dark:hover:text-[#F9FAFB] transition-all duration-300">
                Github
              </a>
              .
            </p>
            <p className="dark:text-[#D1D5DB] mt-[1.6rem] text-gray-600">
              Finally, some quick bits about me.{" "}
            </p>
            <div className="flex gap-32 mt-[1.6rem]">
              <ul className="dark:text-[#D1D5DB] text-gray-600 list-disc list-inside">
                <li className="mb-4">B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </ul>
              <ul className="dark:text-[#D1D5DB] text-gray-600 list-disc list-inside">
                <li className="mb-4">Avid learner</li>
                <li>Aspiring indie hacker</li>
              </ul>
            </div>
            <p className="dark:text-[#D1D5DB] mt-[1.6rem] text-gray-600">
              One last thing, I{"'"}m available for freelance work, so feel free
              to reach out and say hello! I promise I don{"'"}t bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
