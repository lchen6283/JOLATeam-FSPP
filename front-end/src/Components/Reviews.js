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
        console.log(res);
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(reviews);
  return (
    <div>
      <h5>Testimonials</h5>
      <div>
        {reviews &&
          reviews.map((review, id) => {
            return <div key={id}>{review.content}</div>;
          })}
      </div>
    </div>
  );
}
