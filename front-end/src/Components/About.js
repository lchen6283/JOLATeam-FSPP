import React from "react";

export default function About() {
  return (
    <div class="w-full py-20 px-0 md:mt-0 bg-[#bfd7ea]">
      <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <h2 className="text-4xl text-smakHighlight font-extrabold font-[Open Sans] text-center ">
        What is SMAK?
      </h2>
      <p>
        <strong>Start from the inside out</strong>. A nice way to both organize your tasks and create more
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
