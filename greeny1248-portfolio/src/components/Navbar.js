import React from "react";
import { socials } from "../data";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container  flex flex-wrap p-5 flex-col text-white md:flex-row">
        <h1>
          <a
            href="#about"
            className="ml-3 flex justify-center text-4xl  px-10 py-0"
          >
            Josh Green
          </a>
        </h1>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  flex flex-wrap items-center">
          <a href="#projects" className="mr-5 hover:text-black">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-black">
            Skills
          </a>
          <a href="#about" className="mr-5 hover:text-black">
            About
          </a>
        </nav>
        <section className="flex justify-center items-right ">
          {socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank">
              <img
                className="w-8 h-8 m-2 hover:bg-black"
                alt="social"
                src={social.img}
              />
            </a>
          ))}
        </section>
      </div>
    </header>
  );
}
