import React from 'react';

export default function PaymentInfo() {
  return (
    <div>
      <h1>Almost Done</h1>
      <h3>Payment Information</h3>
      <form>
        <label>Name on Card</label>
        <input></input>
        <label>Credit Card Number</label>
        <input></input>
        <label>Expire Date</label>
        <input></input>
        <label>CCV</label>
        <input></input>
        <br />
        <input type='submit' />
      </form>
      <button>Back</button>
    </div>
  );
}
