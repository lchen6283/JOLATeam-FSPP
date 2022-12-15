import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MapImage from "./MapImage";
// import { Modal } from "flowbite-react/lib/cjs/components/Modal/Modal";
import { FormContext } from "../Pages/OrderConfirmation";

import { ToastContainer, toast } from "react-toastify";
import { MdCheckCircle } from "@react-icons/all-files/md/MdCheckCircle";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";
import axios from 'axios'

const API = process.env.REACT_APP_API_URL;

function Success() {
  const { finalOrderData } = useContext(FormContext);
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();
  let id = auth.data ? auth.data.id : "2";

  // MODAL
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";
  
  const [orderid, setOrderid] = useState()
  const [review, setReview] = useState({
    userid: finalOrderData.userid,
    title: "",
    rating: "",
    content: "",
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  

  useEffect(() => {

    const importFlowbiteFunc = function (flowbitePathStr) {
      const flowbiteScriptEl = document.createElement("script");
      flowbiteScriptEl.setAttribute("src", flowbitePathStr);
      document.body.appendChild(flowbiteScriptEl);
    };
    importFlowbiteFunc("https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"); // here goes your path to a local flowbite.js you want to import
  }, []);
  
  const getCurrentOrder = async () => {
    // Get the orderid
    await axios
      .get(`${API}/users/${id}/orders`)
      .then((res) => {
        if(res.data) {
          const [{id: currentOrder}] = (res.data).sort((a, b) => b.id - a.id)
          setOrderid(currentOrder)
        }
      })
      .catch((e) => console.log(e));
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();

    // const notification = toast.loading("Submitting Review...", {
    //   position: toast.POSITION.TOP_CENTER,
    // });

    axios
      .post(`${API}/reviews/${orderid}`, review)
      .then(
        (res) => {
          if(res) {
            handleModal();

            toast.update({
              render: "Review saved successfully",
              type: "success",
              isLoading: false,
              autoClose: 1000,
            });
            
            // After validate credentials, proceed to redirect to Dashboard
            setTimeout(() => {
              navigate(from, { replace: true });
            }, 1050);
          }
        },
        (error) => console.error(error)
      )
      .catch((err) => {
        toast.update(id, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
        console.warn("catch", err)
      });
  };

  const handleModal = () => {
    document.querySelector('[modal-backdrop]').remove();
  }

  const handleReturn = () => {
    navigate(from, { replace: true });
  }
  
  console.log(finalOrderData);
  return (
    <div className="container mx-auto p-0 ">
      <h2 className=" mx-auto my-0 py-4 px-10 text-center text-2xl font-bold text-smakHighlight border-0 border-smakHighlight rounded-xl">
        Your SMAK order has been processed successfully!
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-1 mx-auto rounded-xl shadow-xl bg-orange-20 border-0 border-orange-400">
        <div className="p-4">
          <div className="flex flex-col p-8 bg-white rounded-xl">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white">
            Order Details
          </h2>
            <div className="my-0">
              <img
                className="w-full h-96 object-cover border-8 border-gray-200 rounded-lg shadow-lg"
                src={
                  finalOrderData ? finalOrderData.restaurant_id.image_url : null
                }
              />
            </div>
          
            <div className="py-0 px-0 my-8 border-2 border-gray-200 rounded-lg">
              <h2 className="p-2 mb-4 text-xl font-bold text-gray-600 bg-gray-200 font-[Open Sans]">
                Order Provider
              </h2>
              <ul className="text-left">
                <li className="flex flex-row px-2 my-2 text-xl text-gray-600 font-[Open Sans]">
                  Restaurant:
                  <span className="ml-2 text-gray-600 font-bold font-[Open Sans]">
                    {finalOrderData.restaurant_id.name}
                  </span>
                </li>
                <li className="flex flex-row px-2 my-2 text-xl text-gray-600 font-[Open Sans]">
                  Cuisine:
                  <span className="ml-4 text-gray-600 font-bold font-[Open Sans]">
                    {finalOrderData.restaurant_id.matchedcategory["label"]}
                  </span>
                </li>
                {/* <li className="my-0 text-xl font-semibold text-gray-600 dark:text-white">
                  Delivery Address: <span className="my-4 text-xl font-bold text-gray-800 font-[Open Sans]">{finalOrderData.delivery_address}</span> 
                </li>
                <li className="my-0 text-xl font-semibold text-gray-600 dark:text-white">
                  Total Cost: <span className="my-4 text-xl font-bold text-gray-800 font-[Open Sans]">$ {finalOrderData.total_cost}</span> 
                </li> */}
              </ul>
            </div>
            <div className="py-0 px-0 mt-2 mb-2 border-2 border-gray-200 rounded-lg">
              <h2 className="p-2 mb-4 text-xl font-bold text-gray-600 bg-gray-200 font-[Open Sans]">
                Order Items
              </h2>
              <ul className="text-left">
                {finalOrderData.order_contents.map((item, i) => {
                  return (
                    <li
                      className="flex flex-row my-2 text-xl text-gray-600 font-[Open Sans]"
                      key={i}
                    >
                      <MdCheckCircle className="w-6 h-6 py-0 px-0 my-1 mx-2 fill-gray-600 border-0 rounded-sm" />
                      {item.type}:
                      <span className="ml-2 text-gray-600 font-bold font-[Open Sans]">
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-col p-8 bg-white rounded-xl">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white">
              Delivery Details
            </h2>
            <div className="w-full h-[500px] my-0 object-cover border-8 border-gray-200 rounded-lg shadow-lg ">
              <MapImage
                latitude={finalOrderData.restaurant_id.coordinates.latitude}
                longitude={finalOrderData.restaurant_id.coordinates.longitude}
              />
            </div>
            <div className="my-8 border-2 border-gray-200 rounded-lg shadow-lg">
              <ul className="p-4 text-left">
                <li className=" my-1 text-xl text-gray-600 font-[Open Sans]">
                  Restaurant Address:
                  <span className="ml-2 justify-right text-gray-600 font-bold font-[Open Sans]">
                    {finalOrderData.restaurant_id.location}
                  </span>
                </li>
                <li className=" my-1 text-xl text-gray-600 font-[Open Sans]">
                  Delivery Address:
                  <span className="ml-2 text-gray-600 font-bold font-[Open Sans]">
                    {finalOrderData.delivery_address}
                  </span>
                </li>
                <li className=" my-1 text-xl text-gray-600 font-[Open Sans]">
                  Total Cost:
                  <span className="ml-2 text-gray-600 font-bold font-[Open Sans]">
                    ${finalOrderData.total_cost}
                  </span>
                </li>
                <li className=" my-1 text-xl text-gray-600 font-[Open Sans]">
                  Estimate Time Arrival:
                  <span className="ml-2 text-gray-600 font-bold font-[Open Sans]">
                    20 Minutes
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4 my-4">
              {/* CALL MODAL */}
              <button
                id="reviewButton" 
                data-modal-toggle="reviewOrderModal" 
                // class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" 
                type="button"
                className=" px-8 py-3 text-left text-lg font-bold rounded-xl text-white bg-gray-600 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white font-[Open Sans]"
                onClick={getCurrentOrder}
              >
                Review Order
              </button>
              <button
                // class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" 
                type="button"
                className=" px-8 py-3 text-left text-lg font-bold rounded-xl text-white bg-gray-600 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white font-[Open Sans]"
                onClick={handleReturn}
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>

      </div>
      {/* <!-- Main modal --> */}
      <div 
        id="reviewOrderModal" 
        tabIndex="-1" 
        aria-hidden="true" 
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
          <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
              {/* <!-- Modal content --> */}
              <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                  {/* <!-- Modal header --> */}
                  <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Review Order
                    </h3>
                      <button 
                        type="button" 
                        class="hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                        data-modal-toggle="reviewOrderModal"
                        //onChange={}
                      
                      >
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                      </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <form action="#">
                      <div class="grid gap-4 mb-4 sm:grid-cols-2">
                          <div>
                            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input 
                              type="text" 
                              name="title" 
                              id="title"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                              placeholder=""
                              value={review.title}
                              onChange={handleTextChange}
                            />
                          </div>
                          <div>
                              <label for="rating" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                              <input 
                                type="number" 
                                id="rating"
                                min="1"
                                max="5"
                                step="1"
                                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="rating"
                                value={review.rating}
                                onChange={handleTextChange}
                                required
                              />
                          </div>
                          <div class="sm:col-span-2">
                              <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                              <textarea 
                                id="content" 
                                rows="5" 
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                placeholder="Write your review..."
                                value={review.content}
                                onChange={handleTextChange}
                                required
                              >
                              </textarea>                    
                          </div>
                      </div>
                      <div class="flex items-center space-x-4">
                          <button 
                            type="submit" 
                            class="text-white bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            onClick={handleSubmitReview}  
                          >
                            Submit
                          </button>
                          <button 
                            id="btnClose" 
                            type="button" 
                            class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                            data-modal-toggle="reviewOrderModal"
                            // ref={button => this.buttonElement = button}
                            // ref={closeRef}
                            // onClick={handleModal}
                            //onClose={onClose}
                          >
                            Cancel
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </div>
  );
}
export default Success;
