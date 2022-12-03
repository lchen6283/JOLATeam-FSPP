import React from "react";

export default function About() {
  return (
    <div class="w-full py-20 px-0 md:mt-0 bg-[#bfd7ea]">
      <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h2 className="text-[8rem] text-gray-800 font-extrabold font-[Open Sans] ">
          What is <b className="text-[4rem] leading-8"> SMAK?</b>
        </h2>
        <p class="first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
          first-letter:mr-3 first-letter:float-left
        ">
          Start from the inside out. A nice way to both organize your tasks and create more
          user-friendly prototypes is by building your prototypes ‘inside out’. Start by focusing on what will
          be important to your user, like a Buy now button or an image gallery, and list each element by order
          of priority. This way, you’ll be able to create a prototype that puts your users’ needs at the heart
          of your design.
        </p>
        <p>
          And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.
        </p>
      </article>
    </div>
  );
}
