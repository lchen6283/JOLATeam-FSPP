import moment from "moment";
import { useState } from "react";
import { OrderDetails } from "./OrderDetails";

export default function OrderSelect({ pastOrders }) {
  let [selectedOrder, setSelectedOrder] = useState({});
  const handleChange = (event) => {
    let orderObj = pastOrders.find(
      (e) => e.restaurant_name === event.target.value
    );
    setSelectedOrder(orderObj);
  };
  return (
    <div className="p-2 my-3">
      <label htmlFor="underline_select" className="block px-0 py-2 text-lg font-semibold text-gray-700 font-[Open Sans] ">
        Select an order to view details
      </label>
      <select
        id="underline_select"
        className="w-full p-2 text-lg text-gray-400 bg-transparent border-2 border-gray-400 rounded-lg"
        onChange={handleChange}
        defaultValue={"default"}
      >
        <option value="default" disabled>
          Orders list
        </option>
        {pastOrders.map((order, i) => {
          let formattedDate = moment(order.date).utc().format("MM-DD-YYYY");
          return (
            <option value={order.restaurant_name} key={i}>
              {order.restaurant_name} {formattedDate}
            </option>
          );
        })}
      </select>
      {selectedOrder.restaurant_name ? (
        <OrderDetails selectedOrder={selectedOrder} />
      ) : null}
    </div>
  );
}
