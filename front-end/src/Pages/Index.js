import React from 'react';
import Customers from '../Components/Customers';

export default function Index() {
  return (
    <div className='Index'>
      <h1> All Customers we don't have</h1>
      <Customers />
    </div>
  );
}
