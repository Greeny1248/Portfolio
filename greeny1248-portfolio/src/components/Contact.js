import React from "react";
import { socials } from "../data";
export default function Contact() {
  return (
    <section id="contact" className="relative bg-white">
      <div className="container flex justify-center px-5 py-10 mx-auto bg-white">
        {socials.map((social) => (
          <a href={social.link} key={social.name} target="_blank">
            <img
              alt={social.name}
              className="w-20 h-20 m-2 hover:bg-black"
              src={social.img}
            />
          </a>
        ))}
      </div>
      <h1 className="flex justify-center sm:text-4xl text-3xl font-medium title-font text-black mb-4">
        Want to contact me? Get in touch above or email me at... joshua.green1248@gmail.com
      </h1>
    </section>
  );
}
