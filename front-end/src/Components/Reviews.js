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

    <div>
      {reviews.length ? (
        reviews.map((review, i) => {
          return (
            <div
              class="flex items-center justify-center px-5 py-5 mb-5"
              key={i}
            >
              <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
                <div class="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
                  <a href="#" class="block relative">
                    <img
                      alt="profile"
                      src="https://fakeface.rest/face/view/55?gender=male" // USER AVATAR
                      class="mx-auto object-cover rounded-full h-20 w-20 "
                    />
                  </a>
                </div>
                <div class="w-full mb-10">
                  <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                    “
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                    {review.content}
                  </p>
                  <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                    ”
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-md text-indigo-500 font-bold text-center">
                    {review.firstname} {review.lastname}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
                    {review.date}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
