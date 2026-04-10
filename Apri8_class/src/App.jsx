import { useState } from "react";
import Card from "./components/Card";

import "./App.css";

function App() {
  const STORE_PRODUCTS = [
    { id: "p1", name: "Mechanical Keyboard", price: 120 },
    { id: "p2", name: "Wireless Mouse", price: 50 },
    { id: "p3", name: "Desk Pad", price: 25 },
  ];

  const [cart, setCart] = useState([]);

  // 1. Add or Increment item
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      updateQuantity(product.id, 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // 2. Generic function to update quantity (+1 or -1)
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

 
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="main">
      <div className="allCard">
        <h1>Store</h1>
        {STORE_PRODUCTS.map((item) => (
          <Card key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>

      <div className="addCard">
        <h1>Your Cart</h1>
        <hr />

        {cart.map((item) => (
          <div key={item.id} className="cartItem">
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            
            <div className="cartActions">
              <button onClick={() => updateQuantity(item.id, -1)}>-1</button>
              <p> Qty: {item.quantity} </p>
              <button onClick={() => updateQuantity(item.id, 1)}>+1</button>
              
              <button className="removeBtn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}

        
        <h2>Total: ${total}</h2>
      </div>
    </div>
  );
}

export default App;