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
  // console.log(reviews);
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

    <div className="text-center w-full bg-white">
      <h2 className="py-8 text-4xl text-gray-600 font-extrabold font-[Open Sans] ">
        <b className="text-6xl leading-8">What</b> our customers are saying
      </h2>
      <div className="container mx-auto">
        <div
          id="reviews-carousel"
          class="relative flowbite"
          data-carousel="static"
        >
          {/* <!-- Carousel wrapper --> */}
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            {reviews.length ? (
              reviews.map((review, i) => {
                return (
                  <section class="bg-white dark:bg-gray-900" key={i}>
                    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                      <figure class="max-w-screen-md mx-auto">
                        <svg
                          class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          />
                        </svg>
                        <blockquote>
                          <p class="text-2xl font-medium text-gray-900 dark:text-white">
                            {review.content}
                          </p>
                        </blockquote>
                        <figcaption class="flex items-center justify-center mt-6 space-x-3">
                          <img
                            class="w-6 h-6 rounded-full"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                            alt="profile picture"
                          />
                          <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div class="pr-3 font-medium text-gray-900 dark:text-white">
                              Tom Cruise
                            </div>
                            <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                              CEO at Google
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
