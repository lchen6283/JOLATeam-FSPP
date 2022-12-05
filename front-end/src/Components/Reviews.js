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
          
              <div className="flex items-center justify-center px-5 py-5 mb-5"
                key={i}>
                <div className="w-full mx-auto rounded-lg bg-white dark:bg-gray-800 p-10 text-gray-800 dark:text-gray-50">
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
            
            
          );
        })
        //</div>
      ) : (
        <></>
      )}
    </div>
    </div>
    </div>
    </div>
  );
}
