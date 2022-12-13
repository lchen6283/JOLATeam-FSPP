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
    <div className="my-3">
      <label htmlFor="underline_select" className="sr-only">
        Underline select
      </label>
      <select
        id="underline_select"
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        onChange={handleChange}
        defaultValue={"default"}
      >
        <option value="default" disabled>
          Select An Order
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
