import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/SmakLogos/Transparent_Logo2_01.png";

export default function Footer() {
  return (
    <footer className=" mt-auto w-full p-4 bg-gray-800 rounded-0 shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          to="/"
          aria-current="page"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img src={logo} className=" h-[3rem] " alt="SMAK Logo" />
        </Link>

        <ul className="flex flex-wrap items-center mb-4 text-sm text-gray-400 sm:mb-0 dark:text-gray-400">
          <li>
            <Link
              to="/"
              aria-current="page"
              className="mx-4 hover:text-gray-200 text-lg font-semibold font-[Open Sans]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              aria-current="page"
              className="mx-4 hover:text-gray-200 text-lg font-semibold font-[Open Sans]"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <hr className="sticky mt-2 mb-6 border-2 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8 shadow-[0_5px_8px_2px_rgb(0,0,8)]" />

      <div className="block mt-10 text-md text-gray-200 sm:text-center dark:text-gray-400 relative">
        <b className="absolute top-[-18px] font-light ">Developed by</b>
        <Link
          to="/"
          className="text-3xl text-gray-400 hover:text-primary-gray-20 font-bold font-[Open Sans] ml-1"
        >
          <b className="text-4xl text-smakHighlight font-extrabold font-[Open Sans]">
            JOLA
          </b>
          Team
        </Link>
      </div>
    </footer>
  );
}
