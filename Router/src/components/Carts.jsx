import React, { useEffect, useState } from 'react';
import './Cart.css'; 

export default function Carts({ cartList, setCartList }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = cartList.reduce((acc, cart) => acc + cart.price, 0);
    setTotal(sum);
  }, [cartList]);

  const removeProductFromCart = (index) => {
    const arr = [...cartList];
    arr.splice(index, 1);
    setCartList(arr);
  };

  return (
    <div className="cart-container">
      <h2>Cart Page / Total - ₹ {total.toFixed(2)}</h2>

      {cartList.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartList.map((cart, index) => (
            <div className="cart-item" key={index}>
              <p>{cart.title}</p>
              <img src={cart.image} alt={cart.title} />
              <h4>₹ {cart.price}</h4>
              <button onClick={() => removeProductFromCart(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
