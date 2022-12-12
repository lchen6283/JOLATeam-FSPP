import React from "react";

export function OrderDetails({ selectedOrder }) {
  console.log(selectedOrder);
  const printOrderDetails = (item, idx) => {
    return (
      <li
        className="my-1 text-xl text-gray-600 font-bold font-[Open Sans]"
        key={idx}
      >
        {item.type[0].toUpperCase() + item.type.slice(1)}:{" "}
        <b className=" text-gray-400 font-medium font-[Open Sans]">
          {item.name}
        </b>
      </li>
    );
  };
  return (
    <section className="w-full flex flex-col items-center justify-center py-4 mx-auto md:h-full ">
      <div className=" w-full p-4 md:inset-0 md:h-full">
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white">
            <div className="p-6 space-y-6">
              <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <div className="flex flex-wrap justify-center">
                  <h2 className=" py-4 text-2xl text-smaksalmon font-bold font-[Open Sans]">
                    <div>
                      Restaurant Name :{" "}
                      <b className=" text-gray-400 font-md font-[Open Sans]">
                        {selectedOrder.restaurant_name}
                      </b>
                    </div>
                    <div>
                      <b className=" text-gray-400 text-sm  font-[Open Sans]">
                        {selectedOrder.restaurant_id.location}
                      </b>
                    </div>
                  </h2>
                  <img
                    src={selectedOrder.restaurant_id.image_url}
                    className="h-96 rounded-lg border-[1rem] border-gray-200"
                    alt="..."
                  />
                </div>
              </div>
              <div className="my-4"></div>
              <p className="text-xl text-gray-600 font-bold font-[Open Sans]">
                Delivery Address :
                <b className=" text-gray-400 font-medium font-[Open Sans]">
                  {selectedOrder.delivery_address}
                </b>
              </p>
              <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {selectedOrder.order_contents.map((item, idx) => {
                  return printOrderDetails(item, idx);
                })}
              </ul>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"></div>
            </div>
            <p className="py-2 text-2xl text-center text-smaksalmon font-bold font-[Open Sans]">
              Total Cost : $ 150
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
