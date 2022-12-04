import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews();
  }, []);

  const getAllReviews = async () => {
    await axios
      .get(`${API}/users/all/reviews`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(reviews);
  return (
    // <div>
    //   <h5>Testimonials</h5>
    //   <div>
    //     {reviews &&
    //       reviews.map((review, id) => {
    //         return <div key={id}>{review.content}</div>;
    //       })}
    //   </div>
    // </div>

    <div className="text-center w-full bg-[#bfd7ea]">
      {reviews.length ? (
        reviews.map((review, i) => {
          return (
          <div className="container mx-auto">
          <div
            id="reviews-carousel"
            class="relative flowbite"
            data-carousel="static"
            indicators={false}
          >
            {/* <!-- Carousel wrapper --> */}
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* <!-- Item 1 --> */}
              {/* <Reviews /> */}
              <div
                className="flex items-center justify-center px-5 py-5 mb-5"
                key={i}
              >
                <div className="w-full mx-auto rounded-lg bg-white dark:bg-gray-800 shadow-lg p-10 text-gray-800 dark:text-gray-50">
                  <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://fakeface.rest/face/view/55?gender=male" // USER AVATAR
                        className="mx-auto object-cover rounded-full h-20 w-20 "
                      />
                    </a>
                  </div>
                  <div className="w-full mb-10">
                    <p className="text-3xl text-gray-600 dark:text-gray-100 text-center px-10 font-semibold font-[Open Sans]">
                      {review.content}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-4xl text-smaksalmon font-extrabold font-[Open Sans] text-center">
                      {review.firstname} {review.lastname}
                    </p>
                    <p className="text-md text-gray-500 dark:text-gray-300 text-center">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          {/* <div
            class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
          >
            <button
              type="button"
              class="w-3 h-3 p-2 rounded-full"
              aria-current="false"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 p-2 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 p-2 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div> */}
          {/* <!-- Slider controls --> */}
          {/* <button
            type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button> */}
      </div>


            
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
