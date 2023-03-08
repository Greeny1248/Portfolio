import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./JG-logo.png"
        />
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex justify-center"></div>
          <h1 className="title-font sm:text-8xl text-7xl mb-7 font-medium text-white justify right px-20">
            Creative <br></br> Problem <br></br> Solver.
            <br className="hidden lg:inline-block" />
            <section className="container flex">
              <ul className="sm:text-3xl text-2xl mb-4 font-medium grid justify-center px-0">
                <li>Intuitive</li>
                <li>User-friendly</li>
                <li>Aestheticly pleasing</li>
                <li>Maintainable</li>
                <li>Creative, apps.</li>
              </ul>
            </section>
          </h1>
        </div>
      </div>
      <section className="flex justify-center py-10">
        <a
          href="#contact"
          className="inline-flex text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 py-2 px-6 focus:outline-none hover:text-black rounded text-lg"
        >
          Contact
        </a>
        <a
          href="#projects"
          className="ml-4 inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
        >
          Projects
        </a>
      </section>

      <div className="mx-auto flex px-10 md:flex-row flex-col items-center">
        <p className="mb-8 leading-snug text-grey-200 flex  sm:text-3xl text-2xl mb-3 font-medium lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16">
          Junior software developer with a passion for design, problem solving,
          efficiency, and creating beautiful projects. Strong foundation in
          fullstack development.
        </p>
      </div>
    </section>
  );
}
