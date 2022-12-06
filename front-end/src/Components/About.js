import React from "react";

export default function About() {
  return (
      <div className="w-full py-20 px-0 md:mt-0 bg-[#bfd7ea]">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <h2 className="text-[8rem] text-gray-800 font-extrabold font-[Open Sans] ">
            What is <b className="text-[4rem] leading-8"> SMAK?</b>
          </h2>
          <p
            className="first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
          first-letter:mr-3 first-letter:float-left text-justify
        "
        >
          Enjoy a new way to order from the best restaurants in your area.
          <strong> No scrolling, no menus, just great food.</strong> Choose a
          package that best fits your party size, answer a couple questions, and
          leave the rest to us.
        </p>
        {/* <h2 className="text-[8rem] text-gray-800 font-extrabold font-[Open Sans] ">
          How does<b className="text-[4rem] leading-8"> matching</b> work?
        </h2>
        <p
          className="first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
          first-letter:mr-3 first-letter:float-left
        "
          >
            At SMAK, our engineers know how stressful it can be to decide what
            to eat, especially if you're ordering for two. Our SMAK Quiz is
            designed to filter out cuisines you don't like, while focusing on
            the flavors and textures that <strong>you do like</strong>.
          </p>
          <h2 className="text-[8rem] text-gray-800 font-extrabold font-[Open Sans] ">
            Really, no<b className="text-[4rem] leading-8"> menu ? </b>
          </h2>
          <p
            className="first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
          first-letter:mr-3 first-letter:float-left
        "
        >
          That's right! At SMAK we are dedicated to eliminating menu noise, so
          we have partnered with restaurants to curate a secret list of their
          greatest hits dishes to always bring you the very best. Think of it as
          <strong> restaurant week, every week.</strong>
        </p> */}
        <div className="mt-8 text-center">
          <button
            //onClick={handleClick}
            type="button"
            className="py-2 px-24 text-white text-xl transition ease-in duration-200 text-center font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-2xl font-extrabold font-[Open Sans] bg-gray-600"
          >
            See More
          </button>
        </div>
      </article>
    </div>
  );
}
