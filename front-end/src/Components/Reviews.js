import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews();
  }, []);

  const getAllReviews =  () => {
    axios
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
    <div className="text-center w-full bg-white">
      <h2 className="py-8 text-4xl text-gray-600 font-extrabold font-[Open Sans] ">
        <b className="text-6xl leading-8">What</b> our customers are saying 
      </h2>
      <div className="container mx-auto">
        <div
          id="reviews-carousel"
          class="relative flowbite"
          data-carousel="slide"
        >
          {/* <!-- Carousel wrapper --> */}
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          {reviews.length ? (
            reviews.map((review, i) => {
              return (
                // Review slide
                <div
                  className="hidden duration-1000 ease-in-out"
                  data-carousel-item
                  key={i}
                >
                  <section class="bg-white dark:bg-gray-900" >
                    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                      <figure class="max-w-screen-md mx-auto">
                        <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                        </svg> 
                        <blockquote>
                          <p class="text-2xl font-medium text-gray-900 dark:text-white">{review.content}</p>
                        </blockquote>
                        <figcaption class="flex items-center justify-center mt-6 space-x-3">
                          <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                          <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div class="pr-3 font-medium text-gray-900 dark:text-white">{review.firstname} {review.lastname}</div>
                            <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Rating: {review.rating}</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </div>
              );
            })
            //</div>
          ) : (
            <></>
          )}
          </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {reviews.length ? (
              reviews.map((button, i) => {
                let slide = `carousel-indicator-${i}`
              return (
                <button key={i} id={slide} type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide"></button>
              );
            })
            ) : (
              <></>
            )}
          </div>
          {/* <!-- Slider controls --> */}
          <button id="data-carousel-prev" type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              <span class="hidden">Previous</span>
            </span>
          </button>
          <button id="data-carousel-next" type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="hidden">Next</span>
            </span>
          </button>
      
      </div>
    </div>
  );
}
