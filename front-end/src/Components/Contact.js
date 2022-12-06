export default function ProjectTeam() {
  return (
    <>
      <div className="box p-4 bg-smakorange">
        <p className="mt-10 mb-10 text-center text-4xl font-bold text-gray-800">
          The Team
        </p>
        <p className="text-center mb-40 text-2xl font-normal text-white">
          Meet the developers behind the project
        </p>

        <div className="items-center justify-center flex items-center space-y-24 md:space-y-0 pt-64 md:pt-10 lg:pt-0 flex-col md:flex-row justify evenly ">
          <div className="p-4 relative">
            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a
                href="https://github.com/named-josie"
                className="block relative"
              >
                <img
                  alt="profil"
                  src="https://avatars.githubusercontent.com/u/96319104?v=4"
                  className="mx-auto object-cover rounded-lg h-40 w-40 border-4 border-gray-200 shadow-md"
                />
              </a>
            </div>

            <div className="bg-white rounded-lg shadow px-8 py-4 pt-24">
              <div className="text-center">
                <p className="text-2xl text-indigo-900 font-bold">
                  Jossy Pascasio
                </p>
                <p className="text-xl text-gray-800 font-normal">
                  Fullstack Dev
                </p>
                <p className="text-md text-gray-500 w-60 mx-auto py-4 font-light">
                  Hello there, I'm Josie, a full-stack software engineer in NYC.
                  I consider myself a naturally curious person which makes me
                  want to always learn new things, a problem-solver who
                  questions everything, and a hard worker who doesn't take life
                  too seriously and enjoys the little small things in life like
                  a good playlist or series not to mention podcast please feel
                  free to recommend.
                </p>
              </div>
              <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                <a href="https://github.com/named-josie">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/joss-pascasio/">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
                <a href="https://www.notion.so/joinpursuit/Jossy-Josie-Pascasio-40cbbb2b84cc4b0ea05a2eb415a21ecd">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                  >
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 relative">
            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a href="https://github.com/anvaron" className="block relative">
                <img
                  alt="profil"
                  src="https://avatars.githubusercontent.com/u/5624459?v=4"
                  className="mx-auto object-cover rounded-lg h-40 w-40 border-4 border-gray-200 shadow-md"
                />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow px-8 py-4 pt-24">
              <div className="text-center">
                <p className="text-2xl text-indigo-900 font-bold">
                  Oscar A Varon
                </p>
                <p className="text-xl text-gray-800 font-normal">
                  Fullstack Dev
                </p>
                <p className="text-md text-gray-500 w-60 mx-auto py-4 font-light">
                  I am a full-stack web developer currently enrolled in Pursuit,
                  an intensive 12-month software engineering fellowship with a
                  9% acceptance rate. A goal-oriented person, open to acquiring
                  knowledge in new technologies besides being willing to take on
                  new challenges. Highly detailed-oriented and provided with a
                  deep sense of responsibility and enthusiasm.
                </p>
              </div>
              <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                <a href="https://github.com/anvaron">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/oscar-andres-varon/">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
                <a href="https://www.notion.so/joinpursuit/Oscar-Andres-Varon-b993004e7231421e8e368c28159208f6">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                  >
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 relative">
            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a href="https://github.com/lchen6283" className="block relative">
                <img
                  alt="profil"
                  src="https://avatars.githubusercontent.com/u/96262942?v=4"
                  className="mx-auto object-cover rounded-lg h-40 w-40 border-4 border-gray-200 shadow-md"
                />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow px-8 py-4 pt-24">
              <div className="text-center">
                <p className="text-2xl text-indigo-900 font-bold">
                  Lawrence Chen
                </p>
                <p className="text-xl text-gray-800 font-normal">
                  Fullstack Dev
                </p>
                <p className="text-md text-gray-500 w-60 mx-auto py-4 font-light">
                  I am an aspiring software engineer and full stack web
                  developer. I am pursuing software engineering because I have
                  always had a passion for technology. As a creative, I wish to
                  explore the vast array of opportunities with this field. Once
                  I obtain the knowledge and skills necessary to succeed as a
                  developer, I want to build a career at companies that are
                  shifting the world.
                </p>
              </div>
              <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                <a href="https://github.com/lchen6283">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/lawrence-c-991014230/">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
                <a href="https://www.notion.so/joinpursuit/Lawrence-Chen-cb68471ce6914a86b263448514c786b6">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                  >
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 relative">
            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
              <a href="https://github.com/arupay" className="block relative">
                <img
                  alt="profil"
                  src="https://avatars.githubusercontent.com/u/96318127?v=4"
                  class="mx-auto object-cover rounded-lg h-40 w-40 border-4 border-gray-200 shadow-md"
                />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow px-8 py-4 pt-24">
              <div className="text-center">
                <p className="text-2xl text-indigo-900 font-bold">
                  Augusto Rupay
                </p>
                <p className="text-xl text-gray-800 font-normal">
                  Fullstack Dev
                </p>
                <p className="text-md text-gray-500 w-60 mx-auto py-4 font-light">
                  I am a software engineer with a passion for creativity and
                  functionality. I incorporate these concepts into all my
                  projects with the ultimate goal of creating a meaningful UX.
                  As a life-long learner, I embrace challenges and enjoy
                  learning different approaches to solving problems both
                  personally and professionally.
                </p>
              </div>
              <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                <a href="https://github.com/arupay">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/augusto-rupay-a07a286b/">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
                <a href="https://www.notion.so/joinpursuit/Augusto-Rupay-11b7c0146ef4436d9cd7ddd19bfd3e2a">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="text-xl hover:text-gray-800 transition-colors duration-200"
                  >
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
