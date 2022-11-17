import axios from 'axios';
import { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

export default function Customers() {
  const [customers, setCustomers] = useState([]);
 
  useEffect(() => {
    axios
      .get(`${API}/customer`)
      
      .then((res) => {
        setCustomers(res.data.payload);
      })
      
      .catch((err) => {
        console.log(err);
      });
  }, [customers]);
  

  const allCustomers = customers.map((customer, id) => {
    return <div key={id}>{customer.name}</div>;
  });

  return (
    <div>
      <h5>list of names</h5>
      <h1>{allCustomers}</h1>
      <img
        src='https://www.simplyrecipes.com/thmb/SmdM4XtgPDL7f6wcR3KKz80wriE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Primary_Image-f99dc5adb51e4a73bdca7e104910ba50.jpg'
        alt=''
      ></img>
    </div>
  );
}
