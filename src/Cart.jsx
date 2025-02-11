import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addpurchase, clearCart, decrement, increment, remove } from "./store";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let finalitems = cartItems.map((item, index) => (
    <li key={index}>
      {item.name} - ₹{item.price}
      <button onClick={() => dispatch(increment(item))}>+</button>&emsp;
      <button onClick={() => dispatch(decrement(item))}>-</button>&emsp;
      <b>Quantity: </b>{item.quantity}&emsp;
      <button onClick={() => dispatch(remove(item))}>Remove</button>
    </li>
  ));

  // Calculate total price
  let totalprice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  // Discount-related states
  let [discountpercentage, setdiscountpercentage] = useState(0);
  let [showDiscount, setshowDiscount] = useState(false);
  let discountprice = (discountpercentage * totalprice) / 100;

  // Coupon-related states
  let [couponCode, setcouponCode] = useState(""); 
  let [coupondisper, setcoupondisper] = useState(0);
  let[showCoupon,setshowCoupon]=useState(false);

  // Function to handle coupon code application
  const handlingCoupon = () => {
    switch (couponCode.toUpperCase()) {
      case "RATAN10": setcoupondisper(10);break;
      case "RATAN20":setcoupondisper(20);break;
      case "RATAN30":setcoupondisper(30);break;
      default:
        alert("Invalid coupon code. Please try again.");
        setcoupondisper(0);
    }
  };

  // Calculate coupon discount amount
  let coupondiscountamount = (totalprice * coupondisper) / 100;

  // Calculate final price after all discounts
  let finalprice = totalprice - discountprice - coupondiscountamount;

  // Get purchase date
  const purchasedate = new Date().toLocaleDateString();

  // Handle purchase
  const handlePurchaseDetails = () => {
    const PurchaseDetails = {
      items: [...cartItems],
      totalamount: totalprice,
      date: purchasedate
    };
    dispatch(addpurchase(PurchaseDetails));
    dispatch(clearCart());
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="cart-container">
          <h2>Welcome to Cart Page</h2>
          <h3>Cart Items:</h3>
          
          <ol className="cart-items">
            {finalitems}
          </ol>
  
          <p className="final-amount">Total Price: ₹{totalprice.toFixed(2)}</p>
  
          {/* Discount Section */}
          <div className="discount-section">
            <button onClick={() => { setdiscountpercentage(10); setshowDiscount(true); }}>Apply 10% Discount</button>&nbsp;
            <button onClick={() => { setdiscountpercentage(20); setshowDiscount(true); }}>Apply 20% Discount</button>&nbsp;
            <button onClick={() => { setdiscountpercentage(30); setshowDiscount(true); }}>Apply 30% Discount</button>
          </div>
  
          {showDiscount && (
            <div className="discount-section">
              <p>Discount Applied: {discountpercentage}%</p>
              <p>Discount Amount: ₹{discountprice.toFixed(2)}</p>
            </div>
          )}
  
          {/* Coupon Section */}
          <div className="coupon-section">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setcouponCode(e.target.value)}
              placeholder="Enter coupon code"
            />
            &nbsp;
            <button onClick={() => { handlingCoupon(); setshowCoupon(true); }}>Apply Coupon</button>
          </div>
  
          {showCoupon && (
            <div className="coupon-section">
              <p>Coupon Code Applied: {couponCode}</p>
              <p>Coupon Discount: {coupondisper}%</p>
              <p>Coupon Discount Amount: ₹{coupondiscountamount.toFixed(2)}</p>
            </div>
          )}
  
          <p className="final-amount">Final Amount to Pay: ₹{finalprice.toFixed(2)}</p>
  
          <button className="purchase-btn" onClick={handlePurchaseDetails}>
            Complete Purchase
          </button>
        </div>
      ) : (
        <p>Cart is empty</p>
      )}
    </>
  );
  
}
export default Cart;
